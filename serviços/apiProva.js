const { default: axios } = require("axios");


const apiProva = axios.create({
    baseURL: 'https://my-json-server.typicode.com/orionteles/chavo',
    params: {
        language: 'pt-BR'
    },
    headers: {
        Authorization: ""
    }
})

export default apiProva 