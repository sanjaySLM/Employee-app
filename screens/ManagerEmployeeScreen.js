import React, { useLayoutEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { logoutHandler } from "../store/actions/AuthAction";

const ManagerEmployeeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const user = useSelector((state) => {
    return state.Auth.username;
  });
  const employeeData = useSelector((state) => state.Employee.employeeData);
  const assignedEmployees = employeeData.filter(
    (item, index) => item.assignedManager == user
  );
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Employee-Assigned",
      headerRight: () => (
        <TouchableOpacity
          style={{ marginHorizontal: "5%" }}
          onPress={logoutFunctionCall}
        >
          <Text style={{ color: "white" }}>Logout</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  const logoutFunctionCall = () => {
    Alert.alert("Alert", "Do you really want to logout?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          dispatch(logoutHandler());
        },
      },
    ]);
  };

  const renderedItemData = ({ item, index }) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.dataContainer}>
          <View style={styles.listContainer}>
            <View style={styles.titleText}>
              <Text>ID</Text>
            </View>
            <View style={styles.statusText}>
              <Text>{item.id}</Text>
            </View>
          </View>
          <View style={styles.listContainer}>
            <View style={styles.titleText}>
              <Text>NAME</Text>
            </View>
            <View style={styles.statusText}>
              <Text>{item.name}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <View style={{ marginLeft: "2%" }}>
        <Text style={{ color: "#1a66ff", fontSize: 20 }}>Hi {user}..!</Text>
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={assignedEmployees}
        renderItem={renderedItemData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    borderColor: "black",
    borderWidth: 1,
    margin: "1%",
    flexDirection: "row",
    padding: "1.5%",
  },
  dataContainer: {
    width: "100%",
  },
  iconContainer: {
    width: "40%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    fontSize: 15,
  },
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "black",
    borderBottomWidth: 0.2,
    borderRightWidth: 0.2,
  },
  titleText: {
    width: "60%",
    justifyContent: "center",
  },
  statusText: {
    width: "40%",
  },
  noDataAvailableCointainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
// export const ScreenOptions = () => {
//   return {
//     headerTitle: "Employee-Assigned",
//   };
// };

export default ManagerEmployeeScreen;
