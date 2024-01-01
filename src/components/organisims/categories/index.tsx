import React from "react";
import { FlatList, StyleSheet } from "react-native";

import { CategoryCard } from "../../molecules";

export interface CategoriesProps {
  categories: {
    name: string;
    imageUrl: string;
  }[];
  handleDogCardClick: (name: string, imageUrl: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  categories,
  handleDogCardClick,
}) => {
  return (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollView}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => {
        const title = item.name[0].toUpperCase() + item.name.slice(1);
        return (
          <CategoryCard
            name={title}
            imageUrl={item.imageUrl}
            onDogCardClick={() => handleDogCardClick(title, item.imageUrl)}
          />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 10,
    paddingHorizontal: 15,
  },
});

export { Categories };
