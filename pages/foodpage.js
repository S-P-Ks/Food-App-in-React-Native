import React, { useState, useEffect, useContext } from "react";
import {
  ActivityIndicator,
  navigate,
  Image,
  FlatList,
  Button,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
} from "react-native";

import db from "../firebase";
import { useNavigation } from "@react-navigation/native";
//import Cart from './cart';
import ProductContext from "./productContext";

import Ionicons from "react-native-vector-icons/Ionicons";
//import onAdd from './addto'
//import IUS from './addto';

function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([]);

  // Using the context
  const product = useContext(ProductContext);

  const buyItems = (id, num) => {
    product.buyedItems[id] = num;
    console.log(product.buyedItems);
  };

  const removeItems = (id, num) => {
    product.buyedItems[id] = num;
  };

  useEffect(() => {
    const subscriber = db.collection("food").onSnapshot((querySnapshot) => {
      const users = [];

      querySnapshot.forEach((documentSnapshot) => {
        users.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });

      setUsers(users);
      console.log(users);

      // Initializing the products and the buyedItems array
      product.products = users;

      console.log(product.products);
      product.buyedItems = new Array(users.length);
      product.buyedItems.fill(0);
      console.log(product.buyedItems);

      setLoading(false);
    });

    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  const Separator = () => <View style={styless.separator} />;

  const Item = ({ id, title, kak, pr }) => (
    <View style={styles.item}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{kak}</Text>
        <Image
          style={{
            width: "100%",
            height: 200,
            resizeMode: "stretch",
            borderRadius: 30,
          }}
          source={{ uri: title }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 29, marginLeft: 10 }}>RS:{pr}</Text>
          <Ionicons
            style={{ marginRight: 10 }}
            name="ios-add-circle-outline"
            size={32}
          />
          <Button
            type="clear"
            title="Buy now"
            onPress={() =>
              navigation.navigate("Profile", {
                removeItems: removeItems,
                buyItems: buyItems,
                id: id,
                param1: kak,
                param2: pr,
                param3: title,
                no: product.buyedItems[id - 1],
              })
            }
          />
        </View>
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item
      title={item.img}
      id={parseInt(item.id)}
      kak={item.name}
      pr={item.price}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

export default Users;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#d8d6c8",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 30,
  },
  title: {
    fontSize: 32,
  },
});
