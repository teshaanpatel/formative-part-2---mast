import React, { createContext, useContext, useState, ReactNode } from 'react';
import { MenuItem } from '../types/types';

interface MenuContextType {
  menuItems: MenuItem[];
  addItem: (item: Omit<MenuItem, 'id'>) => void;
  removeItem: (id: string) => void;
  getFilteredItems: (course: string) => MenuItem[];
  getTotalItems: () => number;
  getAveragePrice: () => number;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const addItem = (item: Omit<MenuItem, 'id'>) => {
    const newItem: MenuItem = { ...item, id: Date.now().toString() };
    setMenuItems([...menuItems, newItem]);
  };

  const removeItem = (id: string) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  const getFilteredItems = (course: string) => {
    return menuItems.filter(item => item.course === course);
  };

  const getTotalItems = () => menuItems.length;

  const getAveragePrice = () => {
    if (menuItems.length === 0) return 0;
    const total = menuItems.reduce((sum, item) => sum + item.price, 0);
    return total / menuItems.length;
  };

  return (
    <MenuContext.Provider value={{ menuItems, addItem, removeItem, getFilteredItems, getTotalItems, getAveragePrice }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) throw new Error('useMenu must be used within MenuProvider');
  return context;
};