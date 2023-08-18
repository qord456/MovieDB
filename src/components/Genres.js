/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  TouchableHighlight
} from "react-native";
import GetData from "../contents/Genredata";
import Styles from "../utils/Styles";
import Movies from "./MovieList";

const Genres = () => {
  const data = GetData();
  const [picked, setPicked] = useState("");

  const handleGenrePress = (genrePicked) => {
    setPicked(genrePicked);
  };

  return (
    <ScrollView>
      <View>
        <Text style={Styles.genreHeader}>Genres</Text>
        <Text style={Styles.genreHeaderDetail}>
          Discover movies based on your favorite genre
        </Text>
        <ScrollView
          horizontal
          contentContainerStyle={Styles.genreScrolDirection}
        >
          <View style={Styles.genreFlex}>
            <TouchableHighlight onPress={() => handleGenrePress("Movie")}>
              <Text style={Styles.genres}>Movies</Text>
            </TouchableHighlight>
            {data.map((genre) => (
              <Pressable
                key={genre.id}
                onPress={() => handleGenrePress(genre.id)}
              >
                <Text style={Styles.genres}>{genre.name}</Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>
        <Movies genrePicked={picked} />
      </View>
    </ScrollView>
  );
};

export default Genres;
