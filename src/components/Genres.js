/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Pressable, ScrollView} from 'react-native';
import GetData from '../contents/Genredata';
import Styles from '../utils/Styles';


const Genres = () => {
    const handleGenrePress = (genre) => {
        console.log('Clicked on genre:', genre);
      };
    const Data = GetData();
    console.log(Data);
   return (
    <ScrollView horizontal contentContainerStyle={Styles.genreScrolDirection}>
        <View style={Styles.genreFlex}>
        {Data.map((genre) =>(
            <Pressable key={genre.id} onPress={() => handleGenrePress(genre.name)}><Text style={Styles.genres}>{genre.name}</Text></Pressable>
        ))}
    </View>
    </ScrollView>
  );
};

export default Genres;
