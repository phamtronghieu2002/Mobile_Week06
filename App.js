import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Image, Button, Pressable, TextInput, FlatList, ScrollView } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ToDoScreen1 from "./src/screens/ToDoScreen1";
import ToDoScreen2 from "./src/screens/TodoScreen2";
import ToDoScreen3 from "./src/screens/TodoScreen3";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen options={{ headerShown: false }} name="ToDoScreen1" component={ToDoScreen1} />
        <Stack.Screen options={{headerShown:false}} name="ToDoScreen2" component={ToDoScreen2} />
        <Stack.Screen options={{headerShown:false}} name="ToDoScreen3" component={ToDoScreen3} />

      </Stack.Navigator>
    </NavigationContainer>

  );

}
