import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function ActorSection({ movie, width }) {
  return (
    <View style={[styles.atorContainer, { width: width }]}>
        <View style={styles.actorBox}>
        {movie.elenco.map((ator) => {
          return (
              <View key={ator.id} style={styles.actorCard}>
            <Image source={{ uri: ator.imagem }} style={styles.image} />
            <Text style={styles.actorName}>{ator.nome}</Text>
            <Text style={styles.actorPersonagem}>{ator.personagem}</Text>
          </View>
        );
        })}
        </View>
    </View>
  );
}
