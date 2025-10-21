import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Profile } from '../types/types';
import { COLORS } from '../utils/constants';

const ProfileScreen: React.FC = () => {
  const [profile, setProfile] = useState<Profile>({
    name: 'Christoffel',
    bio: 'Renowned private chef specializing in personalized culinary experiences.',
    contact: 'christoffel@chef.com',
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    if (!profile.name || !profile.bio || !profile.contact) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    setIsEditing(false);
    Alert.alert('Success', 'Profile updated!');
  };

  return (
    <Animatable.View animation="fadeIn" style={styles.container}>
      <Text style={styles.title}>Chef Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={profile.name}
        onChangeText={(text) => setProfile({ ...profile, name: text })}
        editable={isEditing}
      />
      <TextInput
        style={styles.input}
        placeholder="Bio"
        value={profile.bio}
        onChangeText={(text) => setProfile({ ...profile, bio: text })}
        multiline
        editable={isEditing}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact"
        value={profile.contact}
        onChangeText={(text) => setProfile({ ...profile, contact: text })}
        editable={isEditing}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => (isEditing ? handleSave() : setIsEditing(true))}
      >
        <Text style={styles.buttonText}>{isEditing ? 'Save' : 'Edit Profile'}</Text>
      </TouchableOpacity>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: COLORS.text, textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: COLORS.secondary, marginBottom: 15, padding: 10, borderRadius: 5 },
  button: { backgroundColor: COLORS.primary, padding: 15, borderRadius: 5, marginTop: 20 },
  buttonText: { color: 'white', textAlign: 'center' },
});

export default ProfileScreen;