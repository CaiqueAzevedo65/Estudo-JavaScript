let lista = ['Laranja', 'Maçã','Banana','Uva','Pera','Abacaxi','Melancia']

let listUl = document.createElement('ul');

let body = document.getElementsByTagName('body');
console.log(body);

// adicionando um elemento filho no body
body[0].appendChild(listUl);

// capturando o elemento ul dentro do body
let listaNoBody = document.getElementsByTagName('ul')
console.log(listaNoBody[0])

for(let i = 0; i < lista.length; i++){
    console.log(lista[i]);
    // criando o elemnto li, chamado liFor
    let liFor = document.createElement('li');

    // criar o texto do li com um nó do texto, chamado textoLi
    let textoLi = document.createTextNode(lista[i]);

    // agora criar cada li com o appendChild e colocando o texto dentro
    liFor.appendChild(textoLi);

    listaNoBody[0].appendChild(liFor);
}

let elementoClasse = document.querySelector('.destaque')
let elementoId = document.querySelector('#unico')