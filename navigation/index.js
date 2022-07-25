import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Search from "../screens/Search";
import WatchList from "../screens/WatchList";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../constants";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.blue,
        tabBarStyle: {
          backgroundColor: colors.bg,
          paddingHorizontal: 16,
          height: 62,
          borderTopColor: colors.blue,
        },
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name='home-outline'
                size={24}
                color={focused ? colors.blue : colors.gray}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name='Search'
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name='search'
                size={24}
                color={focused ? colors.blue : colors.gray}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name='Watchlist'
        component={WatchList}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name='bookmark-sharp'
                size={24}
                color={focused ? colors.blue : colors.gray}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
