import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../../styles/auth";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>hello from index</Text>
      <TouchableOpacity onPress={() => alert("nigger")}>
        <Text>press me </Text>
      </TouchableOpacity>
      <Link href={"/notifications"}>visit notifications screen</Link>
    </View>
  );
}
