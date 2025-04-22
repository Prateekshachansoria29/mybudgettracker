import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ExpenseListScreen from "./screens/ExpenseListScreen";
import AddExpenseScreen from "./screens/AddExpenseScreen";
import EditExpenseScreen from "./screens/EditExpenseScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Expense List" component={ExpenseListScreen} />
        <Stack.Screen name="Add Expense" component={AddExpenseScreen} />
        <Stack.Screen name="Edit Expense" component={EditExpenseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

