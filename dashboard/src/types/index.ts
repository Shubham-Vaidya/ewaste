export type ResourceType =
  | 'pdf'
  | 'xlsx'
  | 'pptx'
  | 'docx'
  | 'csv'
  | 'image'
  | 'video'
  | 'txt'
  | 'other';

export interface Resource {
  id: string;
  title: string;
  originalFilename: string;
  type: ResourceType;
  description?: string;
  filePath: string;
  downloadUrl: string;
  projectId?: string;
  experimentId?: string;
  tags: string[];
  fileSize?: string; // e.g. "82 KB"
}

export interface Project {
  id: string;
  title: string;
  description: string;
  liveUrl: string;
  githubUrl?: string;
  thumbnail?: string;
  technologies: string[];
  category: string;
  relatedExperimentIds: string[];
  resourceIds: string[];
  status: 'live' | 'unavailable' | 'unverified';
}

export interface Experiment {
  id: string;
  number: number;
  title: string;
  objective: string;
  description: string;
  methodology?: string;
  results?: string;
  conclusion?: string;
  relatedProjectIds: string[];
  resourceIds: string[];
}

export interface StudentInfo {
  name: string;
  rollNumber: string;
  division: string;
  subject: string;
  department: string;
  institute: string;
}
