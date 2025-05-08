// O rest, que do inglês significa resto, serve para pegar o resto das informações de um objeto, array ou como parâmetros de funções
// Para utilizar o rest, vamos usar os "..." 3 pontinhos...
// E um nome para definir onde vai ficar o resto que queremos pegar

const usuario = {
    id : 1,
    nome: 'Lucas',
    idade: 25,
    email: 'lucas@gmail.com',
    endereco: {
        cidade: 'São Paulo',
        estado: 'SP',
        pais: 'Brasil'
    }
}

const { id, nome, ...demaisInformações } = usuario
console.log(nome, idade)
console.log(demaisInformações);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const [x , y, z, ...resto] = numeros
console.log(x, y, z)
console.log(resto)