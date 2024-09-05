import { useLocalSearchParams } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'


const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>ProductDetailsScreen: {id}</Text>
    </View>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({})