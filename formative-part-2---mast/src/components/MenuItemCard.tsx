  import React from 'react';
  import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
  import * as Animatable from 'react-native-animatable';
  import { MenuItem } from '../types/types';
  import { COLORS } from '../utils/constants';  // Import PLACEHOLDER_IMAGE, not 'food'
  import { useMenu } from '../context/MenuContext';

  interface MenuItemCardProps {
    item: MenuItem;
  }

  const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
    const { removeItem } = useMenu();

    return (
      <Animatable.View animation="fadeIn" style={styles.card}>
        <View style={styles.details}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.course}>Course: {item.course}</Text>
          <Text style={styles.price}>Price: R{item.price.toFixed(2)}</Text>
          <TouchableOpacity style={styles.removeButton} onPress={() => removeItem(item.id)}>
            <Text style={styles.removeText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    );
  };
//fixed code to work - style sheet was broken
  const styles = StyleSheet.create({
    card: { flexDirection: 'row', margin: 10, backgroundColor: COLORS.background, borderRadius: 10, padding: 10 },
    image: { width: 80, height: 80, borderRadius: 10 },
    details: { flex: 1, marginLeft: 10 },
    name: { fontSize: 18, fontWeight: 'bold', color: COLORS.text },
    description: { fontSize: 14, color: COLORS.text },
    course: { fontSize: 14, color: COLORS.secondary },
    price: { fontSize: 16, color: COLORS.primary },
    removeButton: { marginTop: 10, backgroundColor: COLORS.secondary, padding: 5, borderRadius: 5 },
    removeText: { color: 'white' },
  });

  export default MenuItemCard;
  