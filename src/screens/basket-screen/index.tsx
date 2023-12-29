import React from "react";
import { NavigationProp, useRoute } from "@react-navigation/native";
import { BasketTemplate } from "../../templates";

type RootStackBasketParamList = {
  Basket: {
    name: string;
    basket: {
      price: string;
      totalCount: number;
      dogs: { count: number; name: string; imageUrl: string; price: number }[];
    };
  };
};

type BasketScreenProps = {
  navigation: NavigationProp<RootStackBasketParamList, "Basket">;
};

const BasketScreen: React.FC<BasketScreenProps> = ({ navigation }) => {
  const route = useRoute();

  const { name, basket } = route.params as RootStackBasketParamList["Basket"];

  return (
    <BasketTemplate
      title={name.split(" ")[0]}
      basket={basket}
      handleGoBack={() => navigation.goBack()}
    />
  );
};

export { BasketScreen };
