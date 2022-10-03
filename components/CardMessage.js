import React from "react";
import { StyleSheet, Text, View } from "react-native-web";

export default function CardMessage(props) {

    const {descricao} = props;


    return (
        <View style={styles.cardMessage}>
                <Text style={styles.titleMessage}>{descricao}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    cardMessage:
    {
        borderRadius: 10,
        borderWidth: 1,
        padding: 4,
        margin: 2,
        borderColor: 'gray',
        width: 320,
        height: 80,
        display: "flex",
        justifyContent: "center",
        backgroundColor: 'gray'
    },
    titleMessage:
    {
        fontSize: 16,
        textAlign:'center'
    },
    message:
    {
        fontSize: 12,
        fontWeight:'normal',
        textAlign:'center'
    }
});