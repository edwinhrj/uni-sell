import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../../styles/auth";
import { Link } from "expo-router";
import React from "react";

export default function Index() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => alert("pressed")}>
        <Text>press me </Text>
      </TouchableOpacity>
      <Text>Feed</Text>
    </View>
  );
}
