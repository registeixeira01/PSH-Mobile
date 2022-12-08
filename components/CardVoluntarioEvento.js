import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View, Image, Alert, Button } from "react-native";
import { useState } from 'react';

const Area = styled.TouchableOpacity`
    background-color: #1E90FF;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`;

const InfoArea = styled.View`
    justify-content: space-between;
`;

const TextArea = styled.View`
    justify-content: space-between;
    margin-bottom: 10px;
    background-color: #FFFF;
`;

const CadButton = styled.TouchableOpacity`
    width: 150px;
    height: 40px;
    background-color: #00FF7F;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`;

const CadButtonText = styled.Text`
    font-size: 20px;
    color: #ffff;
    font-weight: bold;
`;

const TitleMessage = styled.Text`
    font-size: 30px;
    margin-bottom: 10px;
    justify-content: space-between;
    font-weight: bold;
    color: #ffff;
`;

const Description = styled.Text`
    font-size: 17px;
    margin-bottom: 5px;
    justify-content: space-between;
    font-weight: lighter;
`;

const ImageEvent = styled.Image`
    width: 320px;
    height: 200px;
`;

const Infos = styled.Text`
    font-size: 15px;
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 3px;
    justify-content: space-between;
    font-weight: lighter;
`;

export default (props) => {
    const { idEvento, nomeEvento, dataEvento} = props;
    const [evento, setEvento] = useState ("");

    return (
        <Area>
            <InfoArea>
                <TitleMessage >{nomeEvento} {'\n'}Cod. Evento: {idEvento} </TitleMessage>
                <TextArea>
                    <ImageEvent
                    source={require('../src/assets/evento.png')}
                    />
                    <Infos >Data do Evento: {dataEvento} </Infos>
                </TextArea>
            </InfoArea>
        </Area>
    );
}
