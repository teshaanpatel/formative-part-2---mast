import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useMenu } from '../context/MenuContext';
import MenuItemCard from '../components/MenuItemCard';
import { COLORS } from '../utils/constants';

const MenuScreen: React.FC = () => {
  const { menuItems } = useMenu();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Full Menu</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MenuItemCard item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: 10 },
  title: { fontSize: 24, fontWeight: 'bold', color: COLORS.text, textAlign: 'center' },
});

export default MenuScreen;