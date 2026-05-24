import { BANNERS } from "@/assets/assets";
import { useRouter } from "expo-router";
import React, { useRef } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const width = Dimensions.get("window")?.width;
const ITEM_WIDTH = width - 32;
const Banner = () => {
  const router = useRouter();
  const [activeBanner, setActiveBanner] = React.useState(0);
  const scrollRef = useRef<ScrollView>(null);
  return (
    <View className="mb-6">
      <ScrollView
        ref={scrollRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        className="w-full h-48 rounded-xl"
        scrollEventThrottle={16}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x / ITEM_WIDTH,
          );
          setActiveBanner(index);
        }}
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
              <TouchableOpacity
                onPress={() => router.push(`/`)}
                className="mt-2 bg-white px-4 py-2 rounded-full self-start"
              >
                <Text className="text-primary font-bold text-xs">Get Now</Text>
              </TouchableOpacity>
            </View>
            <View className="absolute inset-0 bg-black/40" />
          </View>
        ))}
      </ScrollView>
      <View className="flex-row justify-center mt-3 gap-2">
        {BANNERS?.map((_, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => {
              setActiveBanner(index);

              scrollRef.current?.scrollTo({
                x: index * (width - 32),
                animated: true,
              });
            }}
            style={{
              width: index === activeBanner ? 24 : 8,
              height: 8,
              borderRadius: 999,
              backgroundColor: index === activeBanner ? "#000" : "#D1D5DB",
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default Banner;
