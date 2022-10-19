import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "../screens/AuthScreen";
import { useSelector } from "react-redux";
import ListScreen, {
  ScreenOptions as ListScreenOptions,
} from "../screens/ListScreen";
import EmployeeAddScreen, {
  ScreenOptions as EmployeeAddScreenOptions,
} from "../screens/EmployeeAddScreen";
import EmployeeListScreen, {
  ScreenOptions as EmployeeListScreenOptions,
} from "../screens/EmployeeListScreen";
import ManagerAddScreen, {
  ScreenOptions as ManagerAddScreenOptions,
} from "../screens/ManagerAddScreen";
import ManagerListScreen, {
  ScreenOptions as ManagerListScreenOptions,
} from "../screens/ManagerListScreen";
import ManagerEmployeeScreen from "../screens/ManagerEmployeeScreen";


const defaultNavOptions = {
  headerStyle: { backgroundColor: "#6699ff" },
  headerTintColor: "white",
};

const AuthStackNavigator = createStackNavigator();
const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator>
      <AuthStackNavigator.Screen
        name="AuthScreen"
        component={AuthScreen}
        options={{ headerShown: false }}
      />
    </AuthStackNavigator.Navigator>
  );
};

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={ListScreenOptions}
      />
      <Stack.Screen
        name="EmployeeAddScreen"
        component={EmployeeAddScreen}
        options={EmployeeAddScreenOptions}
      />
      <Stack.Screen
        name="EmployeeListScreen"
        component={EmployeeListScreen}
        options={EmployeeListScreenOptions}
      />
      <Stack.Screen
        name="ManagerListScreen"
        component={ManagerListScreen}
        options={ManagerListScreenOptions}
      />
      <Stack.Screen
        name="ManagerAddScreen"
        component={ManagerAddScreen}
        options={ManagerAddScreenOptions}
      />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  const isAuth = useSelector((state) => {
    return !!state.Auth.isAuth;
  });

  return (
    <NavigationContainer>
      {isAuth && <MyStackStackDecider />}
      {!isAuth && <AuthNavigator />}
    </NavigationContainer>
  );
};

const StackManager = createStackNavigator();

const MyStackManager = () => {
  return (
    <StackManager.Navigator screenOptions={defaultNavOptions}>
      <StackManager.Screen
        name="ManagerEmployeeScreen"
        component={ManagerEmployeeScreen}
        // options={ManagerEmployeeScreenOptions}
      />
    </StackManager.Navigator>
  );
};

const StackDecider = createStackNavigator();

const MyStackStackDecider = () => {
  const user = useSelector((state) => {
    return state.Auth.username;
  });
  return (
    <StackDecider.Navigator options={{ headerShown: false }}>
      {user === "Admin" ? (
        <StackDecider.Screen
          name="admin"
          component={MyStack}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <StackDecider.Screen
          name="manager"
          component={MyStackManager}
          options={{
            headerShown: false,
          }}
        />
      )}
    </StackDecider.Navigator>
  );
};

export default AppNavigator;
