import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-paper/95 backdrop-blur-md flex flex-col"
    >
      {/* Header / Close Button */}
      <div className="flex justify-between items-center p-6 md:p-12 border-b border-stone-200">
        <div className="flex flex-col">
            <h2 className="text-3xl md:text-5xl font-serif text-ink">{project.title}</h2>
            <span className="text-sm font-sans text-stone-500 uppercase tracking-widest mt-2">{project.client} — {project.year}</span>
        </div>
        <button 
          onClick={onClose}
          className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center hover:bg-ink hover:text-paper transition-colors duration-300"
        >
          <X size={24} />
        </button>
      </div>

      {/* Content Container */}
      <div className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-6 md:px-12 py-12">
            
            {/* Video Player Container */}
            <motion.div 
                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                className="aspect-video w-full bg-black mb-12 shadow-2xl relative"
            >
                {project.videoType === 'youtube' && (
                     <iframe
                     src={project.videoUrl}
                     className="absolute top-0 left-0 w-full h-full"
                     title={project.title}
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                   />
                )}
                {project.videoType === 'vimeo' && (
                    <iframe 
                        src={project.videoUrl} 
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowFullScreen
                    />
                )}
                {project.videoType === 'native' && (
                    <video 
                        src={project.videoUrl} 
                        controls 
                        className="w-full h-full object-cover"
                        autoPlay
                    />
                )}
            </motion.div>

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-24">
                <div className="md:col-span-8">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-6">Project Description</h3>
                    <p className="text-xl md:text-2xl font-serif leading-relaxed text-ink max-w-3xl">
                        {project.description}
                    </p>
                </div>
                <div className="md:col-span-4 space-y-8">
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">Category</h3>
                        <p className="text-lg font-serif text-ink">{project.category}</p>
                    </div>
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 border border-stone-300 rounded-full text-xs text-stone-600 uppercase tracking-wide">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </motion.div>
  );
};