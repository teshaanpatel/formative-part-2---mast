import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../utils/constants';

const FilterButton: React.FC = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Category' as never)}>
      <Text style={styles.text}>Filter by Course</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: { backgroundColor: COLORS.secondary, padding: 10, borderRadius: 5, margin: 10 },
  text: { color: 'white' },
});

export default FilterButton;