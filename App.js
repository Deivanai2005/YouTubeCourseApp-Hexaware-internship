import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import CoursePlayerScreen from "./screens/CoursePlayerScreen";

const Stack = createNativeStackNavigator();

export default function App() {

return (

<NavigationContainer>

<Stack.Navigator>

<Stack.Screen
name="Courses"
component={HomeScreen}
/>

<Stack.Screen
name="Course Player"
component={CoursePlayerScreen}
/>

</Stack.Navigator>

</NavigationContainer>

);

}