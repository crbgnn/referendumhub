import React from 'react';
import { FileText, Vote, Users, CheckCircle, Award, AlertTriangle, Lock } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const HowItWorksPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Come funziona HubReferendario
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Scopri come proporre, sostenere e partecipare attivamente alla democrazia diretta italiana attraverso la nostra piattaforma.
          </p>
        </div>
        
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Il processo in dettaglio</h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>
            
            <div className="space-y-16">
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Registrazione e Autenticazione</h3>
                      <p className="text-gray-600">
                        Per garantire la legalità e prevenire abusi, tutti gli utenti devono registrarsi utilizzando SPID, il Sistema Pubblico di Identità Digitale italiano. Questo garantisce che ogni partecipante sia un cittadino italiano reale con diritto di voto.
                      </p>
                    </div>
                  </div>
                  <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold">
                    1
                  </div>
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold">
                    1
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="flex justify-center">
                      <Lock className="w-20 h-20 text-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right order-1 md:order-2">
                    <div className="flex justify-center">
                      <FileText className="w-20 h-20 text-blue-500" />
                    </div>
                  </div>
                  <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold">
                    2
                  </div>
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold">
                    2
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-2 md:order-1">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Creazione della Proposta</h3>
                      <p className="text-gray-600">
                        Ogni utente può creare una proposta di referendum all'anno. La proposta deve includere un titolo chiaro, una descrizione dettagliata, il testo legale completo e documentazione di supporto. Tutte le proposte passano attraverso un controllo di ammissibilità legale.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Fase di Votazione</h3>
                      <p className="text-gray-600">
                        Le proposte ammissibili entrano nella fase di votazione, dove gli utenti possono esprimere il loro supporto e discutere nei commenti. Solo le proposte che raggiungono un numero significativo di voti passano alla fase successiva. Questo filtra le proposte che hanno realmente un sostegno popolare.
                      </p>
                    </div>
                  </div>
                  <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold">
                    3
                  </div>
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold">
                    3
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="flex justify-center">
                      <Vote className="w-20 h-20 text-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right order-1 md:order-2">
                    <div className="flex justify-center">
                      <Users className="w-20 h-20 text-blue-500" />
                    </div>
                  </div>
                  <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold">
                    4
                  </div>
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold">
                    4
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-2 md:order-1">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">4. Raccolta Firme</h3>
                      <p className="text-gray-600">
                        Le proposte con sufficiente supporto passano alla fase di raccolta firme. In questa fase, i cittadini possono firmare ufficialmente la proposta attraverso SPID. Per i referendum nazionali sono necessarie 500.000 firme valide, mentre per quelli locali il numero varia in base alla normativa locale.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">5. Presentazione Ufficiale</h3>
                      <p className="text-gray-600">
                        Quando una proposta raggiunge il numero necessario di firme, viene presentata ufficialmente agli organi competenti. Per i referendum nazionali, vengono sottoposti alla Corte Costituzionale che ne valuta l'ammissibilità. Se approvati, i cittadini saranno chiamati alle urne per votare.
                      </p>
                    </div>
                  </div>
                  <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold">
                    5
                  </div>
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold">
                    5
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="flex justify-center">
                      <CheckCircle className="w-20 h-20 text-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Funzionalità Premium</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="transform transition-all hover:scale-105 hover:shadow-lg">
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Award className="h-12 w-12 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proposte in Evidenza</h3>
                <p className="text-gray-600 mb-4">
                  Posiziona la tua proposta in cima alla lista per ottenere maggiore visibilità e aumentare le possibilità di raccogliere voti e firme.
                </p>
              </div>
            </Card>
            
            <Card className="transform transition-all hover:scale-105 hover:shadow-lg">
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Campagne Sponsorizzate</h3>
                <p className="text-gray-600 mb-4">
                  Crea campagne promozionali dedicate per la tua proposta, raggiungendo utenti interessati a tematiche simili e aumentando il coinvolgimento.
                </p>
              </div>
            </Card>
            
            <Card className="transform transition-all hover:scale-105 hover:shadow-lg">
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Analisi Avanzate</h3>
                <p className="text-gray-600 mb-4">
                  Accedi a statistiche dettagliate sulla tua proposta, monitora il progresso della raccolta firme e ottieni insights demografici sui sostenitori.
                </p>
              </div>
            </Card>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Domande Frequenti</h2>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="divide-y divide-gray-200">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Chi può proporre un referendum?</h3>
                <p className="text-gray-600">
                  Qualsiasi cittadino italiano registrato sulla piattaforma tramite SPID può proporre un referendum. Ogni utente può creare al massimo una proposta all'anno per evitare abusi e garantire proposte di qualità.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Quali tipi di referendum si possono proporre?</h3>
                <p className="text-gray-600">
                  Sulla piattaforma è possibile proporre sia referendum nazionali (abrogativi e costituzionali) che referendum locali (regionali e comunali). Ogni proposta deve rispettare i requisiti legali specifici per il tipo di referendum.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Come funziona la verifica legale delle proposte?</h3>
                <p className="text-gray-600">
                  Tutte le proposte inviate vengono esaminate da un team di esperti legali che ne valutano l'ammissibilità secondo le leggi italiane. Questo processo garantisce che solo proposte legalmente valide passino alla fase di raccolta voti.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Le firme raccolte sono legalmente valide?</h3>
                <p className="text-gray-600">
                  Sì, le firme raccolte tramite SPID sulla piattaforma sono legalmente valide secondo la normativa italiana. Il sistema garantisce l'autenticità dell'identità del firmatario e previene frodi.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Cosa succede quando una proposta raggiunge il numero necessario di firme?</h3>
                <p className="text-gray-600">
                  Una volta raccolto il numero necessario di firme, la proposta viene presentata agli organi competenti. Per i referendum nazionali, la proposta viene sottoposta alla Corte Costituzionale che ne valuta l'ammissibilità. Se approvata, i cittadini saranno chiamati alle urne.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-600 rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Pronto a partecipare?</h2>
          <p className="text-xl text-blue-100 mb-6">
            Unisciti a migliaia di cittadini italiani che stanno facendo sentire la propria voce attraverso HubReferendario.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg">
              Crea una proposta
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-blue-700">
              Esplora le proposte
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;