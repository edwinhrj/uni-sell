import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function Messages() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white"}}>
      <Text>List of chat interfaces here</Text>
      
      <View style={{ marginTop: 20, gap: 10 }}>
        <TouchableOpacity 
          style={{ padding: 15, backgroundColor: '#007AFF', borderRadius: 8 }}
          onPress={() => router.push('/(messages)/requests')}
        >
          <Text style={{ color: 'white' }}>Requests</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={{ padding: 15, backgroundColor: '#007AFF', borderRadius: 8 }}
          onPress={() => router.push('/(messages)/friends')}
        >
          <Text style={{ color: 'white' }}>Friends</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={{ padding: 15, backgroundColor: '#007AFF', borderRadius: 8 }}
          onPress={() => router.push('/(messages)/chat')}
        >
          <Text style={{ color: 'white' }}>Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
