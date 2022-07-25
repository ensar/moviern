import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "../components/Categories";
import Trend from "../components/Trend";
import { colors } from "../constants";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>
      <View style={{ flex: 1, paddingHorizontal: 22 }}>
        <Text
          style={{
            color: colors.white,
            fontSize: 18,
            fontWeight: "700",
            marginBottom: 20,
            marginTop: 10,
          }}
        >
          What do you want to watch?
        </Text>
        <Trend />
        <Categories />
      </View>
    </SafeAreaView>
  );
}
