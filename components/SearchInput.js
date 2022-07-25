import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../constants";

const SearchInput = (props) => {
  return (
    <View style={[styles.container, { ...props.style }]}>
      <TextInput
        placeholder='Search'
        style={styles.searchInput}
        onChangeText={(text) => props.setSearch(text)}
      />
      <Ionicons name='search' size={16} color={colors.gray} />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    width: 330,
    height: 52,
    padding: 18,
    borderRadius: 16,
    backgroundColor: "#3A3F47",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchInput: {
    width: 280,
    color: colors.white,
    fontSize: 16,
  },
});
