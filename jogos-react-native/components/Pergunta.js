// components/Pergunta.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Pergunta = ({ perguntaData, onAnswer }) => {
  const { id, pergunta, opcoes, corDaPalavraRoxa } = perguntaData;

  // Separa a pergunta em palavras para torná-las clicáveis individualmente
  const palavrasDoTitulo = pergunta.split(' ');

  return (
    <View style={styles.container}>
      {/* --- Número da Pergunta (Clicável) --- */}
      <TouchableOpacity onPress={() => onAnswer('numero_pergunta', id)}>
        <Text style={styles.numeroPergunta}>{id}.</Text>
      </TouchableOpacity>

      {/* --- Título da Pergunta (Palavras Clicáveis) --- */}
      <View style={styles.tituloContainer}>
        {palavrasDoTitulo.map((palavra, index) => (
          <TouchableOpacity key={index} onPress={() => onAnswer('palavra_titulo', palavra)}>
            <Text style={[styles.titulo, palavra === 'Roxo' && { color: corDaPalavraRoxa }]}>
              {palavra}{' '}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* --- Botões de Opção (Clicáveis) --- */}
      <View style={styles.opcoesContainer}>
        {opcoes.map((opcao, index) => (
          <TouchableOpacity
            key={index}
            style={styles.botaoOpcao}
            onPress={() => onAnswer('botao', index)}
          >
            <Text style={styles.textoOpcao}>{opcao}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20,
        alignItems: 'center',
    },
    numeroPergunta: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#bdc3c7',
        alignSelf: 'flex-start',
    },
    tituloContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginVertical: 30,
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    opcoesContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    botaoOpcao: {
        backgroundColor: '#3498db',
        width: '48%', // Duas colunas
        padding: 20,
        borderRadius: 10,
        marginBottom: 15,
        alignItems: 'center',
    },
    textoOpcao: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Pergunta;