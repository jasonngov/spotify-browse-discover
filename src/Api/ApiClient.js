import axios from 'axios'

export default class ApiClient {
    static get = (url, config) => axios.get(url, config)
        .then((response) => response.data)
        .catch((e) => e.data);
    
    static put = (url, data) => axios.put(url, data)
        .then((response) => response.data)
        .catch((e) => e.data);

    static delete = (url) => axios.delete(url)
        .then((response) => response.data)
        .catch((e) => e.data);
}
