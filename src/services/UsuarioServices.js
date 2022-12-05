import axios from "axios"

// const app = axios.create({
//     baseURL: "http://192.168.1.14:4100/"
// });


class UsuarioService {

    async loginDoador(data) {
        return axios({
            url: "http://192.168.0.8:3000/Doadores/loginDoador",
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
            url: "http://192.168.0.8:3000/doadores/cadastrarDoador",
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
            url: "http://192.168.0.8:3000/Voluntarios/loginVoluntario",
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
            url: "http://192.168.0.8:3000/Voluntarios/cadastrarVoluntario",
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
            url: "http://192.168.0.8:3000/Voluntarios/voluntarioListarEventos/",
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
            url: "http://192.168.0.8:3000/Voluntarios/cadastrarVoluntarioEvento/:idEvento",
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
            url: "http://192.168.0.8:3000/Ongs/loginOng",
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
            url: "http://192.168.0.8:3000/Ongs/cadastrarOng",
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
            url: "http://192.168.0.8:3000/Ongs/ongListarEventos/:idOng",
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
            url: "http://192.168.0.8:3000/Eventos/cadastrarEvento",
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