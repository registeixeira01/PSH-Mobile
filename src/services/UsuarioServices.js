import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"

import { Alert } from 'react-native'

import { getOng, navigate, deleteOng } from '../../util/config'

// const api = axios.create({
//     baseURL: "http://192.168.1.3:3000/",
//     headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json'
//     }
// });


// api.interceptors.response.use(
//     response => {

//         // Do something with response data

//         return response
//     },
//     error => {

//         // Do something with response error

//         // You can even test for a response code
//         // and try a new request before rejecting the promise

//         if (
//             error.request._hasError === true &&
//             error.request._response.includes('connect')
//         ) {
//             Alert.alert(
//                 'Aviso',
//                 'Não foi possível conectar aos nossos servidores, sem conexão a internet',
//                 [{ text: 'OK' }],
//                 { cancelable: false },
//             )
//         }

//         return Promise.reject(error)
//     },
// )

// api.interceptors.request.use(
//     config => {
//         return getOng()
//             .then(data => {
//                 data = JSON.parse(data)
//                 if (data && data.token)
//                     config.headers.Authorization = `Bearer ${data.token}`
//                 return Promise.resolve(config)
//             })
//             .catch(error => {
//                 console.log(error)
//                 return Promise.resolve(config)
//             })
//     },
//     error => {
//         return Promise.reject(error)
//     },
// )


// export default api;
class UsuarioService {

    async loginDoador(data) {
        return axios({
            url: "http://192.168.1.3:3000/Doadores/loginDoador",
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

    async cadastroDoador(data) {
        return axios({
            url: "http://192.168.1.3:3000/doadores/cadastrarDoador",
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



    // Voluntarios

    async loginVolutario(data) {
        return axios({
            url: "http://192.168.1.3:3000/voluntarios/loginVoluntario",
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

    async cadastroVoluntario(data) {
        return axios({
            url: "http://192.168.1.3:3000/voluntarios/cadastrarVoluntario",
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

    async ExibirEventos(data) {
        return axios({
            url: "http://192.168.1.3:3000/eventos/listar",
            method: "GET",
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

    async CadastrarEventos(data) {
        return axios({
            url: "http://192.168.1.3:3000/eventos/cadastrarEvento",
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





    // Ongs

    async loginOng(data) {
        return axios({
            url: "http://192.168.1.3:3000/Ongs/loginOng",
            method: "POST",
            timeout: 5000,
            data: data,
            headers: {
                Accept: 'application/json'
            }
        }).then((response) => {
            console.log(response.data.token)
            AsyncStorage.setItem("TOKEN", response.data.token)
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async cadastroOng(data) {
        return axios({
            url: "http://192.168.1.3:3000/Ongs/cadastrarOng",
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

    async ListarEventosOngs(data) {
        let token = await AsyncStorage.getItem("TOKEN")
        return axios({
            url: "http://192.168.1.3:3000/ongs/listar",
            method: "GET",
            timeout: 5000,
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






    // Criar Evento

    async CriarEventos(data) {
        return axios({
            url: "http://192.168.1.3:3000/Eventos/cadastrarEvento",
            method: "POST",
            timeout: 500,
            data: data,
            headers: {
                'Content-Type': 'application/json',
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