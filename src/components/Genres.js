import React from "react";
import { View, Text, ScrollView } from "react-native";
import GetData from "../contents/GenreData";
import styles from "../utils/styles";

const Genres = () => {
  const Data = GetData();

  return (
    <View>
      <Text style={styles.genreHeader}>Genres</Text>
      <Text style={styles.genreHeaderDetail}>
        Discover your favorite genres
      </Text>
      <ScrollView horizontal contentContainerStyle={styles.genreScrolDirection}>
        <View style={styles.genreBorder}>
          <Text style={styles.genre}>Movies</Text>
          {Data.map((genre) => (
            <View key={genre.id} style={styles.genreEachBorder}>
              <Text style={styles.genre}>{genre.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Genres;
