import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity
} from "react-native";
import MovieData from "../contents/MovieData";
import Styles from "../utils/Styles";

const Movies = () => {
  const data = MovieData();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  console.log("Movie List: ini data dari data render------", data);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={Styles.container}>
      {data.map((data) => (
        <TouchableOpacity
          key={data.id}
          style={Styles.movieContainer}
          onPress={() => openModal(data)}
        >
          <Image
            source={{
              uri: "https://image.tmdb.org/t/p/w500" + data.poster_path
            }}
            style={Styles.image}
          />
          <Text style={Styles.textCat2}>{data.title}</Text>
        </TouchableOpacity>
      ))}

      <Modal visible={modalVisible} animationType="slide">
        <View style={Styles.modalContainer}>
          {selectedMovie && (
            <View>
              <Image
                source={{
                  uri:
                    "https://image.tmdb.org/t/p/w500" +
                    selectedMovie.poster_path
                }}
                style={Styles.modalImage}
              />
              <Text style={Styles.modalText}>Title: {selectedMovie.title}</Text>
              <Text style={Styles.modalText}>
                Overview: {selectedMovie.overview}
              </Text>
              <TouchableOpacity style={Styles.closeButton} onPress={closeModal}>
                <Text style={Styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Movies;
