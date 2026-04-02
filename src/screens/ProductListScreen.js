import { View, Text, StyleSheet, FlatList } from "react-native";
import ProductCard from "../components/ProductCard";

export default function ProductListScreen({ navigation }) {
  const products = [
    {
      id: 1,
      name: "Audífonos Bluetooth",
      price: 499,
      image: "https://pcdomino.com/cdn/shop/products/768afe333a19b38b0ac9d52f24ff9dfd_1200x1200.png?v=1620393463",
      description: "Audífonos inalámbricos con sonido envolvente y batería de larga duración.",
    },
    {
      id: 2,
      name: "Teclado Mecánico",
      price: 899,
      image: "https://ocelot.com.mx/wp-content/uploads/2023/03/sw_fondo_oscuro_ok_tkl2_1_1.jpg",
      description: "Teclado mecánico retroiluminado ideal para gamers y programadores.",
    },
    {
      id: 3,
      name: "Mouse Gamer",
      price: 350,
      image: "https://ajazzbrand.com/cdn/shop/files/06.jpg?v=1766200697",
      description: "Mouse ergonómico con alta precisión y luces RGB.",
    },
    {
      id: 4,
      name: "Smartwatch",
      price: 1200,
      image: "https://fralugio.com/cdn/shop/files/Smartwatch_M9_Pro_Max_with_1GB_NFC.jpg?v=1740170646",
      description: "Reloj inteligente con monitoreo de salud y notificaciones en tiempo real.",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo de productos</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            name={item.name}
            price={item.price}
            image={item.image}
            description={item.description}
            navigation={navigation}
          />
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e", // fondo oscuro formal
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#e0e0e0", // texto claro para contraste
    marginBottom: 18,
    textAlign: "center",
  },
  listContainer: {
    paddingBottom: 20,
  },
});
