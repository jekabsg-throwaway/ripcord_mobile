import { Text, View } from "react-native";
import ForumPostList from './components/ForumPostList';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ForumPostList />
    </View>
  );
}
