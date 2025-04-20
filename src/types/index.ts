export interface User {
  id: string;
  name: string;
  email: string;
  spidVerified: boolean;
  proposalsThisYear: number;
  createdAt: string;
}

export interface Proposal {
  id: string;
  title: string;
  description: string;
  category: ProposalCategory;
  authorId: string;
  authorName: string;
  createdAt: string;
  votes: number;
  status: ProposalStatus;
  isPremium: boolean;
  targetSignatures: number;
  currentSignatures: number;
  commentsCount: number;
  documents: Document[];
}

export interface Document {
  id: string;
  title: string;
  url: string;
  type: 'legal' | 'supporting' | 'effect';
}

export interface Comment {
  id: string;
  proposalId: string;
  userId: string;
  userName: string;
  content: string;
  createdAt: string;
}

export type ProposalCategory = 
  | 'constitutional'
  | 'environmental'
  | 'economic'
  | 'social'
  | 'healthcare'
  | 'education'
  | 'other';

export type ProposalStatus = 
  | 'draft'
  | 'review'
  | 'voting'
  | 'collecting'
  | 'completed'
  | 'rejected';