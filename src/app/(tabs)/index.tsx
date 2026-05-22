import Banner from "@/components/Banner";
import Header from "@/components/Header";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const HomeTab = () => {
  return (
    <View className="flex-1">
      <Header showMenu={true} showCart={true} showLogo={true} title="forever" />
      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        <Banner />
      </ScrollView>
    </View>
  );
};

export default HomeTab;

const styles = StyleSheet.create({});
