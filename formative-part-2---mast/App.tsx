import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { MenuProvider } from './src/context/MenuContext';

export default function App() {
  return (
    <MenuProvider>
      <AppNavigator />
    </MenuProvider>
  );
}