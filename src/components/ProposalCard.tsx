import React from 'react';
import { Link } from 'react-router-dom';
import { ThumbsUp, MessageSquare, Award } from 'lucide-react';
import { Proposal } from '../types';
import Card from './ui/Card';
import Badge from './ui/Badge';
import ProgressBar from './ui/ProgressBar';

interface ProposalCardProps {
  proposal: Proposal;
}

const ProposalCard: React.FC<ProposalCardProps> = ({ proposal }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('it-IT', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  // Don't show progress bar for proposals not in collecting phase
  const showProgressBar = proposal.status === 'collecting';

  return (
    <Card isPremium={proposal.isPremium} className="h-full">
      <div className="p-5 flex flex-col h-full">
        <div className="flex justify-between items-start mb-3">
          <Badge type="category" value={proposal.category} />
          <Badge type="status" value={proposal.status} />
        </div>
        
        <Link to={`/proposals/${proposal.id}`} className="group">
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {proposal.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {proposal.description.length > 150 
            ? `${proposal.description.substring(0, 150)}...` 
            : proposal.description}
        </p>
        
        {showProgressBar && (
          <div className="mb-4">
            <ProgressBar 
              current={proposal.currentSignatures} 
              target={proposal.targetSignatures} 
            />
          </div>
        )}
        
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span>Proposto da </span>
          <Link to={`/user/${proposal.authorId}`} className="ml-1 font-medium text-blue-600 hover:text-blue-800">
            {proposal.authorName}
          </Link>
          <span className="mx-1">•</span>
          <span>{formatDate(proposal.createdAt)}</span>
        </div>
        
        <div className="flex items-center justify-between pt-3 border-t border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-500">
              <ThumbsUp className="h-4 w-4 mr-1" />
              <span className="text-sm">{proposal.votes}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <MessageSquare className="h-4 w-4 mr-1" />
              <span className="text-sm">{proposal.commentsCount}</span>
            </div>
          </div>
          <Link 
            to={`/proposals/${proposal.id}`}
            className="text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            Leggi di più →
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ProposalCard;