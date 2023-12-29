import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeScreen, DogScreen, BasketScreen } from "./src/screens";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dog"
          component={DogScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Basket"
          component={BasketScreen}
          options={{ headerShown: false, presentation: "modal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
