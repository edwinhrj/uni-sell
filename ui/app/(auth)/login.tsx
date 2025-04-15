import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "@/styles/auth";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import { Image } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  const handleGoogleSignIn = () => {
    // implement actual auth here
    router.push("/(tabs)");
  };

  return (
    <View style={styles.container}>
      {/* BRAND SECTION */}
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <Ionicons name="heart" size={32} color={COLORS.primary}></Ionicons>
        </View>
        <Text style={styles.appName}>unisell</Text>
        <Text style={styles.tagline}>buy. sell. all in nus.</Text>
      </View>

      {/* ILLUSTRATION */}
      <View style={styles.illustrationContainer}>
        <Image
          source={require("../../assets/images/marketplace.png")}
          style={styles.illustration}
          resizeMode="cover"
        />
      </View>

      {/* LOGIN SECTION */}
      <View style={styles.loginSection}>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleSignIn}
          activeOpacity={0.9}
        >
          <View style={styles.googleIconContainer}>
            <Ionicons name="logo-google" size={20} color={COLORS.surface} />
          </View>
          <Text style={styles.googleButtonText}>Sign in with Google</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By continuing, you agree to our Terms and Privacy Policy
        </Text>
      </View>
    </View>
  );
}
