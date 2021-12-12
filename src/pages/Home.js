import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, FlatList} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';
export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [greeting, setGreeting] = useState('');

  function handleAddSkill() {
    setMySkills([...mySkills, newSkill]);
    setNewSkill('');
  }

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour > 4 && hour < 12) {
      setGreeting('Good Morning');
    } else if (hour >= 12 && hour <= 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good night');
    }
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Laecio</Text>
      <Text style={styles.greeting}>{greeting}</Text>
      <TextInput
        style={styles.input}
        placeholder="type a skill"
        placeholderTextColor={'#555'}
        value={newSkill}
        onChangeText={setNewSkill}
      />
      <Button onPress={handleAddSkill} />
      <Text style={[styles.title, {marginVertical: 50}]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({item}) => <SkillCard skill={item} />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  greeting: {
    color: '#fff',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: 10,
    marginTop: 30,
    borderRadius: 5,
  },
});
