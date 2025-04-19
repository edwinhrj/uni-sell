import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../../styles/auth";
import { Link } from "expo-router";
import React from "react";

export default function Chat() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white"}}>
      <Text>chat interface with friends</Text>
    </View>
  );
}