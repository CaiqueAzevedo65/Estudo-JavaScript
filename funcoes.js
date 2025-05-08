//function exibir(num){
 //   console.log("A operação resultou em: "+ num);
    //template literal
  //  console.log(`A operação resultou em: ${num}`);
    // ${num} - interpolacao (mostrar o resultado variavel)
//}

//exibir(5)

//function soma(a,b){
  //  let op = a + b;
    //console.log(op)
//}
//soma('x','y')
//soma(2,4)
// function exibir(num){
//     console.log(`A operação resultou em: ${num}`);
// }
// function soma(a, b, callback){
//     let op = a + b;
//     callback(op);
// }

// soma (2,2, exibir)

function soma(a,b){
    return a+b
}

let resultado = soma(1,2)
console.log(resultado)

//arrow functions

multiplica = (a, b) => {
    return a+b;
}

let resposta = multiplica(2,3);
console.log(resposta)