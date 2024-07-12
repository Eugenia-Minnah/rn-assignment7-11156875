import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const loadCart = async () => {
            try {
                const cartItems = await AsyncStorage.getItem("cart");
                if (cartItems) {
                    setCart(JSON.parse(cartItems));
                }
            } catch (error) {
                console.error('Failed to load cart from AsyncStorage:', error);
            }
        };

        loadCart();
    }, []);

    const saveCart = async (cart) => {
        try {
            await AsyncStorage.setItem("cart", JSON.stringify(cart));
        } catch (error) {
            console.error('Failed to save cart to AsyncStorage:', error);
        }
    };

    const addToCart = (product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        saveCart(updatedCart);
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
        saveCart(updatedCart);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};