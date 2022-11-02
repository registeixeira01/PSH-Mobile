import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Alert, TextInput, Button, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import SelectList from 'react-native-dropdown-select-list'
import { useNavigation } from '@react-navigation/native'

import api from '../../services/api';

export default function VoluntarioEvento() {

    const navigation = useNavigation();
    const [selected, setSelected] = useState("");
    const [data, setData] = useState([]);

    const showAlert = () =>
        Alert.alert(
            "Ótima escolha!",
            "\nObrigado por ser um voluntário, você faz parte da mudança! ",
            [
                {
                    text: "OK",
                    onPress: () => navigation.navigate('Usuario'),
                },
            ],
        );

    useEffect(() => {
        //Get Values from database
        api.get('List')
            .then((response) => {
                // Store Values in Temporary Array
                let newArray = response.data.map((item) => {
                    return { key: item.Codigo, value: item.NomeEvento }
                })
                //Set Data Variable
                setData(newArray)
            })
            .catch((e) => {
                console.log(e)
            })
    }
        , [])

    return (


        <View style={styles.container}>
            <SelectList
                setSelected={setSelected}
                data={data}
                // boxStyles={{ width:320, alignItems: 'center',
                // justifyContent: 'center', marginBottom: 550, padding: 4, }}
                inputStyles={{ fontSize: 17 }}
                dropdownStyles={{ backgroundColor: '#1E90FF' }}
                dropdownItemStyles={{ marginHorizontal: 10 }}
                dropdownTextStyles={{ color: '#fff', fontSize: 17 }}
                placeholder="Selecione um evento"
                maxHeight={150}
            />
            <TextInput style={styles.inputEvento}
                placeholder="Data do evento"
            />

            <Button style={styles.btnSalvar} onPress={() => showAlert()} title={"Salvar"} />
        </View>

    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 50,
        backgroundColor: '#fff',

    },

    btnSalvar: {
        flex: 1,
    },
    inputEvento:
    {
        borderRadius: 1,
        width: 350,
        border: 'solid 1px gray',
        marginTop: 20,
        outline: 'solid 1px silver',
        padding: 4,
        fontSize: 20,
        marginBottom: 10,
    },
});