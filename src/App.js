import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import Genres from "./components/Genres";
import GenresB from "./components/GenresB";

// import GetData from "./contents/GenreData";

// function Link(props) {
//   return <Text {...props} role="link" style={[styles.link, props.style]} />;
// }

function App() {
  return (
    <ScrollView style={styles.allcoverage}>
      <View style={styles.app}>
        <Text style={styles.apptitleA}>
          Liptone <Text style={styles.apptitleB}>MOVIES</Text>
        </Text>
        <Genres />
        <GenresB />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  apptitleA: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 25,
    color: "white"
  },
  apptitleB: {
    color: "#C84B31"
  },
  allcoverage: {
    backgroundColor: "#191919"
  }
});
export default App;
