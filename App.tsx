import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/view/navigatiors/AuthNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
