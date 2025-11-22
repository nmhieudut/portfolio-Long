export interface Photo {
  id: string;
  url: string;
  category: Category;
  title: string;
  heightClass?: string; // For masonry layout simulation
}

export enum Category {
  ALL = 'Tất cả',
  NIGHTLIFE = 'NightLife (Bar/Pub)',
  PROFILE = 'Profile Cá Nhân',
  AO_DAI_CONCEPT = 'Áo Dài & Concept',
  EVENT = 'Tiệc & Sinh Nhật'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface ServiceItem {
  title: string;
  price: string;
  description: string;
  features: string[];
}