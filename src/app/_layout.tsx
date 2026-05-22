import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";
const RootLayout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack />
    </SafeAreaView>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
