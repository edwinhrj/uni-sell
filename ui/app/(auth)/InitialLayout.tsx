import { useEffect } from "react"
import { useAuth, useSSO } from "@clerk/clerk-expo"
import { useRouter, useSegments } from "expo-router";
import { Stack } from "expo-router"

export default function InitialLayout() {
// logic for checking if user is authenticated and 
// routes users to either home/login page 
  const {isLoaded, isSignedIn} = useAuth()
  const segments = useSegments()
  const router = useRouter()
  useEffect(() => {
    if (!isLoaded) return       

    const inAuthScreen = segments[0] === "(auth)"

    // if user is not signed in and is not in the auth (login)screen, 
    // route to login
    if (!isSignedIn && !inAuthScreen) {
      router.replace("/(auth)/login")

    // if user is signed in and is in the auth (login)screen, 
    // route to home/discover
    } else if (isSignedIn && inAuthScreen) {
      router.replace("/(home)/discover")
    }
  }, [isLoaded, isSignedIn, segments])

  if (!isLoaded) return null;

  return <Stack screenOptions={{headerShown: false}} />
}