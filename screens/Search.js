import { useEffect, useState } from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Movie from "../components/Movie";
import SearchInput from "../components/SearchInput";
import { colors } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/features/movie/movieSlice";

export default function Search() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  const { movies } = useSelector((state) => state.movie);

  let filtered = movies.results.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>
      <View style={{ flex: 1, paddingHorizontal: 22 }}>
        <Header title={"Search"} />
        <SearchInput style={{ marginTop: 40 }} setSearch={setSearch} />
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {filtered.length ? (
              filtered.map((mov) => <Movie mov={mov} key={mov.id} />)
            ) : (
              <View style={styles.noResult}>
                <Image
                  source={require("../assets/images/no-results.png")}
                  style={{ width: 76, height: 76 }}
                />
                <Text style={styles.noResultTitle}>
                  We Are Sorry,We Can Not Find The Movie :(
                </Text>
                <Text style={styles.message}>
                  Find your movie by Type title, categories, years, etc
                </Text>
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  noResult: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 188,
    marginTop: 40,
  },
  noResultTitle: {
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 1,
    color: colors.white,
    marginTop: 16,
  },
  message: {
    fontSize: 12,
    color: colors.gray,
    textAlign: "center",
    marginTop: 8,
  },
});
