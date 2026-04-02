import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function CartScreen({ cart, setCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Carrito de compras</Text>

      <FlatList
        data={cart}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.productRow}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Tu carrito está vacío</Text>}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      <Text style={styles.total}>Total: ${total}</Text>

      <TouchableOpacity style={styles.clearButton} onPress={() => setCart([])}>
        <Text style={styles.clearButtonText}>Vaciar carrito</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#1e1e1e", 
    padding: 16 
  },
  title: { 
    fontSize: 26, 
    fontWeight: "700", 
    color: "#e0e0e0", 
    marginBottom: 18,
    textAlign: "center",
    marginTop: 10, // espacio extra debajo del notch
  },
  listContainer: { paddingBottom: 20 },
  productRow: {
    flexDirection: "row",
    backgroundColor: "#2c2f33",
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    alignItems: "center",
    elevation: 2,
    borderWidth: 1,
    borderColor: "#3a3a3a",
  },
  productImage: { width: 80, height: 80, borderRadius: 8, marginRight: 12 },
  productInfo: { flex: 1 },
  productName: { fontSize: 16, fontWeight: "600", color: "#e0e0e0" },
  productPrice: { fontSize: 14, color: "#4a90e2", marginTop: 4 },
  empty: { textAlign: "center", color: "#999", marginTop: 20, fontSize: 16 },
  total: { fontSize: 20, fontWeight: "700", marginTop: 20, textAlign: "right", color: "#e0e0e0" },
  clearButton: {
    backgroundColor: "#c0392b",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  clearButtonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
