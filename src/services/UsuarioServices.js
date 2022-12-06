import axios from "axios"

// const app = axios.create({
//     baseURL: "http://192.168.1.3:3000/"
// });


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

    async ListarEventos(data) {
        return axios({
            url: "http://192.168.1.3:3000/ongs/listar",
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






    // Criar Evento

    async CriarEventos(data) {
        return axios({
            url: "http://192.168.1.3:3000/Eventos/cadastrarEvento",
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



}





const app = new UsuarioService()

export default app;