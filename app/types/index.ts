export interface Artist {
  id: string;
  name: string;
  realName?: string;
  bio: string;
  instagram: string;
  category: 'headliner' | 'support';
  photo: string;
}

export interface Event {
  date: string;
  time: string;
  location: string;
  daysLeft: number;
}

export interface Story {
  id: number;
  title: string;
  content: string;
  urgent?: boolean;
  note?: string;
}