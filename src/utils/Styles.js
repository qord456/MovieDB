/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  allcoverage: {
    backgroundColor: '#191919',
    maxWidth: 500,
  },
  topHeader: {
    margin: 10,
    padding: 30,
    alignItems: 'center',
    borderBottomWidth: 5,
    borderBottomColor: '#f1c40f',
  },
  topHeaderA: {
    color: '#ecf0f1',
    marginHorizontal: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  topHeaderB: {
    color: '#e74c3c',
    marginHorizontal: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  genres: {
    fontSize: 20,
    color: '#ecf0f1',
    borderColor: '#ecf0f1',
    borderWidth: 3,
    borderRadius: 5,
    marginHorizontal: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  genreScrolDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  genreFlex: {
    flexDirection: 'row',
    flexWrap: 'wrap',margin: 5,
  },
  textCat1: {
    fontSize: 20,
    color: '#ecf0f1',
  },
  poster: {
    height: 300,
    width: 200,
  },
  movie: {
    borderColor: 'white',
    borderWidth: 3,
    flex: 1,
  },
  genre: {
    color: 'white',
    marginHorizontal: 'auto',
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontWeight: 'bold',
  },
  genreBorder: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  // eslint-disable-next-line no-dupe-keys
  genreScrolDirection: {
    flexDirection: 'row',
  },
  GenreHeaderDirection: {
    flexDirection: 'column',
    marginVertical: 6,
  },
  genreEachBorder: {
    marginHorizontal: 5,
  },
  genreHeader: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 10,
    borderLeftColor: 'yellow',
    borderLeftWidth: 5,
    paddingLeft: 5,
    width: 500,
  },
  genreHeaderDetail: {
    color: '#D4D4D8',
    margin: 10,
  },
  app: {
    marginHorizontal: 'auto',
    maxWidth: 500,
  },
  apptitleA: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 25,
    color: 'white',
  },
  apptitleB: {
    color: '#C84B31',
  },
});

export default Styles;
