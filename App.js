import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";

export default function App() {
  return (
    <View>
      <ThemeProvider theme={theme}>

      </ThemeProvider>
      <StatusBar style="auto" />
    </View>
  );
}
