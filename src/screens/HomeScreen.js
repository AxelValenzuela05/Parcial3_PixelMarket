import { Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent} style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.storeName}>PixelMarket</Text>

      {/* Banner */}
      <Image
        source={{ uri: "https://www.asus.com/campaign/powered-by-asus/upload/scenario/20250320035129_pic0.jpg" }}
        style={styles.banner}
      />

      {/* Botón catálogo */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ProductList")}>
        <Text style={styles.buttonText}>Ver catálogo</Text>
      </TouchableOpacity>

      {/* Segundo banner */}
      <Image
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdtMj2oOieLZABNEig6MFsgYKoZVZEflbt_g&s" }}
        style={styles.banner}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1e1e1e", // fondo oscuro formal
  },
  scrollContent: {
    paddingBottom: 60,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginVertical: 20,
  },
  storeName: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    color: "#e0e0e0", // texto claro sobre fondo oscuro
    marginBottom: 20,
  },
  banner: {
    width: "90%",
    height: 180,
    alignSelf: "center",
    borderRadius: 12,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: "#3a3a3a", // borde gris medio
  },
  button: {
    backgroundColor: "#2c3e50", // azul petróleo sobrio
    margin: 20,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
