import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { DogCard } from "../../molecules";

interface SubBreedRowProps {
  title: string;
  description: string;
  dogs: {
    name: string;
    imageUrl: string;
    short_description: string;
  }[];
  handleDogCardClick: (name: string, imageUrl: string) => void;
}

const SubBreedRow: React.FC<SubBreedRowProps> = ({
  title,
  description,
  dogs,
  handleDogCardClick,
}) => {
  return (
    <View>
      <View className={"mt-4 flex-row items-center justify-between px-4"}>
        <Text className={"font-bold text-lg"}>{title}</Text>
        <Icon name="arrow-right" size={20} color={"#00CCB5"} />
      </View>
      <Text className={"text-xs text-gray-500 px-4"}>{description}</Text>

      <FlatList
        data={dogs}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <DogCard
            imageUrl={item.imageUrl}
            name={item.name}
            short_description={item.short_description}
            onDogCardClick={() => handleDogCardClick(item.name, item.imageUrl)}
          />
        )}
        contentContainerStyle={styles.scrollView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 15,
  },
});

export { SubBreedRow };
