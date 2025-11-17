import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { fetch } from "expo/fetch";

const API_ADDRESS = "http://127.0.0.1:8000";

export default function ForumPostList() {

  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    try {
      const response = await fetch(`${API_ADDRESS}/forum/api/posts/?format=json`);
      const json = await response.json();
      setPosts(json);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.mainText}>{item.text.slice(0, 200).split(" ").slice(0, -1).join(" ") + "..."}</Text>
    </View>
  );

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item) => item.date}
    />
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#d4d4d4ff",
    padding: 8,
    margin: 12,
    boxShadow: "8px 8px gray",
  },
  title: {
    margin: 18,
    fontSize: 32,
    fontWeight: "bold",
  },
  mainText: {
    margin: 24,
    fontSize: 18,
  },
});
