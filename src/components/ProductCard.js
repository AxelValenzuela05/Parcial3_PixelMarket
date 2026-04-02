import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProductCard({ name, price, image, description, navigation }) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProductDetail", {
          name,
          price,
          image,
          description,
        })
      }
    >
      <View style={styles.card}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.productName}>{name}</Text>
          <Text style={styles.productPrice}>${price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#2c2f33", // fondo oscuro formal
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    borderWidth: 1,
    borderColor: "#3a3a3a", // borde gris medio
  },
  image: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 14,
  },
  productName: {
    fontSize: 17,
    fontWeight: "700",
    color: "#e0e0e0", // texto claro
  },
  productPrice: {
    fontSize: 15,
    color: "#4a90e2", // azul corporativo para acento
    marginTop: 6,
    fontWeight: "600",
  },
});
