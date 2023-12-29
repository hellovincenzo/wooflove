import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

interface BasketProps {
  title: string;
  basket: {
    price: string;
    totalCount: number;
    dogs: { count: number; name: string; imageUrl: string; price: number }[];
  };
  handleGoBack: () => void;
}

const BasketTemplate: React.FC<BasketProps> = ({
  basket,
  title,
  handleGoBack,
}) => {
  const fees = Number(basket.price) * 0.2;
  const orderTotal = Number(fees + basket.price)
    .toFixed(2)
    .toString();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">{title}</Text>
          </View>

          <TouchableOpacity
            className="rounded-full bg-gray-100 absolute top-3 right-5"
            onPress={handleGoBack}
          >
            <Icon
              name="close-circle"
              className="w-50 h-50"
              color="#00CCBB"
              size={50}
            />
          </TouchableOpacity>
        </View>

        {!basket.dogs.length ? (
          <Text className="text-center">Your basket is empty.</Text>
        ) : (
          <>
            <ScrollView className="divide-y divide-gray-200 pt-5">
              {basket.dogs.map((dog) => (
                <View
                  className="flex-row items-center space-x-3 bg-white py-2 px-5"
                  key={dog.name}
                >
                  <Text className="text-[#00CCBB]">{dog.count} x</Text>
                  <Image
                    className="h-12 w-12 rounded-full"
                    source={{
                      uri: dog.imageUrl,
                    }}
                  />
                  <Text className="flex-1">{dog.name}</Text>
                  <Text className="text-gray-600">${dog.price}</Text>

                  <TouchableOpacity>
                    <Text className="text-[#00CCBB]">Remove</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>

            <View className="p-5 bg-white mt-5 space-y-4">
              <View className="flex-row justify-between">
                <Text className="text-gray-400">Subtotal</Text>
                <Text className="text-gray-400">${basket.price}</Text>
              </View>

              <View className="flex-row justify-between">
                <Text className="text-gray-400">WoofLove Fee</Text>
                <Text className="text-gray-400">
                  ${fees.toFixed(2).toString()}
                </Text>
              </View>

              <View className="flex-row justify-between">
                <Text>Order total</Text>
                <Text className="font-extrabold">${orderTotal.toString()}</Text>
              </View>

              <TouchableOpacity className="rounded-lg bg-[#00CCBB] p-4">
                <Text className="text-center text-white text-lg font-bold">
                  Place oder
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export { BasketTemplate };
