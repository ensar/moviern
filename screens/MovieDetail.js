import { View, Text, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { colors } from "../constants";
import { getDetail } from "../services/api";
import Ionicons from "@expo/vector-icons/Ionicons";
import DetailBody from "../components/DetailBody";

export default function MovieDetail({ route }) {
  let id = route.params.id;
  const [movie, setMovie] = useState();

  useEffect(() => {
    (async () => {
      const movieData = await getDetail(id);
      setMovie(movieData.data);
    })();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>
      <View style={{ flex: 1 }}>
        <Header
          title={"Detail"}
          icon={"bookmark-sharp"}
          style={{ paddingHorizontal: 22 }}
        />
        {movie && (
          <View style={{ flex: 1 }}>
            <View>
              <Image
                resizeMode='cover'
                source={{
                  uri: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
                }}
                style={styles.headerImg}
              />
              <View style={{ paddingHorizontal: 22 }}>
                <View style={styles.detailHead}>
                  <Image
                    resizeMode='center'
                    source={{
                      uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
                    }}
                    style={styles.posterImg}
                  />
                  <Text style={styles.title}>{movie.title}</Text>
                </View>
                <View style={styles.detailFooter}>
                  <View style={styles.rate}>
                    <Ionicons name='star' color={colors.yellow} size={22} />
                    <Text style={{ color: colors.white }}>
                      {movie.vote_average.toFixed(1)}
                    </Text>
                  </View>
                  {movie.genres.map((genre) => {
                    return <Text style={styles.category}>{genre.name}</Text>;
                  })}
                </View>
              </View>
            </View>
            <DetailBody movie={movie} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImg: { width: "100%", height: 210 },
  detailHead: {
    display: "flex",
    height: 80,
    flexDirection: "row",
    position: "relative",
  },
  posterImg: {
    width: 95,
    height: 120,
    position: "absolute",
    top: -40,
    borderRadius: 16,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "700",
    marginTop: 12,
    marginLeft: 117,
  },
  detailFooter: {
    height: 48,
    width: "100%",
    marginTop: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  rate: {
    width: 24,
    alignItems: "center",
    marginRight: 18,
  },
  category: {
    height: 24,
    backgroundColor: colors.gray,
    color: colors.white,
    borderRadius: 12,
    textAlign: "center",
    marginRight: 12,
    paddingHorizontal: 10,
  },
});
