import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import GetData from "../contents/GenreData";
import styles from "../utils/styles";

const GenresB = () => {
  const Data = GetData();

  const handleGenrePress = (genre) => {
    // Handle the press event here, you can navigate or perform any action
    console.log("Clicked on genre:", genre);
  };

  return (
    <View>
      <Text style={styles.genreHeader}>Genres B</Text>
      <Text style={styles.genreHeaderDetail}>
        Discover your favorite genres
      </Text>
      <ScrollView horizontal contentContainerStyle={styles.genreScrolDirection}>
        <View style={styles.genreBorder}>
          <Pressable onPress={() => handleGenrePress("Movies")}>
            <Text style={styles.genre}>Movies</Text>
          </Pressable>
          {Data.map((genre) => (
            <Pressable
              key={genre.id}
              onPress={() => handleGenrePress(genre.name)} // Pass the genre name to the handler
              style={styles.genreEachBorder}
            >
              <Text style={styles.genre}>{genre.name}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default GenresB;
