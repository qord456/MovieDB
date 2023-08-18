import { ScrollView, Text, View } from "react-native";
import GetReview from "../contents/ReviewData";
import Styles from "../utils/Styles";

const Review = ({ id }) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews`;
  const reviewResult = GetReview(url);
  return (
    <ScrollView>
      {reviewResult.map((data) => (
        <View key={data.id} style={Styles.reviewListContainer}>
          <Text style={Styles.reviewerName}>{data.author}</Text>
          <Text style={Styles.textCat3}>
            Username: {data.author_details.username}
          </Text>
          <table style={Styles.textCat3}>
            <tbody>
              Rating<td>: {data.author_details.rating}</td>
            </tbody>
            <tbody>
              Review<td>: {data.content}</td>
            </tbody>
            <tbody>
              Created_At<td>: {data.created_at}</td>
            </tbody>
            <tbody>
              Updated_At<td>: {data.updated_at}</td>
            </tbody>
          </table>
        </View>
      ))}
    </ScrollView>
  );
};
export default Review;
