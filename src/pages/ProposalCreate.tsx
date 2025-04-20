import React, { useState } from 'react';
import { AtSign, Info, AlertTriangle } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const ProposalCreate: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    legalText: '',
    effect: '',
    documents: [] as File[]
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileList = Array.from(e.target.files);
      setFormData(prev => ({
        ...prev,
        documents: [...prev.documents, ...fileList]
      }));
    }
  };
  
  const handleRemoveFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents.filter((_, i) => i !== index)
    }));
  };
  
  const handleNext = () => {
    setStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };
  
  const handlePrev = () => {
    setStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send the form data to an API
    alert('Proposta inviata con successo!');
  };
  
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Crea una proposta di referendum</h1>
          <p className="mt-2 text-gray-600">
            Compila il modulo seguente per creare una nuova proposta di referendum.
          </p>
        </div>
        
        <div className="mb-8">
          <div className="flex items-center">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
              step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              1
            </div>
            <div className={`flex-1 h-1 mx-2 ${
              step >= 2 ? 'bg-blue-600' : 'bg-gray-200'
            }`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
              step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              2
            </div>
            <div className={`flex-1 h-1 mx-2 ${
              step >= 3 ? 'bg-blue-600' : 'bg-gray-200'
            }`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
              step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              3
            </div>
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <div className="text-center w-1/3">Informazioni base</div>
            <div className="text-center w-1/3">Testo e documenti</div>
            <div className="text-center w-1/3">Revisione e invio</div>
          </div>
        </div>
        
        <Card>
          <div className="p-6">
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Informazioni base</h2>
                  
                  <div className="mb-6">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                      Titolo della proposta *
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      Il titolo deve essere chiaro e descrivere in modo conciso l'oggetto della proposta.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                      Categoria *
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    >
                      <option value="">Seleziona una categoria</option>
                      <option value="constitutional">Costituzionale</option>
                      <option value="environmental">Ambientale</option>
                      <option value="economic">Economico</option>
                      <option value="social">Sociale</option>
                      <option value="healthcare">Sanità</option>
                      <option value="education">Istruzione</option>
                      <option value="other">Altro</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                      Descrizione della proposta *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={5}
                      className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      Descrivi in modo chiaro e completo la proposta, spiegando gli obiettivi e le motivazioni.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-md mb-6">
                    <div className="flex">
                      <Info className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                      <div>
                        <h3 className="text-sm font-medium text-blue-800">Informazione importante</h3>
                        <p className="text-sm text-blue-700 mt-1">
                          Ricorda che puoi presentare al massimo una proposta all'anno. Assicurati che la tua proposta sia ben documentata e rispetti i requisiti legali.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="button" variant="primary" onClick={handleNext}>
                      Continua
                    </Button>
                  </div>
                </div>
              )}
              
              {step === 2 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Testo e documenti</h2>
                  
                  <div className="mb-6">
                    <label htmlFor="legalText" className="block text-sm font-medium text-gray-700 mb-1">
                      Testo legale della proposta *
                    </label>
                    <textarea
                      id="legalText"
                      name="legalText"
                      value={formData.legalText}
                      onChange={handleChange}
                      rows={8}
                      className="w-full font-mono text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      Inserisci il testo legale completo della proposta di referendum. Questo sarà il testo ufficiale.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="effect" className="block text-sm font-medium text-gray-700 mb-1">
                      Effetti previsti
                    </label>
                    <textarea
                      id="effect"
                      name="effect"
                      value={formData.effect}
                      onChange={handleChange}
                      rows={4}
                      className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      Descrivi gli effetti previsti dell'approvazione di questa proposta sulla società e sul sistema giuridico.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <span className="block text-sm font-medium text-gray-700 mb-1">
                      Documenti di supporto
                    </span>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div className="flex justify-center text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                          >
                            <span>Carica un file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} multiple />
                          </label>
                          <p className="pl-1">o trascina e rilascia</p>
                        </div>
                        <p className="text-xs text-gray-500">PDF, DOC, DOCX fino a 10MB</p>
                      </div>
                    </div>
                  </div>
                  
                  {formData.documents.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-700 mb-2">File caricati</h3>
                      <ul className="divide-y divide-gray-200 border border-gray-200 rounded-md">
                        {formData.documents.map((file, index) => (
                          <li key={index} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                            <div className="w-0 flex-1 flex items-center">
                              <svg className="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                              </svg>
                              <span className="ml-2 flex-1 w-0 truncate">{file.name}</span>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                              <button
                                type="button"
                                className="font-medium text-red-600 hover:text-red-500"
                                onClick={() => handleRemoveFile(index)}
                              >
                                Rimuovi
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={handlePrev}>
                      Indietro
                    </Button>
                    <Button type="button" variant="primary" onClick={handleNext}>
                      Continua
                    </Button>
                  </div>
                </div>
              )}
              
              {step === 3 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Revisione e invio</h2>
                  
                  <div className="bg-yellow-50 p-4 rounded-md mb-6">
                    <div className="flex">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
                      <div>
                        <h3 className="text-sm font-medium text-yellow-800">Importante!</h3>
                        <p className="text-sm text-yellow-700 mt-1">
                          Prima di inviare la tua proposta, assicurati che tutte le informazioni siano corrette e complete. Una volta inviata, la proposta non potrà essere modificata e verrà sottoposta a revisione legale.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-md border border-gray-200 mb-6">
                    <div className="px-4 py-5 sm:px-6">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Riepilogo della proposta
                      </h3>
                    </div>
                    <div className="border-t border-gray-200">
                      <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">Titolo</dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {formData.title || 'Non specificato'}
                          </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">Categoria</dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {formData.category ? (
                              {'constitutional': 'Costituzionale', 
                               'environmental': 'Ambientale',
                               'economic': 'Economico', 
                               'social': 'Sociale', 
                               'healthcare': 'Sanità', 
                               'education': 'Istruzione', 
                               'other': 'Altro'}[formData.category]
                            ) : 'Non specificato'}
                          </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">Descrizione</dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {formData.description || 'Non specificato'}
                          </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">Documenti allegati</dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {formData.documents.length > 0 ? (
                              <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                {formData.documents.map((file, index) => (
                                  <li key={index} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                    <div className="w-0 flex-1 flex items-center">
                                      <svg className="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                                      </svg>
                                      <span className="ml-2 flex-1 w-0 truncate">{file.name}</span>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              'Nessun documento allegato'
                            )}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center">
                      <input
                        id="agree-terms"
                        name="agree-terms"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        required
                      />
                      <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-900">
                        Accetto i <a href="#" className="text-blue-600 hover:text-blue-500">termini e condizioni</a> e confermo che le informazioni fornite sono accurate e veritiere.
                      </label>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-md mb-6">
                    <div className="flex">
                      <AtSign className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                      <div>
                        <h3 className="text-sm font-medium text-blue-800">Verifica con SPID</h3>
                        <p className="text-sm text-blue-700 mt-1">
                          Per completare l'invio della proposta, dovrai autenticarti con il tuo account SPID. Questo garantisce l'autenticità della tua identità e la validità legale della proposta.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={handlePrev}>
                      Indietro
                    </Button>
                    <Button type="submit" variant="primary">
                      Invia proposta
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProposalCreate;