import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { ClerkLoaded } from "@clerk/clerk-expo";

export default function RootLayout() {
  return (
    

    // wrap everything in ClerkProvider and ClerkLoaded 
    // (basically calling a login API like firebase auth to handle 
    // user sessions)
        <SafeAreaProvider>
          <SafeAreaView 
            style={{ 
              flex: 1, 
              backgroundColor: "white"
            }}
          >
            {/* additinal logic for double checking and routing a user to either 
            login or home page is in InitialLayout.tsx */}
            <Stack screenOptions={{headerShown: false, contentStyle: {backgroundColor: "white"}}} />
          </SafeAreaView>
        </SafeAreaProvider>
  );
}
