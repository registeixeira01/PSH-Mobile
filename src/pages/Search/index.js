import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

import api from '../../services/api';

export default function Search() {
  const [eventos, setEvent] = useState({});

  useEffect(() => {
    api.get('List').then(({ data }) => {
      setEvent(data)
    });
  }, [])

  return (
    <View>
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