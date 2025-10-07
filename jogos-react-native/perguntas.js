// perguntas.js (versão atualizada com as suas ideias)

export const PERGUNTAS = [
  {
    id: 1,
    pergunta: 'Clique no Roxo',
    opcoes: ['Azul', 'Vermelho', 'Verde', 'Amarelo'],
    respostaCorreta: {
      tipo: 'palavra_titulo', // A resposta é uma palavra no título
      valor: 'Roxo'          // A palavra específica a ser clicada
    },
    corDaPalavraRoxa: '#8e44ad' // A cor real do texto "Roxo"
  },
  {
    id: 2,
    pergunta: 'Qual o sobrenome do descobridor do Brasil?',
    opcoes: ['Cabral', 'Colombo', 'Vesprúcio', 'Gama'],
    respostaCorreta: {
      tipo: 'botao', // A resposta agora é um dos botões
      valor: 0       // O índice do botão correto: 0 = 'Cabral'
    },
  },
  {
    id: 3,
    pergunta: 'Quantos títulos mundiais a Argentina tem?',
    opcoes: ['1', '5', '2', '4'],
    respostaCorreta: {
      tipo: 'numero_pergunta', // A resposta agora é o número da pergunta
      valor: 3
    },
  },
  {
    id: 4,
    pergunta: 'Qual a cor do cavalo branco de Napoleão?',
    opcoes: ['Preto', 'Marrom', 'Cor?', 'Malhado'],
    respostaCorreta: {
      tipo: 'palavra_titulo', // A resposta está no texto da pergunta
      valor: 'branco'
    },
    
  },

  
    {
    id: 5,
    pergunta: 'O que havia na pergunta número 2?',
    opcoes: ['Um descobridor', 'Um botão azul', 'A cor verde', 'Uma pergunta'],
    respostaCorreta: {
      tipo: 'botao',
      valor: 0 // A resposta correta é "Um descobridor"
    },
  },
];