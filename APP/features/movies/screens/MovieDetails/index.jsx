import React from "react";
import { View, Text, Image } from "react-native";
import { useMovies } from "../../hooks/useMovies";
import MovieCardDetails from "../../components/MovieCardDetails";
import styles from "./styles";

export default function MovieDetails({route}) {
  const {movie} = route.params

  console.log(movie)
  return (
    
    <View style={styles.container}>
        <MovieCardDetails
          movie={movie}
          width={"100%"}
        />
        <Text style={styles.elencoTitulo}>Elenco</Text>
    </View>
  );
}
