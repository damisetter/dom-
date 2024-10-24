let titulo = document.getElementById('titulo');

let nome = prompt('qual seu nome?')
let cor = prompt('qual sua cor favorita? digite em inglês:')

titulo.innerText = `Bem vindo(a) ${nome}`;

titulo.style.color = cor;

