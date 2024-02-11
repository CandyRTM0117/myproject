import { Button, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text>Tab One</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});