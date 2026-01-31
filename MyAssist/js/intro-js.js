//console do navegador
console.log("Olá, mundo JS!");
console.log("Olá, mundo JS 2.0!");


//variáveis (tipagem por atribuição automática)

let nomeUsuario = "Nícolas";
let idUsuario = 1234;
let logado = true;
const DATA_NASCIMENTO = "28/02/2008";

console.log(nomeUsuario, idUsuario, logado);

//verificar tipagem
console.log(nomeUsuario, typeof nomeUsuario);

/*evitar concaatenação e dar preferência à template String(iniciar e terminar com crase)
placeholder == ${variável, método, cálculo} */
console.log(`Nome do usuário: ${nomeUsuario}
10+10 = ${10+10}`);

//comparação
primeiroNum = 10;
segundoNum = `10`


//compara apenas valor
console.log(primeiroNum == segundoNum);

//compara o valor E a tipagem
console.log(primeiroNum === segundoNum);

//Arrays
// const pessoas = new Array();
const pessoas = ['Eu', 'Tu', 'Ele', 'Nós', 'Vós', 'Eles'];
console.log(pessoas);
console.log(pessoas[3]);
console.table(pessoas)
console.log(typeof (pessoas));

//inserir nova pessoa - indice 0
pessoas.unshift('Eu Mesmo');
console.table(pessoas);

//excluir o valor do índice 0 - CUIDADO QUE VC PERDE
pessoas.shift();
console.table(pessoas);

//inserir no último índice
pessoas.push('Eu Mesmo');
console.table(pessoas);

//excluir o valor do último índice - CUIDADO QUE VC PERDE
pessoas.pop();
console.table(pessoas);

//excluir em qq índice
pessoas.splice(2, 2);
console.table(pessoas);

//inserir em qq índice
pessoas.splice(2, 0, 'Ele', 'Nós', 'Eu mesmo', 1289, true, 99.44, 'oi');
console.table(pessoas);
