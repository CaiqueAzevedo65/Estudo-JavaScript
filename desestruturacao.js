//a tecnica de desestruturacao consiste em extrair dados de arrays e objetos

const usuario= {
    id: 1,
    nome: "joao",
    idade: 21,
    email: "blablabla@gmail.com",
    graduacao: true,
    endereco:{
        cidade: "Juiz de Fora",
        uf: "MG"
    }
}

const nome = usuario.nome;
const email = usuario.email;
console.log(nome, email)
//desestruturacao

const {idade, graduacao, endereco: {cidade}} = usuario
console.log(idade, graduacao, cidade)