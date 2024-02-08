
// Perguntas que foram geradas pelo CHAT GPT
const perguntas = [
  {
    pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
    respostas: [
      "var myVar;",
      "let myVar;",
      "myVar = 10;",
    ],
    correta: 1
  },
  {
    pergunta: "Qual destes métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
    respostas: [
      "append()",
      "push()",
      "add()",
    ],
    correta: 1
  },
  {
    pergunta: "Como se chama o operador que verifica igualdade de valor e tipo em JavaScript?",
    respostas: [
      "==",
      "===",
      "=",
    ],
    correta: 1
  },
  {
    pergunta: "Qual desses loops é usado para iterar sobre as propriedades de um objeto em JavaScript?",
    respostas: [
      "for loop",
      "for...in loop",
      "while loop",
    ],
    correta: 1
  },
  {
    pergunta: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
    respostas: [
      "parseInt()",
      "stringToInt()",
      "toInteger()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual dessas declarações é usada para interromper a execução de um loop em JavaScript?",
    respostas: [
      "stop",
      "break",
      "exit",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função usada para imprimir algo no console em JavaScript?",
    respostas: [
      "log()",
      "print()",
      "console.log()",
    ],
    correta: 2
  },
  {
    pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
    respostas: [
      "// Este é um comentário",
      "<!-- Este é um comentário -->",
      "/* Este é um comentário */",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
    respostas: [
      "5",
      "32",
      "Erro",
    ],
    correta: 1
  },
  {
    pergunta: "O que o método 'charAt()' faz em JavaScript?",
    respostas: [
      "Retorna o valor de um caractere em uma posição especificada em uma string",
      "Adiciona um caractere a uma string",
      "Remove um caractere de uma string",
    ],
    correta: 0
  },
];

const quiz = document.querySelector('#quiz') //Constante que pesquisa o termo QUIZ pra poder dar as funcoes no codigo
const template = document.querySelector('template') //Constante que tambem pesquisa o termo, so que agora ele puxa o NODE da Template pra poder repetir e criar o loop do meu codigo.


const corretas = new Set() //O set eh um conjunto que eu posso adicionar ou tirar, mas nunca posso repetir o que tem dentro dele.
const totalDePerguntas = perguntas.length  //Todas as vezes que formos falar de variavel, usaremos camel case, que eh exatamente isso que voce ta pensando. se der espaco quebra o codigo. Uma array tambem eh um objeto e por isso estamos puxando o length no perguntas
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas // Aqui a gente procurou o ID e definiu que ele quer alem da parte de Acertos, ele quer o filho que eh o Span. 

//Loop de repeticao
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true) //Tive que instalar o Node pra poder rodar dentro do Visual Studio Code.
  quizItem.querySelector('h3').textContent = item.pergunta


  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta; //Estava dando erro por falta do ; no final do item.correta 

      corretas.delete(item) //Aqui esta dizendo que se voce mudar de opiniao ou trocar a selecao no formulario, ele vai desconsiderar a sua primeira resposta e nao vai repetir novamente no codigo.
      if (estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }



    quizItem.querySelector('dl').appendChild(dt)
  }
  // Remover ele elemento da tela.
  quizItem.querySelector('dl dt').remove()

  // Coloca a pergunta na tela
  quiz.appendChild(quizItem)
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function showIcons() {
  const icons = document.querySelectorAll('.social-icon');
  icons.forEach(icon => {
    if (isInViewport(icon)) {
      icon.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showIcons);
showIcons();

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}