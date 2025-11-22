export type VideoSource = 'youtube' | 'vimeo' | 'native';

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  client: string;
  description: string;
  videoUrl: string; 
  videoType: VideoSource; // New field to determine player type
  thumbnail: string;
  tags: string[];
}

export interface BriefRequest {
  concept: string;
  tone: string;
  duration: string;
}