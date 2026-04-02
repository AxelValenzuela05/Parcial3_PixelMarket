import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

import HomeScreen from "../screens/HomeScreen";
import ProductListScreen from "../screens/ProductListScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Stack para Home y productos
function HomeStack({ cart, setCart }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#2c2f33" },
        headerTintColor: "#e0e0e0",
        headerTitleStyle: { fontWeight: "700", fontSize: 20 },
        contentStyle: { backgroundColor: "#1e1e1e" },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductList" component={ProductListScreen} />
      <Stack.Screen name="ProductDetail">
        {(props) => (
          <ProductDetailScreen {...props} cart={cart} setCart={setCart} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  const [cart, setCart] = useState([]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { backgroundColor: "#2c2f33" },
          tabBarActiveTintColor: "#4a90e2",
          tabBarInactiveTintColor: "#999",
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Inicio") iconName = "home";
            else if (route.name === "Carrito") iconName = "cart";
            else if (route.name === "Perfil") iconName = "person";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Inicio">
          {() => <HomeStack cart={cart} setCart={setCart} />}
        </Tab.Screen>
        <Tab.Screen name="Carrito">
          {() => <CartScreen cart={cart} setCart={setCart} />}
        </Tab.Screen>
        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
