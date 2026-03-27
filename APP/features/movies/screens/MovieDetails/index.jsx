import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useMovies } from "../../hooks/useMovies";
import MovieCardDetails from "../../components/MovieCardDetails";
import styles from "./styles";
import ActorCard from "../../components/ActorCard";

export default function MovieDetails({route}) {
  const {movie} = route.params

  console.log(movie)
  return (
    
    <ScrollView style={styles.container}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <MovieCardDetails
          movie={movie}
          width={"55%"}
          />
        <Text style={styles.elencoTitulo}>Elenco</Text>
        <ActorCard
          movie={movie}
          width={"100%"}
          />
        </View>
    </ScrollView>
  );
}
