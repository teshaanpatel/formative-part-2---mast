export interface MenuItem {
  id: string;
  name: string;
  description: string;
  course: string;
  price: number;
}

export type Course = 'Breakfast' | 'Lunch' | 'Supper' | 'Dessert';

export interface Profile {
  name: string;
  bio: string;
  contact: string;
}