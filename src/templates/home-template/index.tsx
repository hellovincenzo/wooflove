import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import Icon from "@expo/vector-icons//MaterialCommunityIcons";

import { Categories, SubBreedRow } from "../../components/organisims";

type Breed = {
  name: string;
  imageUrl: string;
};

type BreedWithDescription = Breed & {
  short_description: string;
};

type BreedList = BreedWithDescription[];

export interface HomeTemplateProps {
  title: string;
  categories: Breed[];
  subBreeds: BreedList[];
  search: string;
  dogImage: string;
  appName: string;
  onCardClick: (name: string, imageUrl: string, breeds: Breed[]) => void;
  onSearch: (text: string) => void;
  onBasketPress: () => void;
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({
  title,
  categories,
  subBreeds,
  search,
  appName,
  onSearch,
  onCardClick,
}) => {
  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          source={{
            uri: "https://dog.ceo/img/dog-api-logo.sv",
          }}
        />
        <View className="flex-1">
          <Text className="font-bole text-gray-400 text-xs">{title}</Text>
          <Text className="font-bold text-xl">{appName}</Text>
        </View>
      </View>

      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1  bg-gray-200 space-x-2 p-3">
          <Icon name="magnify" color="gray" size={20} />
          <TextInput
            value={search}
            onChangeText={(text) => onSearch(text)}
            placeholder="Search by breed name"
            keyboardType="default"
          />
        </View>
        <Icon name="tune-vertical" color={"#00CCB5"} size={20} />
      </View>

      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={styles.scrollView}
      >
        {categories && (
          <Categories
            categories={categories}
            handleDogCardClick={(name, imageUrl) =>
              onCardClick(name, imageUrl, [{ name, imageUrl }])
            }
          />
        )}

        {subBreeds.map((subBreed, idx) => {
          const title = subBreed[0].name.split(" ")[0];
          return (
            <SubBreedRow
              key={idx}
              dogs={subBreed}
              title={title}
              description={`Check out more pictures of ${title}`}
              handleDogCardClick={(name, imageUrl) =>
                onCardClick(name, imageUrl, subBreed)
              }
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingBottom: 100,
  },
});

export { HomeTemplate };
