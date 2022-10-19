import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { rootReducer } from "./store/reducers/RootReducer";
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
import * as SplashScreen from "expo-splash-screen";
import { CreateTable, insertLogin, checkInsertItem } from "./utility/database";

export default function App() {
  useEffect(() => {
    async function fetchData() {
      await CreateTable();
      const adminInsertCheck = await checkInsertItem("1");
      const Manager101InsertCheck = await checkInsertItem("2");
      const Manager102InsertCheck = await checkInsertItem("3");

      if (adminInsertCheck === null) {
        await insertLogin("1", "Admin", "123");
      }
      if (Manager101InsertCheck === null) {
        await insertLogin("2", "101", "manager101");
      }
      if (Manager102InsertCheck === null) {
        await insertLogin("3", "102", "manager102");
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <StatusBar style={Platform.OS === "android" ? "light" : "dark"} />
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
