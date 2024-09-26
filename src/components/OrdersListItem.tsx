import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Order } from '../types'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Link, useSegments } from 'expo-router'

dayjs.extend(relativeTime)

type OrdersListProps = {
    order: Order
}

const OrdersListItem = ({ order }: OrdersListProps) => {
  const segments = useSegments();
  return (
    <Link href={`/${segments[0]}/orders/${order.id}`} asChild>
    <Pressable style={styles.container}>
      <View style={styles.orderDetail}>
        <Text style={styles.title}>Order #{order.id}</Text>
        <Text style={styles.time}>{dayjs(order.created_at).fromNow()}</Text>
      </View>

      <Text style={styles.orderStatus}>{order.status}</Text>
    </Pressable>
    </Link>
  )
}

export default OrdersListItem

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderRadius: 10,
    },
    orderDetail: {
      justifyContent: 'space-between'
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 5
    },
    time: {
      color: 'gray'
    },
    orderStatus: {
      fontSize: 15,
      fontWeight: 'bold'
    }
})