import { COLORS } from "@/assets/constants";
import { HeaderProps } from "@/assets/constants/types";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Header = ({
  showBack,
  showCart,
  showLogo,
  showMenu,
  showSearch,
  title,
}: HeaderProps) => {
  const router = useRouter();
  const { itemCount } = { itemCount: 6 };

  return (
    <View className="flex-row items-center justify-between bg-white px-4 py-3">
      {/* Left Side */}

      <View className="flex-row items-center w-[60px]">
        {showBack && (
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color={COLORS.primary} />
          </TouchableOpacity>
        )}

        {showMenu && (
          <TouchableOpacity>
            <Ionicons name="menu-outline" size={28} color={COLORS.primary} />
          </TouchableOpacity>
        )}
      </View>

      {/* Center */}
      <View className="flex-1 items-center justify-center">
        {showLogo ? (
          <Image
            source={require("@/assets/logo.png")}
            resizeMode="contain"
            style={{
              width: 120,
              height: 30,
            }}
          />
        ) : (
          title && (
            <Text className="text-xl font-bold text-primary">{title}</Text>
          )
        )}
      </View>

      {/* Right Side */}
      <View className="flex-row items-center justify-end gap-4 w-[60px]">
        {showSearch && (
          <TouchableOpacity>
            <Ionicons name="search-outline" size={24} color={COLORS.primary} />
          </TouchableOpacity>
        )}

        {showCart && (
          <TouchableOpacity onPress={() => router.push("/(tabs)/cart")}>
            <View className="relative">
              <Ionicons name="bag-outline" size={24} color={COLORS.primary} />

              <View className="absolute -top-1 -right-1 bg-accent w-4 h-4 rounded-full items-center justify-center">
                <Text className="text-white text-[10px] font-bold">
                  {itemCount}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
