import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../constants";
import { getGenres } from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/features/movie/watchlistSlice";
import { useNavigation } from "@react-navigation/native";

export default function Movie({ mov }) {
  const [genre, setGenre] = useState();
  const [added, setAdded] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const genresData = await getGenres();
      setGenre(
        genresData.genres
          ?.filter((genre) => mov.genre_ids.includes(genre.id))
          .map((item) => item.name)[0]
      );
    })();
  }, []);

  let { watchlists } = useSelector((state) => state.watchlist);
  const addToWatchlist = () => {
    let alreadyExist = watchlists.some((watchlist) => watchlist.id == mov.id);

    if (!alreadyExist) {
      dispatch(add(mov));
      setAdded(true);
    } else {
      return false;
    }
  };

  const removeFromWatchlist = (id) => {
    dispatch(remove(id));
    setAdded(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("MovieDetail", { id: mov.id })}
      >
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original${mov.poster_path}`,
          }}
          style={styles.img}
        />
      </TouchableOpacity>
      <View style={styles.movieInfo}>
        <View>
          <Text style={{ color: colors.white }}>Title</Text>
          <Text style={{ color: colors.white }}>{mov.title}</Text>
          <Text style={{ color: colors.white }}>Release Date</Text>
          <Text style={{ color: colors.white }}>{mov.release_date}</Text>
          <Text style={{ color: colors.white }}>Genre</Text>
          <Text style={{ color: colors.white }}>{genre}</Text>
        </View>
        <View style={styles.movieIcons}>
          <Ionicons
            name='bookmark-sharp'
            color={added ? colors.blue : colors.white}
            size={24}
            onPress={() =>
              !added ? addToWatchlist() : removeFromWatchlist(mov.id)
            }
          />
          <Ionicons
            name='star'
            color={colors.yellow}
            size={24}
            style={{ marginTop: 18 }}
          />
          <Text>{mov.vote_average}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
    flex: 1,
  },
  img: { width: 95, height: 120 },
  movieInfo: {
    width: 200,
    height: 120,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  movieIcons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
