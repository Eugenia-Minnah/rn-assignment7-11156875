import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, Image, SafeAreaView, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { CartContext } from '../Components/CartContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from "@react-native-async-storage/async-storage";
import CartItem from '../Components/CartItem';

export default function CartScreen() {
    const { cart, removeFromCart } = useContext(CartContext);
    const [localCart, setLocalCart] = useState([]);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                let cartItems = await AsyncStorage.getItem("cart");
                cartItems = cartItems ? JSON.parse(cartItems) : [];
                setLocalCart(cartItems);
            } catch (error) {
                console.error('Failed to fetch cart from AsyncStorage:', error);
            }
        };

        fetchCart();
    }, []);

    useEffect(() => {
        const saveCart = async () => {
            try {
                await AsyncStorage.setItem("cart", JSON.stringify(cart));
                setLocalCart(cart);
            } catch (error) {
                console.error('Failed to save cart to AsyncStorage:', error);
            }
        };

        saveCart();
    }, [cart]);

    const getTotalPrice = () => {
        return localCart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.home}>
                <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                    <Image source={require('../assets/Logo.png')} style={{ marginRight: 100, marginLeft: 150 }} />
                    <TouchableOpacity>
                        <Icon style={{ marginLeft: 35 }} name='search' size={30} />
                    </TouchableOpacity>
                </View>
                <Text style={{ marginVertical: 10, textAlign: 'center', fontSize: 22, fontFamily: 'Times New Roman', textDecorationLine: 'underline' }}>CHECKOUT</Text>
            </View>
            <FlatList
                data={localCart}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <CartItem item={item} removeFromCart={removeFromCart} />
                )}
            />
            <View style={styles.totalContainer}>
    <Text style={styles.totalText}>EST.TOTAL</Text>
    <Text style={styles.priceText}>${getTotalPrice()}</Text>
</View>
<View style={{ alignItems: 'center' }}>
        <Pressable style={styles.CheckOutButton}>
        <Icon style={{ marginHorizontal: 10 }} name='shopping-bag' size={30} color='white'/>
        <Text style={{ color: 'white', fontSize: 24, top:3, left: 20 , paddingBottom: 5, fontFamily:'Times New Roman'}}>CHECKOUT</Text>
        </Pressable>
    </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    home: {
        padding: 10,
    },
    totalContainer: {
        padding: 20,
        borderTopColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    totalText: {
        fontSize: 25,
        fontWeight:26,
        color:'#FF8000',
    },
    priceText: {
        fontSize: 25,
        fontWeight: 26,
        marginLeft: 10,
        color:'#FF8000',
    },
    CheckOutButton:{
        alignItems: 'center',
    backgroundColor: 'black',
    width: '105%',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: -20,

    },
});
