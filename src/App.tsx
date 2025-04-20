import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProposalDetail from './pages/ProposalDetail';
import ProposalCreate from './pages/ProposalCreate';
import HowItWorksPage from './pages/HowItWorksPage';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proposals/:id" element={<ProposalDetail />} />
            <Route path="/proposals/create" element={<ProposalCreate />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            {/* Additional routes would be added here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;