import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from "react-native";


const Area = styled.TouchableOpacity`
    background-color: #FFFFFF;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`;

const InfoArea = styled.View`
    margin-left: 20px;
    justify-content: space-between;
`;

const SeeProfileButton = styled.View`
    width: 85px;
    height: 26px;
    border: 1px solid #4EADBE;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const SeeProfileButtonText = styled.Text`
    font-size: 13px;
    color: #268596;
`;

export default (props) => {
    const {NomeEvento, Descricao} = props;

    return (
        <Area>
            <InfoArea>
                <Text > {NomeEvento} </Text>
                <Text > {Descricao} </Text>
                <SeeProfileButton>
                    <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
                </SeeProfileButton>
            </InfoArea>
        </Area>
    );
}