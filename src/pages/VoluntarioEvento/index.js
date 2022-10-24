import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import SelectList from 'react-native-dropdown-select-list'

import api from '../../services/api';

export default function VoluntarioEvento() {

    const [selected, setSelected] = useState("");
    const [data,setData] = useState([]);

    useEffect(() => {
    //Get Values from database
    api.get('List')
      .then((response) => {
        // Store Values in Temporary Array
        let newArray = response.data.map((item) => {
          return {key: item.Codigo, value: item.NomeEvento}
        })
        //Set Data Variable
        setData(newArray)
      })
      .catch((e) => {
        console.log(e)
      })}
  ,[])

    return (


        <View style={styles.container}>
            <SelectList style={styles.SelectList} setSelected={setSelected} data={data} onSelect={() => alert(selected)} />

        </View>

    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    SelectList: {
        width: 100,
        height:30
    }
});