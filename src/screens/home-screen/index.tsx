import React, { useState, useEffect } from "react";

import { NavigationProp } from "@react-navigation/native";

import { HomeTemplate } from "../../templates";

import { DogAPI } from "../../api/DogAPI";

type Breed = {
  name: string;
  imageUrl: string;
};

type RootStackParamList = {
  Dog: {
    name: string;
    imageUrl: string;
    subBreed: Breed[];
  };
};

type HomeScreenProps = {
  navigation: NavigationProp<RootStackParamList, "Dog">;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [search, setSearch] = useState<string>("");
  const [dogs, setDogs] = useState<
    {
      name: string;
      imageUrl: string;
    }[]
  >([]);
  const [subBreeds, setSubBreeds] = useState<
    {
      name: string;
      imageUrl: string;
      short_description: string;
    }[][]
  >([]);

  const capitalize = (str: string) =>
    str && str[0].toUpperCase() + str.slice(1);

  const fetchCategories = async () => {
    try {
      const data = await DogAPI.getAll();

      return data.message;
    } catch (error) {
      console.error(error);
    }
  };

  const updateInputValue = (text: string) => {
    setSearch(text);
  };

  const fetchRandomImage = async (breed: string) => {
    try {
      const data = await DogAPI.getBreedImages({ breed });

      return data.message[0];
    } catch (error) {
      console.error(error);
    }
  };

  const buildCategories = async () => {
    const breeds = await fetchCategories();

    if (!breeds) return;

    const subBreedList = await Promise.all(
      Object.keys(breeds)
        .filter((breed) => breeds[breed].length >= 1)
        .map(async (dog) => {
          const result = await Promise.all(
            breeds[dog].map(async (breed) => {
              const name = `${capitalize(dog)} ${capitalize(breed)}`;
              const imageUrl = (await fetchRandomImage(
                `${dog}/${breed}`
              )) as string;
              const short_description = `Show more ${name}`;
              return {
                name,
                imageUrl,
                short_description,
              };
            })
          );
          return result;
        })
    );

    setSubBreeds([...subBreedList.sort().reverse()]);

    const dogList = await Promise.all(
      Object.keys(breeds).map(async (breed) => {
        const imageUrl = (await fetchRandomImage(breed)) as string;
        return {
          name: breed,
          imageUrl,
        };
      })
    );

    setDogs([...dogList]);
  };

  useEffect(() => {
    buildCategories();
  }, []);

  const filteredDogs = dogs.filter((dog) =>
    dog.name.toLowerCase().includes(search.toLocaleLowerCase().trim())
  );

  const filteredSubDogs = () => {
    return subBreeds
      .map((dogs) => {
        return dogs.filter((dog) =>
          dog.name.toLowerCase().includes(search.toLocaleLowerCase().trim())
        );
      })
      .filter((dogs) => dogs.length >= 1);
  };

  return (
    <HomeTemplate
      title="Welcome to"
      dogImage={""}
      appName={"WoofLove"}
      categories={filteredDogs}
      subBreeds={filteredSubDogs()}
      search={search}
      onSearch={updateInputValue}
      onCardClick={(name, imageUrl, subBreed) =>
        navigation.navigate("Dog", { name, imageUrl, subBreed })
      }
      onBasketPress={() => navigation.navigate("Basket")}
    />
  );
};

export { HomeScreen };
