import { View, Text, TouchableOpacity} from "react-native";
import React from "react";
import { COLORS } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "@/styles/auth";
import { useRouter } from "expo-router";

export default function Profile() {
  const router = useRouter();
  const handleGoogleSignOut = () => {
    return router.push("/(auth)/login");
  }
  return (
    <View>
      <Text>Profile screen</Text>
      <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleSignOut}
          activeOpacity={0.9}
        >
          <View style={styles.googleIconContainer}>
            <Ionicons name="logo-google" size={20} color={COLORS.surface} />
          </View>
          <Text style={styles.googleButtonText}>Sign out</Text>
        </TouchableOpacity>
    </View>
  );
}
