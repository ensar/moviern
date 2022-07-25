import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { colors } from "../constants";
import { useSelector } from "react-redux";
import Movie from "../components/Movie";

export default function WatchList() {
  const { watchlists } = useSelector((state) => state.watchlist);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>
      <View style={styles.container}>
        <Header title={"Watchlist"} />
        <View style={styles.watchlists}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {watchlists.length ? (
              watchlists.map((mov) => <Movie mov={mov} key={mov.id} />)
            ) : (
              <View style={styles.noResultContainer}>
                <View style={styles.noResult}>
                  <Image
                    source={require("../assets/images/folder.png")}
                    style={{ width: 76, height: 76 }}
                  />
                  <Text style={styles.noResultTitle}>
                    There Is No Movie Yet!
                  </Text>
                  <Text style={styles.message}>
                    Find your movie by Type title, categories, years, etc
                  </Text>
                </View>
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
    alignItems: "center",
  },
  watchlists: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
  },
  noResultContainer: {
    height: Dimensions.get("screen").height - 46,
    justifyContent: "center",
    alignItems: "center",
  },
  noResult: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 188,
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
