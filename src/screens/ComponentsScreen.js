import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  let greeting = "Hi There!";
  return (
    <View>
      <Text style={styles.textStyle}>This is ComponentsScreen</Text>
      <Text>{greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
