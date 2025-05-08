const produtos = [
    {
        nome: 'notebook',
        preco: 2000
    },
    {
        nome: 'smartphone',
        preco: 1000
    },
    {
        nome: 'mouse',
        preco: 200
    }
]

console.log(produtos)

// const precoEmReal = produtos.map(p => p.preco * 5.68)
// console.log(precoEmReal);

const precoEmReal = produtos.map(p => {
    const precoConvertido = p.preco * 5.68
    console.table(`Produto: ${p.nome}, 
        Preço em Real ${p.preco},
        Preço em Dólar: ${precoConvertido.toFixed(2)}`)
})