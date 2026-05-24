import { CATEGORIES } from "@/assets/constants";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  const router = useRouter();
  const categories = [{ id: "all", name: "All", icon: "grid" }, ...CATEGORIES];
  return (
    <View className="mb-6">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-xl font-bold text-primary">Categories</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories?.map((category) => (
          <CategoryItem
            key={category?.id}
            item={category}
            isSelected={false}
            onPress={() => {
              router.push({
                pathname: "/shop",
                params: {
                  category: category?.id === "all" ? "" : category?.name,
                },
              });
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
