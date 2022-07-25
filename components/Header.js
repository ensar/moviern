import { Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../constants";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title, icon, style }) => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: 36,
          width: "100%",
          marginTop: 10,
        },
        style,
      ]}
    >
      <Ionicons
        name='chevron-back'
        size={20}
        color={colors.white}
        onPress={() => navigation.goBack()}
      />
      <Text style={{ fontSize: 16, color: colors.white }}>{title}</Text>
      <Ionicons
        name={icon || "information-circle-outline"}
        size={20}
        color={colors.white}
      />
    </View>
  );
};

export default Header;
