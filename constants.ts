import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'Ethereal Silence',
    category: 'Fashion Film',
    year: '2024',
    client: 'Vogue Italia',
    description: 'A study of movement and stillness in high fashion. Exploring the texture of fabric through slow-motion capture and rhythmic cutting.',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_HERE?autoplay=1', // Example format
    videoType: 'youtube',
    thumbnail: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2670&auto=format&fit=crop',
    tags: ['Editorial', 'Slow Motion', 'Color Grading']
  },
  {
    id: '02',
    title: 'Urban Pulse',
    category: 'Brand Documentary',
    year: '2023',
    client: 'Nike',
    description: 'Capturing the raw energy of street basketball in New York City. Fast-paced editing synchronized with ambient city sounds.',
    videoUrl: 'https://player.vimeo.com/video/824804225?h=02238d767e&autoplay=1', // Example Vimeo ID
    videoType: 'vimeo',
    thumbnail: 'https://images.unsplash.com/photo-1519861531473-920026393112?q=80&w=2576&auto=format&fit=crop',
    tags: ['Documentary', 'Sound Design', 'Dynamic']
  },
  {
    id: '03',
    title: 'The Artisan',
    category: 'Short Film',
    year: '2023',
    client: 'Independent',
    description: 'A quiet look at the life of a japanese ceramicist. Minimalist cuts allowing the story to breathe.',
    videoUrl: 'https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1',
    videoType: 'youtube',
    thumbnail: 'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?q=80&w=2538&auto=format&fit=crop',
    tags: ['Narrative', 'Minimalist', 'Interview']
  },
  {
    id: '04',
    title: 'Neon Horizons',
    category: 'Music Video',
    year: '2024',
    client: 'Sony Music',
    description: 'Synthwave aesthetic meets modern choreography. Heavy use of match cuts and lighting transitions.',
    videoUrl: 'https://player.vimeo.com/video/353749983?h=42c1725858&autoplay=1',
    videoType: 'vimeo',
    thumbnail: 'https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=2574&auto=format&fit=crop',
    tags: ['Music', 'VFX', 'Performance']
  },
  {
    id: '05',
    title: 'Culinary Canvas',
    category: 'Commercial',
    year: '2022',
    client: 'Michelin Guide',
    description: 'Food cinematography that focuses on texture and heat. Macro shots combined with elegant typography.',
    videoUrl: 'https://www.youtube.com/embed/GuK1clWpJQo?autoplay=1',
    videoType: 'youtube',
    thumbnail: 'https://img.youtube.com/vi/GuK1clWpJQo/maxresdefault.jpg',
    tags: ['Commercial', 'Macro', 'Food']
  }
];
