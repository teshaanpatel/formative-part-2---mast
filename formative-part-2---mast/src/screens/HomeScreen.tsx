import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useMenu } from '../context/MenuContext';
import MenuItemCard from '../components/MenuItemCard';
import FilterButton from '../components/FilterButton';
import { COLORS } from '../utils/constants';

const HomeScreen: React.FC = () => {
  const { menuItems, getTotalItems, getAveragePrice } = useMenu();
  const navigation = useNavigation();

  <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddMenuItem' as never)}>
    <Text style={styles.addText}>Add New Item</Text>
  </TouchableOpacity>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Christoffel's Menu</Text>
      <Text style={styles.stats}>Total Items: {getTotalItems()}</Text>
      <Text style={styles.stats}>Average Price: R{getAveragePrice().toFixed(2)}</Text>
      <FilterButton />
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddMenuItem' as never)}>
        <Text style={styles.addText}>Add New Item</Text>
      </TouchableOpacity>
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
  stats: { fontSize: 16, color: COLORS.secondary, textAlign: 'center' },
  addButton: { backgroundColor: COLORS.primary, padding: 15, borderRadius: 5, margin: 10 },
  addText: { color: 'white', textAlign: 'center' },
});

export default HomeScreen;