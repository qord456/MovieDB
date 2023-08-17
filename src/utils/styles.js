import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  genre: {
    color: "white",
    marginHorizontal: "auto",
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontWeight: "bold"
  },
  genreBorder: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  genreScrolDirection: {
    flexDirection: "row"
  },
  genreEachBorder: {
    marginHorizontal: 5
  },
  genreHeader: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
    borderLeftColor: "yellow",
    borderLeftWidth: 5,
    paddingLeft: 5
  },
  genreHeaderDetail: {
    color: "#D4D4D8",
    margin: 10
  }
});

export default styles;
