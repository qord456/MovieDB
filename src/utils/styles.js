import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  poster: {
    height: 300,
    width: 200
  },
  movie: {
    borderColor: "white",
    borderWidth: 3,
    flex: 1
  },
  genre: {
    color: "white",
    marginHorizontal: "auto",
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontWeight: "bold"
  },
  genreBorder: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  genreScrolDirection: {
    flexDirection: "row"
  },
  GenreHeaderDirection: {
    flexDirection: "column",
    marginVertical: 6
  },
  genreEachBorder: {
    marginHorizontal: 5
  },
  genreHeader: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginVertical: 10,
    borderLeftColor: "yellow",
    borderLeftWidth: 5,
    paddingLeft: 5,
    width: 500
  },
  genreHeaderDetail: {
    color: "#D4D4D8",
    margin: 10
  }
});

export default styles;
