import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { useMenu } from '../context/MenuContext';
import { COLORS, COURSES } from '../utils/constants';

const AddMenuForm: React.FC = () => {
  const { addItem } = useMenu();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState(COURSES[0]);
  const [price, setPrice] = useState('');

  const handleAdd = () => {
    if (!name || !description || !price) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    const priceNum = parseFloat(price);
    if (isNaN(priceNum) || priceNum <= 0) {
      Alert.alert('Error', 'Enter a valid price');
      return;
    }
    addItem({ name, description, course, price: priceNum });
    setName('');
    setDescription('');
    setPrice('');
    Alert.alert('Success', 'Item added!');
  };

  <Picker selectedValue={course} onValueChange={setCourse} style={styles.picker}>
  {COURSES.map(c => <Picker.Item key={c} label={c} value={c} />)}
</Picker>

  return (
    <View style={styles.form}>
      <TextInput style={styles.input} placeholder="Dish Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Description" value={description} onChangeText={setDescription} multiline />
      <Picker selectedValue={course} onValueChange={setCourse} style={styles.picker}>
        {COURSES.map(c => <Picker.Item key={c} label={c} value={c} />)}
      </Picker>
      <TextInput style={styles.input} placeholder="Price" value={price} onChangeText={setPrice} keyboardType="numeric" />
      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  form: { padding: 20 },
  input: { borderWidth: 1, borderColor: COLORS.secondary, marginBottom: 10, padding: 10, borderRadius: 5 },
  picker: { marginBottom: 10 },
  button: { backgroundColor: COLORS.primary, padding: 15, borderRadius: 5, marginTop: 20 },
  buttonText: { color: 'white', textAlign: 'center' },
});

export default AddMenuForm;