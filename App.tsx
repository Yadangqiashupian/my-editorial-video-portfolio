import React from 'react';
import { Hero } from './components/Hero';
import { PortfolioList } from './components/PortfolioList';
import { BriefAssistant } from './components/BriefAssistant';
import { Menu } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 md:py-8 flex justify-between items-center mix-blend-difference text-white pointer-events-none">
        <div className="pointer-events-auto cursor-pointer">
          <span className="font-serif text-xl font-bold tracking-wider">LUMINA</span>
        </div>
        <div className="pointer-events-auto cursor-pointer flex items-center gap-2 group">
           <span className="hidden md:block text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Menu</span>
           <Menu size={24} />
        </div>
      </nav>

      <main>
        <Hero />
        <PortfolioList />
        
        {/* Footer / Contact Section */}
        <section className="bg-ink text-paper py-32 px-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div>
               <h2 className="text-6xl md:text-8xl font-serif mb-8">Let's Cut.</h2>
               <a href="mailto:hello@lumina.studio" className="text-xl border-b border-stone-600 pb-1 hover:text-accent hover:border-accent transition-colors">
                 hello@lumina.studio
               </a>
            </div>
            <div className="flex gap-8 text-stone-500 text-sm uppercase tracking-widest">
               <a href="#" className="hover:text-white transition-colors">Instagram</a>
               <a href="#" className="hover:text-white transition-colors">Vimeo</a>
               <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
          <div className="container mx-auto mt-24 pt-8 border-t border-stone-800 text-stone-600 text-xs flex justify-between">
             <span>© 2024 Lumina Studio</span>
             <span>Developed with React & Gemini</span>
          </div>
        </section>
      </main>

      <BriefAssistant />
    </div>
  );
};

export default App;
