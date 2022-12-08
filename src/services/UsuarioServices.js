import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"

import { Alert } from 'react-native'

import Config, { getOng, navigate, deleteOng } from '../../util/Config'

class UsuarioService {

    async loginDoador(data) {
        return axios({
            url: Config.API_URL + "Doadores/loginDoador",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: {
                Accept: 'application/json'
            }
        }).then((response) => {
            AsyncStorage.setItem("TOKEN", response.data.token)
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async cadastroDoador(data) {
        return axios({
            url: Config.API_URL + "Doadores/cadastrarDoador",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: {
                Accept: 'application/json'
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }



    // Voluntarios

    async loginVolutario(data) {
        return axios({
            url: Config.API_URL + "Voluntarios/loginVoluntario",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: {
                Accept: 'application/json',
            }
        }).then((response) => {
            AsyncStorage.setItem("TOKEN", response.data.token)
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async cadastroVoluntario(data) {
        return axios({
            url: Config.API_URL + "Voluntarios/cadastrarVoluntario",
            method: "POST",
            timeout: 500,
            data: data,
            headers: {
                Accept: 'application/json'
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async ListarEventosVoluntarios(data) {
        let token = await AsyncStorage.getItem("TOKEN")
        return axios({
            url: Config.API_URL + "Voluntarios/voluntariosListar",
            method: "GET",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: {
                Authorization: 'Bearer ' + token,
                Accept: 'application/json'
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async CadastrarVoluntarioEventos(data) {
        let token = await AsyncStorage.getItem("TOKEN")
        return axios({
            url: Config.API_URL + "Voluntarios/cadastrarVoluntarioEvento/3",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: {
                Authorization: 'Bearer ' + token,
                Accept: 'application/json'
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async ExibirEventos(data) {
        return axios({
            url: Config.API_URL + "Eventos/listar",
            method: "GET",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: {
                Accept: 'application/json'
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async CadastrarEventos(data) {
        let token = await AsyncStorage.getItem("TOKEN")
        return axios({
            url: Config.API_URL + "Eventos/cadastrarEvento",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: {
                Authorization: 'Bearer ' + token,
                Accept: 'application/json'
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }





    // Ongs

    async loginOng(data) {
        return axios({
            url: Config.API_URL + "Ongs/loginOng",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: {
                Accept: 'application/json'
            }
        }).then((response) => {
            AsyncStorage.setItem("TOKEN", response.data.token)
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async cadastroOng(data) {
        return axios({
            url: Config.API_URL + "Ongs/cadastrarOng",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: {
                Accept: 'application/json'
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async ListarEventosOngs(data) {
        let token = await AsyncStorage.getItem("TOKEN")
        return axios({
            url: Config.API_URL + "Ongs/listar",
            method: "GET",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: {
                Authorization: 'Bearer ' + token,
                Accept: 'application/json'
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
}

const api = new UsuarioService()

export default api;