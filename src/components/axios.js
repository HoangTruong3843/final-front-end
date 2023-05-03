import axios from 'axios'

const instance = axios.create({
 baseURL: "https://finalproject-w174.onrender.com"
})

export default instance