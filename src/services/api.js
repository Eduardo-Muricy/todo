import axios from 'axios'


const api = axios.create({
    baseURL: "https://todo-api-iqtm.onrender.com"
}) 

export default api