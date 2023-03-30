import { NavigationContainer } from '@react-navigation/native';
import Router from "./src/routes/router";

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}