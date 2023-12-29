import { Image, View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

interface DogRowProps {
  name: string;
  imageUrl: string;
  count: number;
  add: () => void;
  remove: () => void;
}

const DogRow: React.FC<DogRowProps> = ({
  count = 0,
  name,
  imageUrl,
  add,
  remove,
}) => {
  const [isPressed, setPressed] = useState<boolean>(false);

  const handleAdd = () => {
    add();
  };

  const handleRemove = () => {
    if (count === 0) return;
    remove();
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setPressed(!isPressed)}
        className={`flex-row bg-white border border-gray-200 p-4 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-1 pr-2">
          <Text className="text-lg mg-1">{name}</Text>
          <Text className="text-gray-400 mt-2">$99.99</Text>
        </View>

        <View>
          <Image
            style={{
              borderWidth: 1,
              borderColor: "#F3F3F4",
            }}
            source={{ uri: imageUrl }}
            className="h-20 w-20 bg-gray-400 p-4"
          />
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              className={count === 0 ? "opacity-30" : "opacity-100"}
              onPress={handleRemove}
              disabled={count === 0}
            >
              <Icon
                name="minus-circle"
                color={!count ? "gray" : "#00CCBB"}
                size={40}
              />
            </TouchableOpacity>
            <Text>{count}</Text>

            <TouchableOpacity onPress={handleAdd}>
              <Icon name="plus-circle" color="#00CCBB" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export { DogRow };
