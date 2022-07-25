import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { colors } from "../constants";

const DetailBody = ({ movie }) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 22 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {["About Movie", "Reviews", "Cast"].map((tab, i) => {
          return (
            <TouchableOpacity>
              <View style={[styles.tab, i == 0 ? styles.active : null]}>
                <Text style={styles.tabTitle}>{tab}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <View>
            <Text style={styles.text}>Overview</Text>
            <Text style={styles.text}>{movie.overview}</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              marginTop: 10,
            }}
          >
            <View
              style={{
                width: "50%",
                display: "flex",
              }}
            >
              <Text style={styles.text}>Release Date</Text>
              <Text style={styles.text}>{movie.release_date}</Text>
            </View>
            <View style={{ width: "50%", display: "flex" }}>
              <Text style={styles.text}>Status</Text>
              <Text style={styles.text}>{movie.status}</Text>
            </View>
            <View style={{ width: "50%", display: "flex" }}>
              <Text style={styles.text}>Average Rating</Text>
              <Text style={styles.text}>{movie.vote_average.toFixed(1)}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailBody;

const styles = StyleSheet.create({
  tab: {
    width: 92,
    height: 33,
    marginRight: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  tabTitle: {
    color: colors.white,
    fontSize: 14,
  },
  active: {
    borderBottomWidth: 3,
    borderBottomColor: colors.gray,
  },
  text: {
    fontSize: 12,
    color: colors.white,
  },
});
