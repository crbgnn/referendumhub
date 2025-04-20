import React from 'react';
import { Proposal } from '../types';
import ProposalCard from './ProposalCard';

interface ProposalGridProps {
  proposals: Proposal[];
  title?: string;
  subtitle?: string;
}

const ProposalGrid: React.FC<ProposalGridProps> = ({ 
  proposals, 
  title, 
  subtitle 
}) => {
  return (
    <div>
      {title && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {proposals.map((proposal) => (
          <ProposalCard key={proposal.id} proposal={proposal} />
        ))}
      </div>
      
      {proposals.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500">Nessuna proposta trovata.</p>
        </div>
      )}
    </div>
  );
};

export default ProposalGrid;