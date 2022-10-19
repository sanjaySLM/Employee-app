import React, { useLayoutEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const EmployeeListScreen = () => {
  const employeeData = useSelector((state) => state.Employee.employeeData);
  const managerData = useSelector((state) => state.Employee.managerData);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ marginHorizontal: "10%" }}
          onPress={() => {
            navigation.navigate("EmployeeAddScreen");
          }}
        >
          <Text style={{color:'white'}}>ADD</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  const renderedItemData = ({ item, index }) => {
    const found = managerData.find(
      (element) => element.id === item.assignedManager
    );

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
          <View style={styles.listContainer}>
            <View style={styles.titleText}>
              <Text>PHONE NO</Text>
            </View>
            <View style={styles.statusText}>
              <Text>{item.phoneno}</Text>
            </View>
          </View>
          <View style={styles.listContainer}>
            <View style={styles.titleText}>
              <Text>ASSIGNED MANAGER</Text>
            </View>
            <View style={styles.statusText}>
              <Text>{found.managerName}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={employeeData}
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

export const ScreenOptions = () => {
  return {
    headerTitle: "Employees",
  };
};
export default EmployeeListScreen;
