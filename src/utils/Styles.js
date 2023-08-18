/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  headerCommonCenter: {
    marginTop: 20,
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center"
  },
  reviewerName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "yellow"
  },
  reviewListContainer: {
    margin: 5,
    width: "90%",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    borderTopWidth: 3,
    borderTopColor: "#e74c3c"
  },
  modalBackgroud: {
    backgroundColor: "#191919",
    maxWidth: 1280
  },
  movieListContainer: {
    maxWidth: 200
  },
  modalContainer: {
    maxWidth: 1280,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalImage: {
    width: "50%",
    aspectRatio: 2 / 3,
    alignSelf: "center"
  },
  modalText: {
    fontSize: 20,
    marginBottom: 10
  },
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 20,
    marginRight: 5,
    width: "15%",
    alignItems: "center",
    alignSelf: "flex-end"
  },
  closeButtonText: {
    color: "#e74c3c",
    fontSize: 15,
    fontWeight: "bold"
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10
  },
  movieContainer: {
    width: "48%",
    marginBottom: 10
  },
  image: {
    width: "100%",
    aspectRatio: 2 / 3
  },
  allcoverage: {
    backgroundColor: "#191919",
    maxWidth: 1280
  },
  topHeader: {
    padding: 40,
    marginBottom: 20,
    alignItems: "center"
  },
  topHeaderA: {
    color: "#ecf0f1",
    marginHorizontal: 10,
    fontSize: 40,
    fontWeight: "bold"
  },
  topHeaderB: {
    color: "#e74c3c",
    marginHorizontal: 10,
    fontSize: 40,
    fontWeight: "bold"
  },
  scrollView: {
    height: 200,
    width: "100%"
  },
  genres: {
    fontSize: 20,
    color: "#ecf0f1",
    marginHorizontal: 5,
    marginVertical: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontWeight: "bold"
  },

  genreFlex: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  textCat1: {
    fontSize: 20,
    color: "#ecf0f1"
  },
  textCat2: {
    marginVertical: 5,
    fontSize: 15,
    color: "#ecf0f1",
    textAlign: "center"
  },
  textCat3: {
    fontSize: 15,
    color: "#ecf0f1"
  },
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
    paddingHorizontal: 10,
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
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginVertical: 10,
    borderLeftColor: "yellow",
    borderLeftWidth: 5,
    paddingLeft: 5,
    width: 500
  },
  genreHeaderDetail: {
    color: "#D4D4D8",
    marginHorizontal: 20
  },
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
  }
});

export default Styles;
