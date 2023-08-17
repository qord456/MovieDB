import React from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";
import GetData from "../contents/Dummy";
import styles from "../utils/styles";

const GenresB = () => {
  const Data = GetData();
  console.log(Data);

  return (
    <View>
      <ScrollView vertical contentContainerStyle={styles.GenreHeaderDirection}>
        {Data.map((Data) => (
          <Pressable>
            <View key={Data.id} style={styles.movie}>
              <Image
                source={{
                  uri: "https://image.tmdb.org/t/p/w500" + Data.poster_path
                }}
                style={styles.poster}
              />
            </View>
            <Text>{Data.title}</Text>
          </Pressable>
        ))}
        <View style={styles.movie}></View>
      </ScrollView>
    </View>
  );
};

export default GenresB;
