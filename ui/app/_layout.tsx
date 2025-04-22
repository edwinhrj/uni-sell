import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { ClerkLoaded } from "@clerk/clerk-expo";
import InitialLayout from "./(auth)/InitialLayout";

const publishableKey = "pk_test_b2JsaWdpbmctYnVsbGRvZy03NC5jbGVyay5hY2NvdW50cy5kZXYk"
if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  )
}

export default function RootLayout() {
  return (

    // wrap everything in ClerkProvider and ClerkLoaded 
    // (basically calling a login API like firebase auth to handle 
    // user sessions)
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <ClerkLoaded>
        <SafeAreaProvider>
          <SafeAreaView 
            style={{ 
              flex: 1, 
              backgroundColor: "white"
            }}
          >
            {/* additional logic for double checking and routing a user to either 
            login or home page is in InitialLayout.tsx */}
            <InitialLayout />
          </SafeAreaView>
        </SafeAreaProvider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
