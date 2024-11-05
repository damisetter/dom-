/*
ATIVIDADE 1

let primeiroquadrado = document.getElementById("quadradoUm") (conectamos o html com o JS, chamando o primeiro quadrado por seu id, e dando uma variável a ele, para facilitar na hora de modifica-ló)


primeiroquadrado.addEventListener("click", function() { (aqui adicionamos um evento, que ao clicar no quadrado, ele muda de cor)
    
    if (primeiroquadrado.style.backgroundColor == "blue") { (o if vai servir para testar se a cor é azul, e se for, ao clicar, ele vai voltar a ser da cor original)
        primeiroquadrado.style.backgroundColor = "aquamarine"
    }else{
        primeiroquadrado.style.backgroundColor = "blue" (o else serve para ele mudar de cor, se ele estiver na cor inicial, ao clicar ele troca para azul)
    }
    
    
  });
(no quadrado dois e três, as mesmas coisas acontecem, pois é o mesmo código)
  let segundoquadrado = document.getElementById("quadradoDois")


segundoquadrado.addEventListener("click", function() {
    
    if (segundoquadrado.style.backgroundColor == "blue") {
        segundoquadrado.style.backgroundColor = "aquamarine"
    }else{
        segundoquadrado.style.backgroundColor = "blue"
    }
    
    
  });

  let terceiroquadrado = document.getElementById("quadradoTres")


  terceiroquadrado.addEventListener("click", function() {
      
      if (terceiroquadrado.style.backgroundColor == "blue") {
          terceiroquadrado.style.backgroundColor = "aquamarine"
      }else{
          terceiroquadrado.style.backgroundColor = "blue"
      }
      
      
    });*/
/*
ATIVIDADE 2

    let contador = 0; (começamos definindo o contador como 0)


    let contadorhtml = document.getElementById("contador");  (aqui estamos vinculando todos os elementos do html no JS)
    let contar = document.getElementById("contar");
    let resetar = document.getElementById("resetar");

  
    contar.addEventListener("click", function() { (função para aumentar o valor do contador, para contar os cliques)
        contador++; (aumentamos o valor do contador em uma unidade)
        contadorhtml.innerText = contador;(atualiza o texto do contador)
    });

 
    resetar.addEventListener("click", function() { (função para resetar o contador)
        contador = 0; (o contador volta a ser 0)
        contadorhtml.innerText = contador; (atualiza o texto do contador)
    });

*/
/*
ATIVIDADE 3

let fraseVisivel = false; (começa com a frase visível)

let mostrarocultar = document.getElementById('mostrarOcultar');(aqui vinvulamos o html com o js)
let frase = document.getElementById('frase');

(função para ocultar ou deixar visivel)
mostrarocultar.addEventListener('click', function() {
    fraseVisivel = !fraseVisivel; 

    (muda a frase para visível ou oculta) 
    if (fraseVisivel) {
        frase.style.display = 'block'; (mostra a frase)
        mostrarocultar.innerText = 'Ocultar Frase'; (muda o texto do botão)
    } else {
        frase.style.display = 'none'; (oculta a frase)
        mostrarocultar.innerText = 'Mostrar Frase'; (muda o texto do botão)
    }
});
*/
