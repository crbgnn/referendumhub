import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  isPremium?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', isPremium = false }) => {
  const baseClasses = 'bg-white rounded-lg shadow overflow-hidden transition-all duration-300';
  const premiumClasses = isPremium ? 'border-2 border-amber-400 ring-2 ring-amber-200' : '';
  
  return (
    <div className={`${baseClasses} ${premiumClasses} ${className} hover:shadow-lg`}>
      {isPremium && (
        <div className="bg-gradient-to-r from-amber-400 to-amber-300 text-amber-900 text-xs font-bold px-3 py-1 text-center">
          PROPOSTA IN EVIDENZA
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;