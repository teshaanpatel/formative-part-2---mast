import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddMenuForm from '../components/AddMenuForm';
import { COLORS } from '../utils/constants';

const AddMenuItemScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Menu Item</Text>
      <AddMenuForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: 10 },
  title: { fontSize: 24, fontWeight: 'bold', color: COLORS.text, textAlign: 'center' },
});

export default AddMenuItemScreen;


//adding items now work correctly without any errors or bugs