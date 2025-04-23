import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { useRouter, useSegments } from "expo-router";
import { styles } from "@/styles/auth";
import { useAuth, useSSO } from "@clerk/clerk-expo";

export default function Login() {
  const router = useRouter();
  const { startSSOFlow } = useSSO();

  // handle google sign in, with clerk's startSSOFlow function.
  // after sign in, the user is redirected to the home/discover
  // page.
  const handleGoogleSignIn = async () => {
    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy: "oauth_google",
      });
      if (setActive && createdSessionId) {
        setActive({ session: createdSessionId });
        router.replace("/(home)/discover");
      }
    } catch (error) {
      console.error("OAuth error:", error);
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
      {/* BRAND SECTION */}
      <View style={styles.brandSection}>
        <Ionicons name="heart" size={32} color={COLORS.primary} />
        <Text style={styles.appName}>unisell</Text>
        <Text style={styles.tagline}>buy. sell. all in nus.</Text>
        <Image
          source={require("../../assets/images/marketplace.png")}
          style={styles.illustration}
          resizeMode="cover"
        />
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
