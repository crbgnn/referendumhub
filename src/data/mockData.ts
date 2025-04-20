import { Proposal, User, Comment } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Marco Rossi',
    email: 'marco.rossi@example.com',
    spidVerified: true,
    proposalsThisYear: 1,
    createdAt: '2023-01-15T09:32:00Z',
  },
  {
    id: '2',
    name: 'Giulia Bianchi',
    email: 'giulia.bianchi@example.com',
    spidVerified: true,
    proposalsThisYear: 0,
    createdAt: '2023-02-05T14:18:00Z',
  },
  {
    id: '3',
    name: 'Antonio Verdi',
    email: 'antonio.verdi@example.com',
    spidVerified: true,
    proposalsThisYear: 1,
    createdAt: '2023-02-10T16:45:00Z',
  },
];

export const mockProposals: Proposal[] = [
  {
    id: '1',
    title: 'Riforma del Sistema Elettorale',
    description: 'Proposta di riforma del sistema elettorale per garantire una maggiore rappresentatività dei cittadini in Parlamento.',
    category: 'constitutional',
    authorId: '1',
    authorName: 'Marco Rossi',
    createdAt: '2023-03-10T10:30:00Z',
    votes: 1250,
    status: 'voting',
    isPremium: true,
    targetSignatures: 500000,
    currentSignatures: 85000,
    commentsCount: 43,
    documents: [
      {
        id: 'd1',
        title: 'Testo della proposta',
        url: '#',
        type: 'legal'
      },
      {
        id: 'd2',
        title: 'Analisi di impatto',
        url: '#',
        type: 'effect'
      }
    ]
  },
  {
    id: '2',
    title: 'Legge per la Protezione delle Aree Verdi Urbane',
    description: 'Proposta per la tutela e l\'espansione delle aree verdi nelle città italiane, con obbligo di mantenimento di una percentuale minima di spazi verdi.',
    category: 'environmental',
    authorId: '2',
    authorName: 'Giulia Bianchi',
    createdAt: '2023-04-15T14:45:00Z',
    votes: 876,
    status: 'review',
    isPremium: false,
    targetSignatures: 300000,
    currentSignatures: 0,
    commentsCount: 28,
    documents: [
      {
        id: 'd3',
        title: 'Testo della proposta',
        url: '#',
        type: 'legal'
      }
    ]
  },
  {
    id: '3',
    title: 'Modifica della Legge sulla Cittadinanza',
    description: 'Proposta di riforma della legge sulla cittadinanza per introdurre lo ius scholae, garantendo la cittadinanza ai minori stranieri che completano un ciclo di studi in Italia.',
    category: 'social',
    authorId: '3',
    authorName: 'Antonio Verdi',
    createdAt: '2023-03-28T09:15:00Z',
    votes: 2345,
    status: 'collecting',
    isPremium: true,
    targetSignatures: 500000,
    currentSignatures: 325000,
    commentsCount: 152,
    documents: [
      {
        id: 'd4',
        title: 'Testo della proposta',
        url: '#',
        type: 'legal'
      },
      {
        id: 'd5',
        title: 'Studi demografici',
        url: '#',
        type: 'supporting'
      },
      {
        id: 'd6',
        title: 'Analisi di impatto',
        url: '#',
        type: 'effect'
      }
    ]
  },
  {
    id: '4',
    title: 'Riforma del Sistema Sanitario Nazionale',
    description: 'Proposta di riforma del sistema sanitario nazionale per garantire un accesso più equo alle cure e potenziare la sanità territoriale.',
    category: 'healthcare',
    authorId: '2',
    authorName: 'Giulia Bianchi',
    createdAt: '2023-02-18T11:20:00Z',
    votes: 1890,
    status: 'voting',
    isPremium: false,
    targetSignatures: 500000,
    currentSignatures: 0,
    commentsCount: 78,
    documents: [
      {
        id: 'd7',
        title: 'Testo della proposta',
        url: '#',
        type: 'legal'
      },
      {
        id: 'd8',
        title: 'Analisi economica',
        url: '#',
        type: 'supporting'
      }
    ]
  },
  {
    id: '5',
    title: 'Riforma del Sistema Scolastico',
    description: 'Proposta di riforma del sistema scolastico italiano per potenziare l\'insegnamento delle materie STEM e delle lingue straniere.',
    category: 'education',
    authorId: '1',
    authorName: 'Marco Rossi',
    createdAt: '2023-05-05T16:30:00Z',
    votes: 746,
    status: 'review',
    isPremium: false,
    targetSignatures: 350000,
    currentSignatures: 0,
    commentsCount: 34,
    documents: [
      {
        id: 'd9',
        title: 'Testo della proposta',
        url: '#',
        type: 'legal'
      }
    ]
  }
];

export const mockComments: Comment[] = [
  {
    id: 'c1',
    proposalId: '1',
    userId: '2',
    userName: 'Giulia Bianchi',
    content: 'Ottima proposta, ma avrei qualche dubbio sulla reale applicabilità in tempi brevi.',
    createdAt: '2023-03-12T14:30:00Z'
  },
  {
    id: 'c2',
    proposalId: '1',
    userId: '3',
    userName: 'Antonio Verdi',
    content: 'Mi sembra ben strutturata e potrebbe risolvere molti problemi del sistema attuale.',
    createdAt: '2023-03-13T10:15:00Z'
  },
  {
    id: 'c3',
    proposalId: '3',
    userId: '1',
    userName: 'Marco Rossi',
    content: 'Sono pienamente d\'accordo con questa proposta, è importante modernizzare le nostre leggi sulla cittadinanza.',
    createdAt: '2023-03-30T18:20:00Z'
  }
];