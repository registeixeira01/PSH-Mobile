import axios from 'axios'
import Config from '../../util/config';

const api = axios.create({
    baseURL: Config.API_URL + "Eventos/"
});

export default api;