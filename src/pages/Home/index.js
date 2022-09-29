import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import api from '/Users/REC4/Regis/PSH-Mobile/src/services/api';

export default function Home() {

  const [eventos, setEvent] = useState([]);

  useEffect(() => {
    api.get('List').then(({ data }) => {
      setEvent(data)
    });
  }, [])

  return (
    <View style={styles.container}>

      {eventos.map(item => {
        <Text style={styles.text}>{item.Descricao}</Text>
      })}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },

  text: {
    fontSize: 25,
  }
})