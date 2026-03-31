import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function MovieCardDetails({ movie, width }) {
  return (
    <View style={[styles.container, { width: width }]}>        
        <Image
          source={{ uri: movie.img_capa }}
          style={styles.image}
        />
        <Text style={styles.title}>
          {movie.nome}
        </Text>
        <Text style={styles.year}>
          {movie.ano}
        </Text>
        <Text style={styles.sinopse}>
          {movie.sinopse}
        </Text>
    </View>
  );
}

/*
O componente MovieCard é responsável por exibir as informações de um filme específico, como a imagem de capa, o nome e o ano de lançamento. 
Ele recebe as informações do filme através da prop movie e uma função onPress para lidar com o toque na tela. 
Quando o usuário toca no card, a função onPress é chamada, permitindo que a tela MovieList possa navegar para a tela de detalhes do filme ou realizar qualquer outra ação necessária.
*/