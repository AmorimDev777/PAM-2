import React from "react";
import { View, FlatList, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useMovies } from "../../hooks/useMovies";
import MovieCard from "../../components/MovieCard";
import styles from "./styles";
import { ROUTES } from "../../../../constants/routes";

export default function MovieList() {
  const { movies, loading } = useMovies();
  const navigation = useNavigation();

  console.log(movies);

  if (loading) { return (
    <View style={styles.containerLoading}>
      <Text style={{ textAlign: "center", marginTop: 20, color: '#000000' }}>Carregando...</Text>
    </View>
  );}

  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1, gap: 20}}
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-around" }}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() =>
              navigation.navigate(ROUTES.MOVIE_DETAILS, {
                movie: item,
              })
            }
            width={"40vw"}
          />
        )}
      />
    </View>
  );
}

/*
A tela MovieList é responsável por exibir a lista de filmes. Ela utiliza o hook useMovies para obter os dados dos filmes e o estado de carregamento. 
Se os dados ainda estiverem sendo carregados, ela exibe uma mensagem de "Carregando...". 
Caso contrário, ela renderiza uma FlatList com os filmes, utilizando o componente MovieCard para exibir cada filme individualmente. 
Quando um usuário toca em um card de filme, a função onPress é chamada, navegando para a tela de detalhes do filme (ROUTES.MOVIE_DETAILS) e passando as informações do filme selecionado como parâmetro.
*/