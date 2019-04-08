const servico = require('./servico');

async function main() {
    try {
        const resultados = await servico.obterPessoas('a');

        const names = [];
        /** 1 - For*/
        console.time('for');
        for (let i = 0; i <= resultados.results.length - 1; i++) {
            const pessoa = resultados.results[i];
            names.push(pessoa.name);
        }
        console.timeEnd('for');
        /** 2 - Forin*/
        console.time('forin');
        for (let i in resultados.results) {
            const pessoa = resultados.results[i];
            names.push(pessoa.name);
        }
        console.timeEnd('forin');
        /** 3 - Forof*/
        console.time('forof');
        for (pessoa of resultados.results) {
            names.push(pessoa.name);
        }
        console.timeEnd('forof');

        //imprimir resutados
        console.log('nomes', names);
    } catch (error) {
        console.error('houve erro', error);
    }
}

main();