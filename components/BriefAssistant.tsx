import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Loader2, Copy, Check } from 'lucide-react';
import { refineProjectBrief } from '../services/geminiService';

export const BriefAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<'input' | 'processing' | 'result'>('input');
  const [inputs, setInputs] = useState({ concept: '', tone: '', duration: '' });
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    const brief = await refineProjectBrief(inputs);
    setResult(brief);
    setStep('result');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const reset = () => {
    setInputs({ concept: '', tone: '', duration: '' });
    setResult('');
    setStep('input');
    setIsOpen(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-ink text-paper px-6 py-4 rounded-full shadow-2xl hover:bg-accent transition-colors duration-300 flex items-center gap-2 font-serif"
      >
        <Sparkles size={18} />
        <span className="hidden md:inline">Start a Project</span>
      </button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-paper/90 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white border border-stone-200 w-full max-w-2xl shadow-xl overflow-hidden relative"
            >
              {/* Header */}
              <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-stone-50">
                <div className="flex items-center gap-2 text-ink">
                  <Sparkles size={20} className="text-accent" />
                  <h2 className="font-serif text-xl">AI Creative Assistant</h2>
                </div>
                <button onClick={reset} className="text-stone-400 hover:text-accent transition-colors">
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="p-8 min-h-[400px] flex flex-col">
                {step === 'input' && (
                  <form onSubmit={handleSubmit} className="space-y-6 flex-1">
                    <p className="text-stone-600 font-sans text-sm leading-relaxed">
                      Tell me a little about your vision. I use Gemini AI to structure your raw ideas into a professional production brief.
                    </p>
                    
                    <div className="space-y-1">
                      <label className="text-xs uppercase tracking-widest text-stone-500 font-semibold">Concept</label>
                      <textarea
                        required
                        value={inputs.concept}
                        onChange={(e) => setInputs(prev => ({ ...prev, concept: e.target.value }))}
                        className="w-full bg-stone-50 border-b border-stone-300 focus:border-accent outline-none py-2 text-ink font-sans resize-none h-24"
                        placeholder="e.g., A coffee brand launch focusing on the morning ritual..."
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-xs uppercase tracking-widest text-stone-500 font-semibold">Mood / Tone</label>
                        <input
                          type="text"
                          required
                          value={inputs.tone}
                          onChange={(e) => setInputs(prev => ({ ...prev, tone: e.target.value }))}
                          className="w-full bg-stone-50 border-b border-stone-300 focus:border-accent outline-none py-2 text-ink font-sans"
                          placeholder="e.g., Energetic, Melancholy"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs uppercase tracking-widest text-stone-500 font-semibold">Est. Duration</label>
                        <input
                          type="text"
                          required
                          value={inputs.duration}
                          onChange={(e) => setInputs(prev => ({ ...prev, duration: e.target.value }))}
                          className="w-full bg-stone-50 border-b border-stone-300 focus:border-accent outline-none py-2 text-ink font-sans"
                          placeholder="e.g., 30 seconds"
                        />
                      </div>
                    </div>

                    <div className="pt-6 flex justify-end">
                      <button
                        type="submit"
                        className="bg-ink text-white px-8 py-3 rounded-none hover:bg-accent transition-colors flex items-center gap-2 text-sm tracking-wide uppercase"
                      >
                        Refine Brief <Send size={14} />
                      </button>
                    </div>
                  </form>
                )}

                {step === 'processing' && (
                  <div className="flex-1 flex flex-col items-center justify-center text-stone-500 gap-4">
                    <Loader2 className="animate-spin text-accent" size={40} />
                    <p className="font-serif italic">Structuring your vision...</p>
                  </div>
                )}

                {step === 'result' && (
                  <div className="flex-1 flex flex-col h-full">
                     <div className="flex-1 overflow-y-auto pr-2 mb-6 text-sm text-ink font-sans leading-relaxed whitespace-pre-wrap border-l-2 border-accent pl-6">
                      {result}
                     </div>
                     <div className="flex gap-4 justify-end pt-4 border-t border-stone-100">
                        <button
                          onClick={() => setStep('input')}
                          className="text-stone-500 hover:text-ink text-sm uppercase tracking-wide"
                        >
                          Edit Inputs
                        </button>
                        <button
                          onClick={handleCopy}
                          className="bg-stone-100 text-ink px-6 py-3 hover:bg-stone-200 transition-colors flex items-center gap-2 text-sm uppercase tracking-wide"
                        >
                          {copied ? <Check size={14} /> : <Copy size={14} />}
                          {copied ? 'Copied' : 'Copy Brief'}
                        </button>
                     </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
