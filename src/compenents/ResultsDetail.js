import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ url: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 12,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 5,
    marginBottom: 3,
  },
  name: {
    fontWeight: "bold",
  },
});

export default ResultsDetail;
