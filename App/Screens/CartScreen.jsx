import React, { useContext } from 'react';
import { View, Text, FlatList, Image, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { CartContext } from '../Components/CartContext';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CartScreen() {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.home}>
      <View style={{ flexDirection: 'row', marginVertical: 20 }}>
        <Image source={require('../assets/Logo.png')} style={{ marginRight: 100, marginLeft: 150 }} />
        <TouchableOpacity>
            <Icon style={{marginLeft:35}} name='search' size={30} />
        </TouchableOpacity>
    </View>
    <Text style={{ marginVertical: 10, textAlign: 'center', fontSize: 22, fontFamily:'Times New Roman', textDecorationLine: 'underline'  }}>CHECKOUT</Text>
    </View>
            <FlatList
                data={cart}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.productContainer}>
                        <Image source={{ uri: item.image }} style={styles.productImage} />
                        <View style={styles.productInfo}>
                            <Text style={styles.productTitle}>{item.title}</Text>
                            <Text style={styles.productPrice}>${item.price}</Text>
                        </View>
                        <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                            <Icon name="trash" size={28} color="red" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    productContainer: {
        flexDirection: 'row',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        alignItems: 'center',
    },
    productImage: {
        width: 90,
        height: 180,
        resizeMode: 'contain',
        marginRight: 10,
    },
    productInfo: {
        flex: 1,
    },
    productTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ff6600',
    },
});