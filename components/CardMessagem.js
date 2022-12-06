import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View, Image, Alert, Button } from "react-native";





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
    font-size: 12px;
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 3px;
    justify-content: space-between;
    font-weight: lighter;
`;

export default (props) => {
    const { idOng, ongResponsavel, nomeEvento, dataEvento, horarioEvento, cepEvento, enderecoEvento, numeroEvento, bairroEvento, cidadeEvento, ufEvento, qtdVoluntarios, duracaoEvento, pontuacao } = props;
    const navigation = useNavigation();

    const showAlert = () =>
        Alert.alert(
            "Atenção",
            "Você confirma sua inscrição neste evento?",
            [
                {
                    text: "Cancelar",
                    onPress: () => Alert.alert("Inscrição cancelada", "Sua inscrição foi cancelada"),
                    style: "cancel",
                  },
                  {
                    text: "Confirmar",
                    onPress: () => Alert.alert("Ótima escolha!" , "Obrigado por ser um voluntário, você faz parte da mudança!"),
                    style: "cancel",
                  }
                ],
        );
    // let data = new Date();
    // let dataFormatada = (data.getDate() + "/" + ((data.getMonth() + 1)) + "/" + (data.getFullYear()));
    // console.log(dataFormatada);

    return (
        <Area>
            <InfoArea>
                <TitleMessage > {nomeEvento} </TitleMessage>
                <TextArea>
                    <ImageEvent
                    source={require('../src/assets/evento.png')}
                    />
                    <Infos >Endereço do evento: {enderecoEvento} nº {numeroEvento}, {bairroEvento}, {cidadeEvento} - {ufEvento} {'\n'}
                    Duração do evento: {duracaoEvento} horas {'\n'}
                    Pontuação: {pontuacao} pontos por hora {'\n'}
                    Data do Evento: {dataEvento} </Infos>
                </TextArea>
                <CadButton onPress={() => showAlert()}>
                    <CadButtonText> Cadastrar </CadButtonText>
                </CadButton>
            </InfoArea>
        </Area>
    );
}
