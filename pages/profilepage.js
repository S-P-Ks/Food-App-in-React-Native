// src/views/Details.js
import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import db from "../firebase";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, TouchableHighlight } from "react-native";
import ProductContext from "./productContext";

function DetailsScreen(props) {
  const navigation = useNavigation();

  const route = useRoute();
  const {
    no,
    removeItems,
    buyItems,
    id,
    param1,
    param2,
    param3,
  } = route.params;

  const product = useContext(ProductContext);
  const [num, setnum] = useState(0);

  useEffect(() => {}, []);

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ alignItems: "flex-start" }}>
        <Image
          style={{
            width: "100%",
            alignSelf: "flex-start",
            height: 200,
            resizeMode: "stretch",
            borderRadius: 10,
            marginTop: 20,
          }}
          source={{ uri: param3 }}
        />
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#d8d6c8",
            justifyContent: "space-around",
            // height: 100,
          }}
        >
          <Text>
            {param1}-{param2}
          </Text>
          <Text>
            No of {param1} purchased :- {num}
          </Text>
          <Button
            title="Add Item"
            onPress={() => {
              setnum(num + 1);
              buyItems(id - 1, num);
            }}
          />
          <Button
            title="Remove Item"
            onPress={() => {
              if (num == 0) {
                setnum(0);
              } else {
                setnum(num - 1);
              }
              removeItems(id - 1, num);
            }}
          />
        </View>
      </View>
      <View></View>
    </View>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});
