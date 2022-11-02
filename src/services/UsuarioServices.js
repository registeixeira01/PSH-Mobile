import axios from "axios"

// const app = axios.create({
//     baseURL: "http://192.168.1.14:4100/"
// });


class UsuarioService{
    async login(data){
        return axios({
            url: "http://192.168.1.14:4100/login",
            method: "POST",
            timeout:500,
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

    async cadastrar(data){
        return axios({
            url: "http://192.168.1.14:4100/cadastrar",
            method: "POST",
            timeout:500,
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