import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../constants";
import Movie from "./Movie";
import { getMoviesByCategory } from "../services/api";

const Category = ({ item, category, setCategory }) => (
  <TouchableOpacity onPress={() => setCategory(item.key)}>
    <View
      style={[styles.category, category == item.key ? styles.active : null]}
    >
      <Text style={styles.categoryTitle}>{item.label}</Text>
    </View>
  </TouchableOpacity>
);

const Categories = () => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("top_rated");
  const [categories, setCategories] = useState([
    { label: "Now Playing", key: "now_playing" },
    { label: "Upcoming", key: "upcoming" },
    { label: "Top Rated", key: "top_rated" },
    { label: "Popular", key: "popular" },
  ]);

  useEffect(() => {
    (async () => {
      const movieData = await getMoviesByCategory(category);
      setMovies(movieData.data.results);
    })();
  }, [category]);

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((item) => {
          return (
            <Category
              item={item}
              key={item.key}
              setCategory={setCategory}
              category={category}
            />
          );
        })}
      </ScrollView>

      <ScrollView showsVerticalScrollIndicator={false}>
        {movies.map((mov) => (
          <Movie mov={mov} key={mov.id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "800",
  },
  category: {
    width: 92,
    height: 33,
    marginRight: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  categoryTitle: {
    color: colors.white,
    fontSize: 14,
  },
  active: {
    borderBottomWidth: 3,
    borderBottomColor: colors.gray,
  },
});
