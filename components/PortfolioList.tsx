import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ArrowUpRight, PlayCircle } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

export const PortfolioList: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Mouse tracking for floating preview
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animation for the preview image
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Update coordinates relative to viewport
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <>
        <div 
        className="relative py-20 md:py-40 w-full bg-paper cursor-default min-h-screen" 
        onMouseMove={handleMouseMove}
        >
        
        {/* Floating Preview Image - Only visible on desktop when hovering */}
        <motion.div
            className="fixed top-0 left-0 w-[400px] h-[250px] pointer-events-none z-20 hidden md:block overflow-hidden"
            style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        >
            {hoveredProject && (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
            >
                <img 
                src={hoveredProject.thumbnail} 
                alt="Preview" 
                className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-accent/20 mix-blend-multiply"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                     <div className="bg-white/90 text-ink rounded-full p-3 backdrop-blur-sm">
                        <PlayCircle size={32} />
                     </div>
                </div>
            </motion.div>
            )}
        </motion.div>

        <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400 mb-12 border-b border-stone-300 pb-4">
            Selected Works (2022 — 2024)
            </h2>

            <div className="flex flex-col">
            {PROJECTS.map((project, index) => (
                <ProjectItem 
                key={project.id} 
                project={project} 
                index={index}
                setHovered={setHoveredProject}
                onClick={() => setSelectedProject(project)}
                />
            ))}
            </div>
        </div>
        </div>

        {/* Video Modal */}
        <AnimatePresence>
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </AnimatePresence>
    </>
  );
};

interface ProjectItemProps {
  project: Project;
  index: number;
  setHovered: (p: Project | null) => void;
  onClick: () => void;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, index, setHovered, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setHovered(project)}
      onMouseLeave={() => setHovered(null)}
      onClick={onClick}
      className="group relative border-t border-stone-300 py-12 transition-colors hover:bg-white/50 cursor-pointer"
    >
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-12">
        
        {/* Left: Index & Year */}
        <div className="w-full md:w-1/6 flex justify-between md:block text-stone-400 font-sans text-sm">
          <span className="block">0{index + 1}</span>
          <span className="block md:mt-2">{project.year}</span>
        </div>

        {/* Middle: Title */}
        <div className="w-full md:w-3/6">
          <h3 className="text-4xl md:text-6xl font-serif text-ink group-hover:translate-x-4 transition-transform duration-500 ease-out group-hover:text-accent">
            {project.title}
          </h3>
          <div className="md:hidden mt-4 overflow-hidden h-48 w-full relative">
             <img src={project.thumbnail} className="w-full h-full object-cover grayscale" alt={project.title}/>
             <div className="absolute inset-0 flex items-center justify-center text-white drop-shadow-lg">
                <PlayCircle size={48} strokeWidth={1} />
             </div>
          </div>
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-2/6 flex flex-col justify-between items-start md:items-end">
          <div className="text-stone-500 font-sans text-sm uppercase tracking-wider mb-2">
            {project.category} — {project.client}
          </div>
          
          <div className="overflow-hidden h-6 relative">
             <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-1 text-accent">
               <span className="uppercase text-xs font-bold tracking-widest">Watch Project</span>
               <ArrowUpRight size={14} />
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};