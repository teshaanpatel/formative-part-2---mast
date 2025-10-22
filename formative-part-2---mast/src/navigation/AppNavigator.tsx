import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import CategoryScreen from '../screens/CategoryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddMenuItemScreen from '../screens/AddMenuItemScreen'; //got imports correct

// Define types for the tab navigator routes
type TabParamList = {
  Home: undefined;
  Menu: undefined;
  Category: undefined;
  Profile: undefined;
};

type RootStackParamList = {
  Tabs: undefined;
  AddMenuItem: undefined;
};

// Create navigators with types
const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Menu" component={MenuScreen} />
    <Tab.Screen name="Category" component={CategoryScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

const AppNavigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="AddMenuItem" component={AddMenuItemScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;