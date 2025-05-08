const produtos = [
    { nome: 'Camisa', preco: 50 },
    { nome: 'Calça', preco: 100 },
    { nome: 'Tênis', preco: 200 },
    { nome: 'Jaqueta', preco: 150 },
    { nome: 'Boné', preco: 30 }
];
const maisBaratos = produtos.filter(produto => produto.preco < 100);
console.log('Produtos com preço menor que R$100:');
console.log(maisBaratos);