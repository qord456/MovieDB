import GetRating from "../contents/RatingData";
import { Text } from "react-native";

const Detail = ({ id }) => {
  const url = "https://api.themoviedb.org/3/movie/" + id;
  const ratingResult = GetRating(url);
  return <Text>: {ratingResult.vote_average}</Text>;
};
export default Detail;
