import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function ProductDetailScreen({ route, navigation, cart, setCart, favorites, setFavorites }) {
  const { name, price, image, description } = route.params;

  const addToCart = () => {
    const newProduct = { name, price, image };
    setCart([...cart, newProduct]);
    Alert.alert("Carrito", `${name} agregado al carrito`);
  };

  const addToFavorites = () => {
   const newFavorite = { name, price, image };

  // Verificar si ya existe en favoritos
    const exists = favorites.some(
      (item) => item.name === newFavorite.name && item.price === newFavorite.price
    );

    if (exists) {
    Alert.alert("Favoritos", `${name} ya está en favoritos`);
    } else {
      setFavorites([...favorites, newFavorite]);
      Alert.alert("Favoritos", `${name} agregado a favoritos`);
    }
  };


  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: image }} style={styles.productImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productPrice}>${price}</Text>
        <Text style={styles.productDescription}>{description}</Text>

        <TouchableOpacity style={styles.button} onPress={addToCart}>
          <Text style={styles.buttonText}>Agregar al carrito</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.favoriteButton} onPress={addToFavorites}>
          <Text style={styles.favoriteButtonText}>Agregar a favoritos</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#1e1e1e", 
    padding: 16 
  },
  productImage: { 
    width: "100%", 
    height: 250, 
    borderRadius: 12, 
    marginBottom: 20 
  },
  infoContainer: { padding: 10 },
  productName: { 
    fontSize: 24, 
    fontWeight: "700", 
    marginBottom: 10, 
    color: "#e0e0e0" 
  },
  productPrice: { 
    fontSize: 20, 
    fontWeight: "bold", 
    color: "#4a90e2", 
    marginBottom: 15 
  },
  productDescription: { 
    fontSize: 16, 
    color: "#b0b0b0", 
    lineHeight: 22, 
    marginBottom: 20 
  },
  button: { 
    backgroundColor: "#2c3e50", 
    padding: 14, 
    borderRadius: 10, 
    alignItems: "center",
    marginBottom: 12
  },
  buttonText: { 
    color: "#fff", 
    fontSize: 16, 
    fontWeight: "600" 
  },
  favoriteButton: {
    backgroundColor: "#34495e", // gris azulado sobrio
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  favoriteButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
