import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";

export default function FavoritesScreen({ favorites, setFavorites }) {
  const removeFavorite = (index) => {
    const updatedFavorites = favorites.filter((_, i) => i !== index);
    setFavorites(updatedFavorites);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favoritos</Text>

      {favorites.length === 0 ? (
        <Text style={styles.text}>Aquí aparecerán tus productos favoritos.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.productRow}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>${item.price}</Text>
              </View>
              {/* Botón eliminar */}
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => removeFavorite(index)}
              >
                <Text style={styles.deleteButtonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#e0e0e0",
    marginBottom: 12,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    color: "#b0b0b0",
    textAlign: "center",
    marginTop: 20,
  },
  productRow: {
    flexDirection: "row",
    backgroundColor: "#2c2f33",
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#3a3a3a",
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  productInfo: { flex: 1 },
  productName: { fontSize: 16, fontWeight: "600", color: "#e0e0e0" },
  productPrice: { fontSize: 14, color: "#4a90e2", marginTop: 4 },
  deleteButton: {
    backgroundColor: "#c0392b", // rojo sobrio
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});
