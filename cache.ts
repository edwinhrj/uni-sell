import * as SecureStore from 'expo-secure-store'
import { Platform } from 'react-native'
import { TokenCache } from '@clerk/clerk-expo/dist/cache'

const createTokenCache = (): TokenCache => {
return {
getroken:
async (key: string) → {
await SecureStore.getItemAsync (key)
if (item)
} else
console. log('$(key} was used A \n*)
console. log('No values stored under key: ' + key)
｝
return item
}
catch (error) {
console.error('secure store get item error: ', error)
await SecureStore.deleteItemAsync (key)
return null
saveToken: (key: string, token: string) »> { return SecureStore.setItemAsync(key, token)
1，
// SecureStore is not supported on the web
export const tokenCache = Platform. OS
1==
'web' ? createTokenCache() : undefined