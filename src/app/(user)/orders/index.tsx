import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';
import orders from '@/assets/data/orders';
import OrdersListItem from '@/src/components/OrdersListItem';

export default function Orders() {
  return (
      <FlatList 
      data={orders}
      renderItem={({ item }) => <OrdersListItem order={item} />}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      />
  );
}
