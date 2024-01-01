import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { useHaptic } from "../../../hooks/use-haptic";

interface BasketProps {
  basket: {
    price: string;
    totalCount: number;
    dogs: { count: number; name: string; imageUrl: string; price: number }[];
  };

  onBasketPress: () => void;
}

const Basket: React.FC<BasketProps> = ({ basket, onBasketPress }) => {
  const impactHapticLight = useHaptic("impactLight");

  const handleOnBasketPress = () => {
    impactHapticLight();
    onBasketPress();
  };

  if (!basket.dogs.length) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        className="bg-[#00CCBB] mx-5 p-4 rounded-lg flex-row items-center space-x-1"
        onPress={handleOnBasketPress}
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
          {String(basket.totalCount)}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          {basket.price}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export { Basket };
