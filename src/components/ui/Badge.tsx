import React from 'react';
import { ProposalStatus, ProposalCategory } from '../../types';

interface BadgeProps {
  type: 'status' | 'category';
  value: ProposalStatus | ProposalCategory;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ type, value, className = '' }) => {
  let baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
  let specificClasses = '';

  if (type === 'status') {
    switch (value) {
      case 'draft':
        specificClasses = 'bg-gray-100 text-gray-800';
        break;
      case 'review':
        specificClasses = 'bg-yellow-100 text-yellow-800';
        break;
      case 'voting':
        specificClasses = 'bg-blue-100 text-blue-800';
        break;
      case 'collecting':
        specificClasses = 'bg-green-100 text-green-800';
        break;
      case 'completed':
        specificClasses = 'bg-purple-100 text-purple-800';
        break;
      case 'rejected':
        specificClasses = 'bg-red-100 text-red-800';
        break;
      default:
        specificClasses = 'bg-gray-100 text-gray-800';
    }
  } else if (type === 'category') {
    switch (value) {
      case 'constitutional':
        specificClasses = 'bg-amber-100 text-amber-800';
        break;
      case 'environmental':
        specificClasses = 'bg-emerald-100 text-emerald-800';
        break;
      case 'economic':
        specificClasses = 'bg-blue-100 text-blue-800';
        break;
      case 'social':
        specificClasses = 'bg-indigo-100 text-indigo-800';
        break;
      case 'healthcare':
        specificClasses = 'bg-rose-100 text-rose-800';
        break;
      case 'education':
        specificClasses = 'bg-violet-100 text-violet-800';
        break;
      case 'other':
        specificClasses = 'bg-gray-100 text-gray-800';
        break;
      default:
        specificClasses = 'bg-gray-100 text-gray-800';
    }
  }

  // Translate status or category for display
  const getDisplayText = () => {
    if (type === 'status') {
      const statusMap: Record<ProposalStatus, string> = {
        draft: 'Bozza',
        review: 'In Revisione',
        voting: 'Votazione',
        collecting: 'Raccolta Firme',
        completed: 'Completato',
        rejected: 'Respinto'
      };
      return statusMap[value as ProposalStatus] || value;
    } else {
      const categoryMap: Record<ProposalCategory, string> = {
        constitutional: 'Costituzionale',
        environmental: 'Ambientale',
        economic: 'Economico',
        social: 'Sociale',
        healthcare: 'Sanità',
        education: 'Istruzione',
        other: 'Altro'
      };
      return categoryMap[value as ProposalCategory] || value;
    }
  };

  return (
    <span className={`${baseClasses} ${specificClasses} ${className}`}>
      {getDisplayText()}
    </span>
  );
};

export default Badge;