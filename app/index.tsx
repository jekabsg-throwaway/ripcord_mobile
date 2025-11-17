import { Text, View, StyleSheet } from "react-native";
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
      <Text style={styles.title}>Ripcord Forum</Text>
      <ForumPostList />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    margin: 18,
    fontSize: 32,
    fontWeight: "bold",
  }
});

