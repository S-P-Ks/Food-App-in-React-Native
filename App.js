import * as React from "react";
import { Text, View, Button, Image, List } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Users from "./pages/foodpage";
import Header from "./pages/header";
import { ScrollView } from "react-native-gesture-handler";
import DetailsScreen from "./pages/profilepage";
// import Basket from "./pages/basket";
import ProductContext from "./pages/productContext";

function HomeScreen({ navigation }) {
  const user = { products: [], buyedItems: [] };

  return (
    <ProductContext.Provider value={user}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 2, textAlign: "center" }}>
          <ScrollView>
            <Header />
            <Users />
          </ScrollView>
        </View>
      </View>
    </ProductContext.Provider>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Find setting</Text>
    </View>
  );
}

function SearchScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Find Ur Food!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <DetailsScreen />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-list-box" : "ios-list";
            } else if (route.name === "Profile") {
              iconName = focused ? "happy-outline" : "person-circle-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "bulb" : "bulb-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styless = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
