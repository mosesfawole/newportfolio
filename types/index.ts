export interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
  type: string;
  stack: string[];
  image?: {
    src: string;
    alt: string;
  };
  live?: string;
  github?: string;
  featured: boolean;
}
