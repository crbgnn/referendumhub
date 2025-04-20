import React from 'react';
import { ProposalCategory } from '../types';

interface CategoryFilterProps {
  selectedCategory: ProposalCategory | 'all';
  onSelectCategory: (category: ProposalCategory | 'all') => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategory, 
  onSelectCategory 
}) => {
  const categories: { id: ProposalCategory | 'all'; name: string }[] = [
    { id: 'all', name: 'Tutte le categorie' },
    { id: 'constitutional', name: 'Costituzionale' },
    { id: 'environmental', name: 'Ambientale' },
    { id: 'economic', name: 'Economico' },
    { id: 'social', name: 'Sociale' },
    { id: 'healthcare', name: 'Sanità' },
    { id: 'education', name: 'Istruzione' },
    { id: 'other', name: 'Altro' }
  ];

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;