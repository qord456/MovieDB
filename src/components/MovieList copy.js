import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import MovieData from "../contents/MovieData";

const Movies = () => {
  const data = MovieData();
  console.log("Movie List: ini data dari data render------", data);

  return (
    <ScrollView>
      <View>
        {data.map((data) => (
          <View key={data.id}>
            <Text>{data.poster_path}</Text>
            <Image
              source={{ uri: "https://image.tmdb.org/t/p/w500" + data.poster_path }}
              style={{ width: 200, height: 300 }} // Adjust width and height as needed
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Movies;
