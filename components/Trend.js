import { View, FlatList, Image, Text } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/features/movie/movieSlice";

const Item = ({ img }) => (
  <View>
    <Image
      style={{ width: 115, height: 167, marginRight: 24, borderRadius: 16 }}
      source={{
        uri: `https://image.tmdb.org/t/p/original${img}`,
      }}
    />
  </View>
);

const Trend = () => {
  const renderItem = ({ item }) => <Item img={item.poster_path} />;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const movieData = useSelector((state) => state.movie);

  return (
    <View style={{ marginTop: 20 }}>
      {movieData.loading ? (
        <Text style={{ fontSize: 25, color: "#fff" }}>Loading...</Text>
      ) : (
        <FlatList
          horizontal
          data={movieData.movies.results}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default Trend;
