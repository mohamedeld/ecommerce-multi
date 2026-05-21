import { BANNERS } from "@/assets/assets";
import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const width = Dimensions.get("window")?.width;
const Banner = () => {
  const router = useRouter();
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
      className="w-full h-48 rounded-xl"
      scrollEventThrottle={16}
    >
      {BANNERS?.map((banner, index) => (
        <View
          key={index}
          className="relative w-full h-48 bg-gray-200 overflow-hidden"
          style={{ width: width - 32 }}
        >
          <Image
            source={{ uri: banner?.image }}
            alt={banner?.title}
            className="w-full h-full"
            resizeMode="cover"
          />
          <View className="absolute bottom-4 left-4 z-10">
            <Text className="text-white text-2xl font-bold">
              {banner?.title}
            </Text>
            <Text className="text-white text-sm font-medium">
              {banner?.subtitle}
            </Text>
            <TouchableOpacity className="mt-2 bg-white px-4 py-2 rounded-full self-start">
              <Text className="text-primary font-bold text-xs">Get Now</Text>
            </TouchableOpacity>
          </View>
          <View className="absolute inset-0 bg-black/40" />
        </View>
      ))}
    </ScrollView>
  );
};

export default Banner;
