import React, { useState } from "react";

import { NavigationProp, useRoute } from "@react-navigation/native";

import { DogTemplate } from "../../templates";

type RootStackDogParamList = {
  Dog: {
    name: string;
    imageUrl: string;
    subBreed: {
      count: number;
      name: string;
      imageUrl: string;
      price: number;
    }[];
  };
};

type RootStackBasketParamList = {
  Basket: {
    name: string;
    basket: {
      price: number;
      totalCount: number;
      dogs: { count: number; name: string; imageUrl: string; price: number }[];
    };
  };
};

type DogScreenProps = {
  navigation: NavigationProp<RootStackBasketParamList, "Basket">;
};

const DogScreen: React.FC<DogScreenProps> = ({ navigation }) => {
  const route = useRoute();

  const [basket, setBasket] = useState<{
    price: number;
    totalCount: number;
    dogs: { count: number; name: string; imageUrl: string; price: number }[];
  }>({
    price: 0.0,
    totalCount: 0,
    dogs: [],
  });

  const { name, imageUrl, subBreed } =
    route.params as RootStackDogParamList["Dog"];

  const onAddPress = (name: string, imageUrl: string) => {
    const existingCartItem = basket.dogs.find(
      (dog) => dog.name.toLowerCase() === name.toLowerCase()
    );

    let updatedDogs;

    if (existingCartItem) {
      updatedDogs = basket.dogs.map((dog) =>
        dog.name.toLowerCase() === name.toLowerCase()
          ? { ...dog, count: dog.count + 1 }
          : dog
      );
    } else {
      updatedDogs = [
        ...basket.dogs,
        { count: 1, name, imageUrl, price: 99.99 },
      ];
    }

    setBasket({
      ...basket,
      price: Number((basket.price + 99.99).toFixed(2)),
      totalCount: basket.totalCount + 1,
      dogs: updatedDogs,
    });
  };

  const onRemovePress = (name: string) => {
    const existingCartItem = basket.dogs.find(
      (dog) => dog.name.toLowerCase() === name.toLowerCase()
    );

    let updatedDogs;

    if (existingCartItem && existingCartItem.count === 1) {
      updatedDogs = basket.dogs.filter(
        (dog) => dog.name.toLowerCase() !== name.toLowerCase()
      );
    } else if (existingCartItem) {
      updatedDogs = basket.dogs.map((dog) =>
        dog.name.toLowerCase() === name.toLowerCase()
          ? { ...dog, count: dog.count - 1 }
          : dog
      );
    }
    setBasket({
      ...basket,
      price: Number((basket.price - 99.99).toFixed(2)),
      totalCount: basket.totalCount - 1,
      dogs: updatedDogs || [],
    });
  };

  return (
    <DogTemplate
      navigation={navigation}
      name={name}
      imageUrl={imageUrl}
      categories={subBreed}
      basket={{
        price: `$${String(basket.price.toFixed(2))}`,
        totalCount: basket.totalCount,
        dogs: basket.dogs,
      }}
      handleAdd={(name, imageUrl) => onAddPress(name, imageUrl)}
      handleRemove={(name) => onRemovePress(name)}
      handleBasketPress={() => navigation.navigate("Basket", { basket, name })}
    />
  );
};

export { DogScreen };
