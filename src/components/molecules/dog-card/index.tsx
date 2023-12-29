import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

interface DogCardProps {
  imageUrl: string;
  name: string;
  short_description: string;
  onDogCardClick: () => void;
}

const DogCard: React.FC<DogCardProps> = ({
  imageUrl,
  name,
  short_description,
  onDogCardClick,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow" onPress={onDogCardClick}>
      <Image
        source={{
          uri: imageUrl,
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4 space-y-1">
        <Text className="font-bold pt-2 text-lg">{name}</Text>
        <Text className="text-sm text-gray-500">{short_description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export { DogCard };
