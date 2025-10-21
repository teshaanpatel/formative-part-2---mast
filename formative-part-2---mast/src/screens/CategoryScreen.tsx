import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useMenu } from '../context/MenuContext';
import MenuItemCard from '../components/MenuItemCard';
import { COLORS, COURSES } from '../utils/constants';

const CategoryScreen: React.FC = () => {
  const { getFilteredItems } = useMenu();
  const [selectedCourse, setSelectedCourse] = useState(COURSES[0]);
  const filteredItems = getFilteredItems(selectedCourse);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter by Course</Text>
      <Picker selectedValue={selectedCourse} onValueChange={setSelectedCourse} style={styles.picker}>
        {COURSES.map(c => <Picker.Item key={c} label={c} value={c} />)}
      </Picker>
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MenuItemCard item={item} />}
        ListEmptyComponent={<Text style={styles.empty}>No items in this course.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: 10 },
  title: { fontSize: 24, fontWeight: 'bold', color: COLORS.text, textAlign: 'center' },
  picker: { marginBottom: 10 },
  empty: { textAlign: 'center', color: COLORS.secondary },
});

export default CategoryScreen;