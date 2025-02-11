import LoginView from "@/components/LoginView";
import SignupView from "@/components/SignupView";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginView} />
    <Stack.Screen name="Signup" component={SignupView} />
  </Stack.Navigator>
);
}
