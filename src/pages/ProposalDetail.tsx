import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ThumbsUp, Download, Share2, Flag, User, Calendar, Clock } from 'lucide-react';
import { mockProposals, mockComments } from '../data/mockData';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import Card from '../components/ui/Card';

const ProposalDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const proposal = mockProposals.find(p => p.id === id);
  const comments = mockComments.filter(c => c.proposalId === id);
  
  const [isVoted, setIsVoted] = useState(false);
  const [commentText, setCommentText] = useState('');
  
  if (!proposal) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-16">
          <h2 className="text-3xl font-bold text-gray-900">Proposta non trovata</h2>
          <p className="mt-4 text-gray-500">La proposta che stai cercando non esiste o è stata rimossa.</p>
          <Link to="/proposals" className="mt-6 inline-block text-blue-600 hover:text-blue-800">
            Torna all'elenco delle proposte
          </Link>
        </div>
      </div>
    );
  }
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('it-IT', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };
  
  const handleVote = () => {
    setIsVoted(!isVoted);
  };
  
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send the comment to an API
    alert(`Commento inviato: ${commentText}`);
    setCommentText('');
  };
  
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main content */}
          <div className="flex-1">
            <Card className="mb-8">
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge type="category" value={proposal.category} />
                  <Badge type="status" value={proposal.status} />
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{proposal.title}</h1>
                
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <User className="h-4 w-4 mr-1" />
                  <span>Proposto da </span>
                  <Link to={`/user/${proposal.authorId}`} className="ml-1 font-medium text-blue-600 hover:text-blue-800">
                    {proposal.authorName}
                  </Link>
                  <span className="mx-2">•</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{formatDate(proposal.createdAt)}</span>
                </div>
                
                <div className="prose max-w-none mb-8">
                  <p className="text-gray-600">{proposal.description}</p>
                  <p className="text-gray-600 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, 
                    nunc nisl aliquam nunc, vitae aliquam nisl nisl sit amet nisl. Nullam euismod, nisl eget aliquam ultricies,
                    nunc nisl aliquam nunc, vitae aliquam nisl nisl sit amet nisl.
                  </p>
                  <p className="text-gray-600 mt-4">
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                
                {proposal.status === 'collecting' && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Stato della raccolta firme</h3>
                    <ProgressBar 
                      current={proposal.currentSignatures} 
                      target={proposal.targetSignatures} 
                    />
                    <div className="mt-4">
                      <Button variant="primary" size="lg" fullWidth>
                        Firma con SPID
                      </Button>
                    </div>
                  </div>
                )}
                
                <div className="border-t border-gray-200 pt-4 flex flex-wrap gap-2">
                  <Button 
                    variant={isVoted ? "primary" : "outline"}
                    onClick={handleVote}
                    icon={<ThumbsUp className="h-4 w-4" />}
                  >
                    {isVoted ? "Hai supportato" : "Supporta"} ({proposal.votes})
                  </Button>
                  <Button 
                    variant="outline"
                    icon={<Share2 className="h-4 w-4" />}
                  >
                    Condividi
                  </Button>
                  <Button 
                    variant="outline"
                    icon={<Flag className="h-4 w-4" />}
                  >
                    Segnala
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="mb-8">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Documenti allegati</h2>
                <div className="space-y-3">
                  {proposal.documents.map(doc => (
                    <div key={doc.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                      <div>
                        <span className="font-medium text-gray-800">{doc.title}</span>
                        <span className="ml-2 text-xs text-gray-500 bg-gray-200 px-2 py-0.5 rounded">
                          {doc.type === 'legal' ? 'Documento legale' : 
                           doc.type === 'supporting' ? 'Documento di supporto' : 
                           'Analisi di impatto'}
                        </span>
                      </div>
                      <Button
                        variant="text"
                        size="sm"
                        icon={<Download className="h-4 w-4" />}
                      >
                        Scarica
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Commenti ({proposal.commentsCount})
                </h2>
                
                <form onSubmit={handleCommentSubmit} className="mb-6">
                  <div className="mb-3">
                    <textarea
                      className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      rows={3}
                      placeholder="Scrivi un commento..."
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" variant="primary">
                    Pubblica commento
                  </Button>
                </form>
                
                <div className="space-y-6">
                  {comments.map(comment => (
                    <div key={comment.id} className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center">
                          <div className="mr-3 bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                            <User className="h-4 w-4 text-gray-500" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-gray-900">{comment.userName}</h4>
                            <p className="text-xs text-gray-500">{formatDate(comment.createdAt)}</p>
                          </div>
                        </div>
                      </div>
                      <p className="mt-2 text-gray-600">{comment.content}</p>
                    </div>
                  ))}
                  
                  {comments.length === 0 && (
                    <p className="text-gray-500 text-center py-4">
                      Non ci sono ancora commenti. Sii il primo a commentare!
                    </p>
                  )}
                  
                  {comments.length > 0 && comments.length < proposal.commentsCount && (
                    <div className="text-center pt-4">
                      <Button variant="text">
                        Carica altri commenti
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="md:w-80">
            <div className="sticky top-24">
              <Card className="mb-6">
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Informazioni</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Categoria:</span>
                      <Badge type="category" value={proposal.category} />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Stato:</span>
                      <Badge type="status" value={proposal.status} />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Data proposta:</span>
                      <span className="text-gray-900">{formatDate(proposal.createdAt)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Supporti:</span>
                      <span className="text-gray-900">{proposal.votes}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Commenti:</span>
                      <span className="text-gray-900">{proposal.commentsCount}</span>
                    </div>
                    {proposal.status === 'collecting' && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Firme raccolte:</span>
                        <span className="text-gray-900">{proposal.currentSignatures.toLocaleString('it-IT')}/{proposal.targetSignatures.toLocaleString('it-IT')}</span>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
              
              <Card className="mb-6">
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Proponente</h3>
                  <div className="flex items-center">
                    <div className="mr-3 bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center">
                      <User className="h-5 w-5 text-gray-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{proposal.authorName}</h4>
                      <Link to={`/user/${proposal.authorId}`} className="text-xs text-blue-600 hover:text-blue-800">
                        Visualizza profilo
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
              
              {proposal.status === 'voting' && (
                <Card>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Supporta questa proposta</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Questa proposta ha bisogno del tuo supporto per passare alla fase di raccolta firme.
                    </p>
                    <Button 
                      variant={isVoted ? "primary" : "outline"}
                      onClick={handleVote}
                      fullWidth
                      icon={<ThumbsUp className="h-4 w-4" />}
                    >
                      {isVoted ? "Hai supportato" : "Supporta"}
                    </Button>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalDetail;