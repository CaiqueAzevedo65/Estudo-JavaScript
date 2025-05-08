var obj = {
    nome: "Firmino",
    idade:22,
    profissao: "QA Engineer",
    estaTrabalhando: true,
    graduacao: true,
    logradouro:{
        endereco: 'Rua das Flores',
        cep: "13040-982",
        cidade: "Campinas"
}
}

console.log(obj);
console.log(typeof obj);
console.log(obj.nome);
console.log(obj.idade);

//template literal

console.log("O seu nome é" + obj.nome + " e você tem " + obj.idade + " anos.");

//${obj.nome} ${obj.idade} interpolação
console.log(`O seu nome é ${obj.nome} e você tem ${obj.idade} anos
    e a informação de endereço é ${obj.logradouro.endereco} ${obj.logradouro.cep} ${obj.logradouro.cidade}`);

obj.nome = "João";
console.log(obj.nome);

obj.graduacao= false;

