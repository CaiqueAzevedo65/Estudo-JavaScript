const pessoas =[
    {nomeCompleto: "João da Silva"},
    {nomeCompleto: "João Gomes"},
    {nomeCompleto: "João Oliveira"},
    {nomeCompleto: "João Matos"},
]

const primeirosNomes = pessoas.map( (pessoa) => pessoa.nomeCompleto.split(' ')[0] )
console.log(primeirosNomes)