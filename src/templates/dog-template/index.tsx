import * as React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { NavigationProp } from "@react-navigation/native";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Basket, DogRow } from "../../components/organisims";

type RootStackBasketParamList = {
  Basket: {
    name: string;
    price: number;
    dogs: { count: number; name: string; imageUrl: string; price: number }[];
  };
};

type Breed = {
  name: string;
  imageUrl: string;
  count: number;
};

type DogTemplateProps = {
  navigation: NavigationProp<RootStackBasketParamList, "Basket">;
  name: string;
  imageUrl: string;
  categories: Breed[];
  basket: {
    price: string;
    totalCount: number;
    dogs: { count: number; name: string; imageUrl: string; price: number }[];
  };
  handleAdd: (name: string, imageUrl: string) => void;
  handleRemove: (name: string) => void;
  handleBasketPress: () => void;
};

const DogTemplate: React.FC<DogTemplateProps> = ({
  navigation,
  name,
  imageUrl,
  categories,
  basket,
  handleAdd,
  handleRemove,
  handleBasketPress,
}) => {
  return (
    <>
      <Basket basket={basket} onBasketPress={handleBasketPress} />
      <ScrollView>
        <View>
          <Image
            className="w-full h-56 bg-gray-300 p-4"
            source={{
              uri: imageUrl,
            }}
          />
          <TouchableOpacity
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-left" color="#00CCBB" size={20} />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{name}</Text>

            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Icon name="heart" color="pink" size={22} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-pink-500">4.9</Text> . {name}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Icon name="map-marker-outline" color="gray" size={22} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-gray-500">Where</Text> . Worldwide
                </Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2 pb-4">
              Whether chasing after a ball, curling up at our feet, or lending a
              comforting ear, dogs seamlessly integrate into the fabric of our
              lives. Their loyalty knows no bounds, forging an unbreakable bond
              between humans and canines.
            </Text>
          </View>

          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y-2 border-gray-100">
            <Icon name="help-circle-outline" color="gray" size={20} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a dog allergy ?
            </Text>
            <Icon name="chevron-right" color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Breed</Text>
          {categories.map(({ count, name, imageUrl }, idx) => {
            return (
              <DogRow
                key={name}
                name={name}
                count={basket.dogs[idx]?.count || 0}
                imageUrl={imageUrl}
                add={() => handleAdd(name, imageUrl)}
                remove={() => handleRemove(name)}
              />
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};

export { DogTemplate };
