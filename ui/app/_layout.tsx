import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ClerkProvider } from "@clerk/clerk-expo";


const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!
if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  )
}


export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <SafeAreaProvider>
        <SafeAreaView 
          style={{ 
            flex: 1, 
            backgroundColor: "white"
          }}
        >
          <Stack screenOptions={{ headerShown: false }}></Stack>
        </SafeAreaView>
      </SafeAreaProvider>

    </ClerkProvider>
  );
}
