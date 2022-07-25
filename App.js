import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieDetail from "./screens/MovieDetail";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={"Main"}
          >
            <Stack.Screen name='Main' component={Tabs} />
            <Stack.Screen
              name='MovieDetail'
              component={MovieDetail}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
