import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "@/styles/auth";

export default function Login() {
  const router = useRouter();

  const handleGoogleSignIn = () => {
    // implement actual auth here
    router.push("/(tabs)/discover");
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white"}}>
      {/* BRAND SECTION */}
      <View style={styles.brandSection}>
        <Ionicons name="heart" size={32} color={COLORS.primary} />
        <Text style={styles.appName}>unisell</Text>
        <Text style={styles.tagline}>buy. sell. all in nus.</Text>
        <Image
      source={require("../../assets/images/marketplace.png") }
      style={styles.illustration} resizeMode="cover" />
      </View>

      {/* ILLUSTRATION */}
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