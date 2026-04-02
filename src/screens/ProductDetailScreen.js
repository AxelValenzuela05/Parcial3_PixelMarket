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

export default function ProductDetailScreen({ route, navigation, cart, setCart }) {
  const { name, price, image, description } = route.params;

  const addToCart = () => {
    const newProduct = { name, price, image };
    setCart([...cart, newProduct]);
    Alert.alert("Carrito", `${name} agregado al carrito`);
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#1e1e1e", // fondo oscuro formal
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
    color: "#e0e0e0" // texto claro
  },
  productPrice: { 
    fontSize: 20, 
    fontWeight: "bold", 
    color: "#4a90e2", // azul corporativo
    marginBottom: 15 
  },
  productDescription: { 
    fontSize: 16, 
    color: "#b0b0b0", // gris claro secundario
    lineHeight: 22, 
    marginBottom: 20 
  },
  button: { 
    backgroundColor: "#2c3e50", // azul petróleo sobrio
    padding: 14, 
    borderRadius: 10, 
    alignItems: "center" 
  },
  buttonText: { 
    color: "#fff", 
    fontSize: 16, 
    fontWeight: "600" 
  },
});
