import axios from "axios";

const $host = axios.create({    // запросы, не требующие авторизации
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({ // запросы, требующие авторизации
    baseURL: process.env.REACT_APP_API_URL
})
export {
    $host,
    $authHost
}