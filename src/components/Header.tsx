import { COLORS } from "@/assets/constants";
import { HeaderProps } from "@/assets/constants/types";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
const Header = ({
  showBack,
  showCart,
  showLogo,
  showMenu,
  showSearch,
  title,
}: HeaderProps) => {
  const router = useRouter();
  return (
    <View className="flex-row items-center justify-between px-4 py-3 bg-white">
      <View className="flex-row items-center flex-1">
        {showBack && (
          <TouchableOpacity onPress={() => router.back()} className="mr-3">
            <Ionicons name="arrow-back" size={24} color={COLORS.primary} />
          </TouchableOpacity>
        )}
      </View>
      <View className=""></View>
    </View>
  );
};

export default Header;
