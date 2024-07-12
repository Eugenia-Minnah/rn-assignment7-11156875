import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { CartContext } from '../Components/CartContext';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ProductDetailScreen({ route, navigation }) {
    const { product } = route.params; // Get the product passed from HomeScreen
    const { addToCart } = useContext(CartContext);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Icon style={{ marginHorizontal: 10 }} name='arrow-left' size={30} onPress={() => navigation.goBack()} />
                <Text style={styles.headerTitle}>Product Details</Text>
            </View>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Image source={{ uri: product.image }} style={styles.productImage} />
                <Text style={styles.productTitle}>{product.title}</Text>
                <Text style={styles.productDescription}>{product.description}</Text>
                <Text style={styles.productPrice}>${product.price}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        paddingHorizontal: 16,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    contentContainer: {
        padding: 16,
    },
    productImage: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        marginBottom: 16,
    },
    productTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    productDescription: {
        fontSize: 16,
        color: '#8c8c8c',
        marginBottom: 16,
    },
    productPrice: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ff6600',
        marginBottom: 16,
    },
    
});
