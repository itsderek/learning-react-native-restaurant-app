import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../compenents/SearchBar";
import useResults from "../hooks/useResults";
import Resultslist from "../compenents/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchAPI, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return [...results].filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchAPI(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <Resultslist title="Cost Effective" results={filterResultsByPrice("$")} />
      <Resultslist title="Bit Pricier" results={filterResultsByPrice("$$")} />
      <Resultslist title="Big Spender" results={filterResultsByPrice("$$$")} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
