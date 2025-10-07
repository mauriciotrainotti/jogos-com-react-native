// App.js ou app/index.tsx

import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button, Alert } from 'react-native';
import { PERGUNTAS } from '../perguntas'; // Importa nosso banco de perguntas
import Pergunta from '../components/Pergunta'; // Importa o componente que exibe a pergunta

const VIDAS_INICIAIS = 3;

export default function GenioQuiz() {
  const [indicePergunta, setIndicePergunta] = useState(0); // Controla qual pergunta mostrar
  const [vidas, setVidas] = useState(VIDAS_INICIAIS);
  const [statusJogo, setStatusJogo] = useState('jogando'); // 'jogando', 'vitoria', 'derrota'

  const perguntaAtual = PERGUNTAS[indicePergunta];

  // Função central que verifica qualquer tipo de resposta
  const handleAnswer = (tipo, valor) => {
    if (statusJogo !== 'jogando') return;

    const respostaCorreta = perguntaAtual.respostaCorreta;

    // Verifica se o tipo e o valor da resposta clicada batem com a resposta correta
    if (tipo === respostaCorreta.tipo && valor === respostaCorreta.valor) {
      // --- RESPOSTA CORRETA ---
      const proximoIndice = indicePergunta + 1;
      if (proximoIndice < PERGUNTAS.length) {
        setIndicePergunta(proximoIndice);
      } else {
        // Chegou ao final de todas as perguntas
        setStatusJogo('vitoria');
        Alert.alert('GÊNIO!', 'Você venceu o impossível!');
      }
    } else {
      // --- RESPOSTA ERRADA ---
      const vidasRestantes = vidas - 1;
      setVidas(vidasRestantes);
      if (vidasRestantes > 0) {
        Alert.alert('Errado!', `Você tem mais ${vidasRestantes} ${vidasRestantes > 1 ? 'vidas' : 'vida'}.`);
      } else {
        setStatusJogo('derrota');
        Alert.alert('Fim de Jogo', 'Não foi desta vez. Tente novamente!');
      }
    }
  };

  const reiniciarJogo = () => {
    setIndicePergunta(0);
    setVidas(VIDAS_INICIAIS);
    setStatusJogo('jogando');
  };

  // --- Renderização ---
  return (
    <SafeAreaView style={styles.container}>
      {statusJogo === 'jogando' ? (
        <>
          <View style={styles.statusContainer}>
            <Text style={styles.textoStatus}>Vidas: {'❤️'.repeat(vidas)}</Text>
          </View>
          <Pergunta perguntaData={perguntaAtual} onAnswer={handleAnswer} />
        </>
      ) : (
        <View style={styles.telaFinalContainer}>
          <Text style={styles.textoTelaFinal}>
            {statusJogo === 'vitoria' ? 'VOCÊ VENCEU!' : 'FIM DE JOGO!'}
          </Text>
          <Button title="Jogar Novamente" onPress={reiniciarJogo} color="#3498db" />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e272e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusContainer: {
    position: 'absolute',
    top: 60,
    width: '100%',
    alignItems: 'center',
  },
  textoStatus: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  telaFinalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoTelaFinal: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});