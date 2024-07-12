import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { CartContext } from '../Components/CartContext';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ProductDetailScreen({ route, navigation }) {
    const product = route?.params?.product;
    const { addToCart } = useContext(CartContext);
    if (!product) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Icon style={{ marginHorizontal: 10 }} name='arrow-left' size={30} onPress={() => navigation.goBack()} />
                    <Text style={styles.headerTitle}>Product Details</Text>
                </View>
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>No product details available.</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.goBackText}>Go Back</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }

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
            <TouchableOpacity style={styles.addToCartButton} onPress={() => addToCart(product)}>
                <Icon name="plus" size={22} color="white" style={styles.buttonIcon} />
                <Text style={styles.buttonText}>ADD TO CART</Text>
                <Icon name="heart" size={22} color="white" style={styles.buttonIcon2} />
            </TouchableOpacity>
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
    addToCartButton: {
        flexDirection: 'row',
        backgroundColor: 'black',
        padding: 12,
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    buttonText: {
        color: 'white',
        fontSize: 22,
        marginHorizontal: 10,
        left:10,
    },
    buttonIcon: {
        marginHorizontal: 5,
        left:10,
    },
    buttonIcon2: {
        marginHorizontal: 5,
        left:150,
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
        color: 'red',
    },
    goBackText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
        color: 'blue',
    },
});
