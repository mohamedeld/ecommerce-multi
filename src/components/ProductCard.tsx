import { COLORS } from "@/assets/constants";
import { ProductCardProps } from "@/assets/constants/types";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
const ProductCard = ({ product }: ProductCardProps) => {
  const isLiked = false;
  return (
    <Link href={`/product/${product?._id}`} asChild={true}>
      <TouchableOpacity className="w-[48%] mb-4 bg-white rounded-lg overflow-hidden">
        <View className="relative w-full  h-56 bg-gray-100 ">
          <Image
            source={{ uri: product?.images?.at(0) }}
            className="w-full h-full"
            resizeMode="cover"
          />
          <TouchableOpacity
            className="absolute top-2 right-2 z-10 p-2 bg-white rounded-full shadow-sm"
            onPress={(e) => {
              e.stopPropagation();
            }}
          >
            <Ionicons
              name={isLiked ? "heart" : "heart-outline"}
              size={20}
              color={isLiked ? COLORS.accent : COLORS.primary}
            />
          </TouchableOpacity>
          {product?.isFeatured && (
            <View className="absolute to-2 left-2 bg-black px-2 py-1 rounded">
              <Text className="text-white text-xs font-bold uppercase">
                Featured
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default ProductCard;
