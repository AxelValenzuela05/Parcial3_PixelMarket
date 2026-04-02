import { View, Text, StyleSheet, Image } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/profileR.png")}
        style={styles.avatar}
      />
      <Text style={styles.name}>Isra</Text>
      <Text style={styles.email}>AxelValenzuela228@gmail.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e", // fondo oscuro formal
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#e0e0e0",
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: "#b0b0b0",
  },
});
