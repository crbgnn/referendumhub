import React, { useState } from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import ProposalGrid from '../components/ProposalGrid';
import CategoryFilter from '../components/CategoryFilter';
import { mockProposals } from '../data/mockData';
import { ProposalCategory } from '../types';
import Button from '../components/ui/Button';

const Home: React.FC = () => {
  // Get featured (premium) proposals
  const featuredProposals = mockProposals
    .filter(proposal => proposal.isPremium)
    .slice(0, 3);
  
  // Get proposals in "collecting" status
  const collectingProposals = mockProposals
    .filter(proposal => proposal.status === 'collecting')
    .slice(0, 3);
  
  // For all proposals section with filtering
  const [selectedCategory, setSelectedCategory] = useState<ProposalCategory | 'all'>('all');
  
  const filteredProposals = selectedCategory === 'all'
    ? mockProposals
    : mockProposals.filter(proposal => proposal.category === selectedCategory);

  return (
    <div>
      <Hero />
      
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProposalGrid 
            proposals={featuredProposals}
            title="Proposte in evidenza"
            subtitle="Le proposte più rilevanti in questo momento"
          />
        </div>
      </div>
      
      <HowItWorks />
      
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProposalGrid 
            proposals={collectingProposals}
            title="Raccolta firme in corso"
            subtitle="Proposte che hanno raggiunto il quorum e stanno raccogliendo firme ufficiali"
          />
        </div>
      </div>
      
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Tutte le proposte</h2>
            <p className="mt-2 text-gray-600">Esplora tutte le proposte di referendum attive sulla piattaforma</p>
          </div>
          
          <CategoryFilter 
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          
          <ProposalGrid proposals={filteredProposals.slice(0, 6)} />
          
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg">
              Vedi tutte le proposte
            </Button>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Hai un'idea per un referendum?
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Crea la tua proposta e inizia a raccogliere voti e firme
          </p>
          <div className="mt-8">
            <Button variant="secondary" size="lg">
              Crea una proposta
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;