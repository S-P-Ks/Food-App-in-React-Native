import React, { useEffect, useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProductContext from "./productContext";

function Header() {
  const Name = useContext(ProductContext);

  useEffect(() => {
    console.log(Name);
  }, []);

  return (
    <View
      style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}
    >
      <View style={{ marginLeft: 10, marginTop: 30 }}>
        <TouchableOpacity>
          <Ionicons name="ios-location-outline" size={30} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <TouchableOpacity>
          <Text>My Food</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginRight: 10, marginTop: 30 }}>
        <TouchableOpacity>
          <Ionicons name="ios-basket-outline" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Header;
