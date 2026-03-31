import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useMovies } from "../../hooks/useMovies";
import MovieCardDetails from "../../components/MovieCardDetails";
import styles from "./styles";
import ActorSection from "../../components/ActorSection";

export default function MovieDetails(prop) {
  const {movie} = prop.route.params
  return (
    
    <ScrollView style={styles.container}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <MovieCardDetails
          movie={movie}
          width={"100%"}
        />
        <Text style={styles.elencoTitulo}>Elenco</Text>
        <ActorSection
          movie={movie}
          width={"100%"}
        />
        </View>
    </ScrollView>
  );
}
