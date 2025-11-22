import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 bg-paper pt-20">
      
      {/* Abstract Background Element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute right-[10%] top-[20%] w-64 h-96 border border-stone-300 opacity-30 hidden md:block"
      />
       <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        className="absolute left-[15%] bottom-[20%] w-48 h-48 bg-stone-200/50 mix-blend-multiply hidden md:block"
      />

      <div className="max-w-6xl w-full z-10">
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[12vw] md:text-[9vw] leading-[0.9] font-serif text-ink mix-blend-darken"
          >
            Sculpting
          </motion.h1>
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-12">
          <div className="overflow-hidden">
             <motion.h1 
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[12vw] md:text-[9vw] leading-[0.9] font-serif text-ink italic"
            >
              Time
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="max-w-sm mt-4 md:mt-0"
          >
            <p className="font-sans text-stone-600 text-sm md:text-base leading-relaxed">
              We transform raw footage into emotive narratives. 
              Precise cuts, intentional rhythm, and a timeless aesthetic 
              for brands that value legacy.
            </p>
          </motion.div>
        </div>

        <div className="overflow-hidden text-right">
           <motion.h1 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[12vw] md:text-[9vw] leading-[0.9] font-serif text-stone-300"
          >
            & Motion
          </motion.h1>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-stone-400"
      >
        Scroll to Explore
      </motion.div>
    </section>
  );
};
