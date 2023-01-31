import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Tasks from "./src/pages/Tasks"
import NewTask from "./src/pages/Newtasks"
import { StyleSheet, View } from "react-native"
import Details from "./src/pages/Details"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Task">
        <Stack.Screen
          name = "Tasks"
          component={Tasks}
          options={{headerTintColor: '#0066FF'}}
        />
        <Stack.Screen
          name = "New Task"
          component={NewTask}
          options={{headerTintColor: '#0066FF'}}
        />

        <Stack.Screen
          name = "Details"
          component={Details}
          options={{headerTintColor: '#0066FF'}}
        />
      </Stack.Navigator>

    </NavigationContainer>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0066FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
