import { dummyProducts } from "@/assets/assets";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const router = useRouter();
  const products = dummyProducts;
  return (
    <View className="mb-8">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-xl font-bold text-primary">Popular</Text>
        <TouchableOpacity onPress={() => router.push("/shop")}>
          <Text className="text-secondary text-sm">See All</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row flex-wrap justify-between">
        {products?.slice(0, 4)?.map((product) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </View>
    </View>
  );
};

export default ProductList;
