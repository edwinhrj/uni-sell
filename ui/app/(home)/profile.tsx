import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "@/styles/auth";
import { useRouter } from "expo-router";
import { useClerk } from "@clerk/clerk-expo";

export default function Profile() {
  const router = useRouter();
  const { signOut } = useClerk(); // Get signOut function from Clerk

  const handleGoogleSignOut = async () => {
    try {
      await signOut(); // Perform sign-out action
      router.replace("/(auth)/login"); // Redirect to login page
    } catch (error) {
      console.error("Error signing out:", error); // Handle any errors during sign-out
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
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
