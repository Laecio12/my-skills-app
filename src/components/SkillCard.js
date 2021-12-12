import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export function SkillCard({skill}) {
  return (
    <TouchableOpacity style={styles.buttonSkill} activeOpacity={0.8}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    marginBottom: 10,
    alignItems: 'center',
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
