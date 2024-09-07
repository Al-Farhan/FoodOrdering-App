import { FlatList, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useCart } from '@/src/providers/CartProvider';
import CartListItem from '@/src/components/CartListItem';

const CartScreen = () => {
    const { items } = useCart();
  return (
    <View>
      <FlatList 
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
      />

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})