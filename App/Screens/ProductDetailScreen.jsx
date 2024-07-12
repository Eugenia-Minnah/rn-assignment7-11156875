import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductDetailScreen = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text></Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
import { CartContext } from '../Components/CartContext';
export default ProductDetailScreen;