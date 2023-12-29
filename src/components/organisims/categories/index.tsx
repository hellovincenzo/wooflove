import React from "react";
import { ScrollView, StyleSheet } from "react-native";

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
    <ScrollView
      contentContainerStyle={styles.scrollView}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories.map(({ name, imageUrl }) => {
        const title = name[0].toUpperCase() + name.slice(1);
        return (
          <CategoryCard
            key={name}
            name={title}
            imageUrl={imageUrl}
            onDogCardClick={() => handleDogCardClick(title, imageUrl)}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 10,
    paddingHorizontal: 15,
  },
});

export { Categories };
