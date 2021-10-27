import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../compenents/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchAPI = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: term,
          location: "Hermitage, TN",
        },
      });
      setResults(response.data.businesses);
      setErrorMessage("");
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={searchAPI}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
