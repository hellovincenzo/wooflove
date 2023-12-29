import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface CategoryCardProps {
  name: string;
  imageUrl: string;
  onDogCardClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  imageUrl,
  onDogCardClick,
}) => {
  return (
    <TouchableOpacity
      testID="category-card"
      className="mr-2 relative"
      onPress={onDogCardClick}
    >
      <Image
        className="h-24 w-24 rounded "
        source={{
          uri: imageUrl,
        }}
      />
      <View className="asbolute bottom-1 w-full  items-center justify-center bg-black rounded-sm p-x-1 shadow overflow-visible">
        <Text className="text-white font-extrabold">{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export { CategoryCard };
