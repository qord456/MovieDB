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
import Detail from "./Detail";
import Review from "./Review";

const Movies = ({ genrePicked }) => {
  const urlMovie = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genrePicked}`;
  const data = MovieData(urlMovie);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

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
        <ScrollView style={Styles.modalBackgroud}>
          <TouchableOpacity style={Styles.closeButton} onPress={closeModal}>
            <Text style={Styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
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
                <Text style={Styles.textCat3}>
                  <table>
                    <tbody>
                      Title<td>: {selectedMovie.title}</td>
                    </tbody>
                    <tbody>
                      Rating
                      <td>
                        <Detail id={selectedMovie.id} />
                      </td>
                    </tbody>
                    <tbody>
                      Overview<td>: {selectedMovie.overview}</td>
                    </tbody>
                  </table>
                </Text>
                <Text style={Styles.headerCommonCenter}>Review</Text>
                <Review
                  id={selectedMovie.id}
                  style={Styles.reviewListContainer}
                />
              </View>
            )}
          </View>
        </ScrollView>
      </Modal>
    </ScrollView>
  );
};

export default Movies;
