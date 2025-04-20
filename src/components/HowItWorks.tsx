import React from 'react';
import { FileText, Vote, Users, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Proponi",
      description: "Crea una proposta chiara e ben documentata, spiegando gli obiettivi e le conseguenze del referendum."
    },
    {
      icon: <Vote className="h-8 w-8 text-blue-600" />,
      title: "Raccogli voti",
      description: "Condividi la tua proposta e raccogli voti dagli utenti registrati sulla piattaforma."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Raccogli firme",
      description: "Una volta raggiunto un numero sufficiente di voti, inizia la raccolta di firme autenticate tramite SPID."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      title: "Presenta",
      description: "Quando raggiungi il numero di firme necessario, la proposta viene presentata agli organi competenti."
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Come funziona
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Segui questi semplici passaggi per proporre e sostenere un referendum
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow">
                  {step.icon}
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 hidden lg:block">
                  {index < steps.length - 1 && (
                    <svg className="h-8 w-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;