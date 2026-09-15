export type Language = 'uz' | 'en';

export interface Project {
  id: string;
  title: string;
  shortDescUz: string;
  shortDescEn: string;
  fullDescUz: string;
  fullDescEn: string;
  category: 'enterprise' | 'games3d' | 'frontend' | 'backend' | 'all';
  tags: string[];
  status: 'production' | 'active' | 'completed';
  badge?: string;
  stats?: { labelUz: string; labelEn: string; value: string }[];
  featuresUz: string[];
  featuresEn: string[];
  techStack: string[];
  architecture?: string;
  localPath?: string;
  liveDemo?: string;
  githubUrl?: string;
  iconName: string;
  accentColor: string;
}

export interface BackendStage {
  stageNumber: number;
  port: number;
  titleUz: string;
  titleEn: string;
  subtitleUz: string;
  subtitleEn: string;
  tech: string;
  featuresUz: string[];
  featuresEn: string[];
  authTypeUz: string;
  authTypeEn: string;
  securityUz: string;
  securityEn: string;
  folder: string;
  status: string;
}

export interface SkillItem {
  name: string;
  level: number; // 1 - 100
  category: 'frontend' | 'backend' | 'gamedev3d' | 'tools' | 'languages';
  badge?: string;
}

export interface TimelineEvent {
  year: string;
  titleUz: string;
  titleEn: string;
  orgUz: string;
  orgEn: string;
  descUz: string;
  descEn: string;
  icon: string;
  score?: string;
}
