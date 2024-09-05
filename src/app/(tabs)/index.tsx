import { FlatList, StyleSheet, View } from 'react-native';
import Colors from '@/src/constants/Colors';
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';

export default function MenuScreen() {
  return (
    <View>
      <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
      contentContainerStyle={{gap: 10, padding: 10}}
      columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  title: { 
    fontSize: 20, 
    fontWeight: '600',
    marginVertical: 10
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold'
  },
  
});
