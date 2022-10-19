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

const ManagerListScreen = () => {
  const managerData = useSelector((state) => state.Employee.managerData);
  const employeeData = useSelector((state) => state.Employee.employeeData);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ marginHorizontal: "10%" }}
          onPress={() => {
            navigation.navigate("ManagerAddScreen");
          }}
        >
          <Text style={{color:'white'}}>ADD</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  const renderedItemData = ({ item, index }) => {
    var assignedEmployees = employeeData.filter(
      (element) => element.assignedManager === item.id
    );
    return (
      <View style={styles.mainContainer}>
        <View style={styles.dataContainer}>
          <View style={styles.listContainer}>
            <View style={styles.titleText}>
              <Text>NAME</Text>
            </View>
            <View style={styles.statusText}>
              <Text>{item.managerName}</Text>
            </View>
          </View>
          <View style={styles.listContainer}>
            <View style={styles.titleText}>
              <Text>EMPLOYEE ASSIGNED</Text>
            </View>
            <View style={styles.statusText}>
              {assignedEmployees.map((x, y, z) => {
                return (
                  <Text key={y}>
                    {y + 1}-{x.name}
                  </Text>
                );
              })}
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
        data={managerData}
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
    headerTitle: "Managers",
  };
};

export default ManagerListScreen;
