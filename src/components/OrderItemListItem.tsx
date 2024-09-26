import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { OrderItem } from "../types";
import { defaultPizzaImage } from "./ProductListItem";
import Colors from "../constants/Colors";

type OrderItemListItemProps = {
  item: OrderItem;
};

const OrderItemListItem = ({ item }: OrderItemListItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: item.products.image || defaultPizzaImage }}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>From app</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.price}>$243</Text>
          <Text style={styles.size}>Size: XL</Text>
        </View>
      </View>
      <View style={styles.quantitySelector}>
        <Text style={styles.quantity}>2</Text>
      </View>
    </View>
  );
};

export default OrderItemListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 75,
    aspectRatio: 1,
    alignSelf: 'center',
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  subtitleContainer: {
    flexDirection: "row",
    gap: 10,
    marginLeft: 10,
  },
  price: {
    fontSize: 15,
    color: Colors.light.tint,
    fontWeight: "bold",
  },
  size: {
    fontSize: 15,
    fontWeight: "semibold",
  },
  quantitySelector: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  quantity: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
