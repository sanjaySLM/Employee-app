import React, { useLayoutEffect } from "react";
import {
  Text,
  View,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { logoutHandler } from "../store/actions/AuthAction";
import { useNavigation } from "@react-navigation/native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const ListScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ marginHorizontal: "5%" }}
          onPress={logoutFunctionCall}
        >
          <Text style={{color:'white'}}>Logout</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.listContainer}>
      <View style={styles.imagecontainer}>
        <TouchableOpacity
          style={styles.imageview}
          onPress={() => navigation.navigate("ManagerListScreen")}
        >
          <Image
            style={styles.image}
            source={require("../assets/manager.jpg")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageview}
          onPress={() => navigation.navigate("EmployeeListScreen")}
        >
          <Image
            style={styles.image}
            source={require("../assets/employee.jpg")}

          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "column",
    width: width,
    height: height,
    marginTop: "6%",
    marginHorizontal: "1.7%",
  },
  imagecontainer: {
    flexDirection: "row",
    marginHorizontal: "2%",
  },
  imageview: {
    width: width / 3,
    height: height / 5.8,
    backgroundColor: "#f1f5fb",
    margin: "3.5%",
    paddingHorizontal: "3%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#123E73",
    marginHorizontal: "7%",
  },
  image: {
    flex: 1,
    height: height / 5,
    width: width / 3.7,
    resizeMode: "contain",
  },
});

export const ScreenOptions = () => {
  return {
    headerTitle: "Dashboard",
  };
};

export default ListScreen;
