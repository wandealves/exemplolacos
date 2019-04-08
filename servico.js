const axios = require('axios');

const urlBase = 'https://swapi.co/';

async function obterPessoas(nome) {
    const url = `${urlBase}/api/people/?search=${nome}&format=json`;
    const resposta = await axios.get(url);
    return resposta.data;
}

module.exports = {
    obterPessoas
}