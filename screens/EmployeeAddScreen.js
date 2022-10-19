import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  TextInput,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { addEmployee } from "../store/actions/EmployeeAction";
const EmployeeAddScreen = () => {
  const managerData = useSelector((state) => state.Employee.managerData);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [phnumber, setphnumber] = useState("");
  const [selectedManager, setselectedManager] = useState("");

  const saveHandler = async () => {
    if (name.length > 0 && phnumber.length > 0) {
      dispatch(addEmployee(name, phnumber, selectedManager));
      navigation.navigate("EmployeeListScreen");
    } else {
      Alert.alert("Alert", "Enter Valid Details", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.boxCointainer}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Name :</Text>
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                value={name}
                autoCapitalize={"words"}
                onChangeText={setName}
              />
            </View>
          </View>
          <View style={styles.boxCointainer}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Ph no :</Text>
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                value={phnumber}
                onChangeText={setphnumber}
                keyboardType="number-pad"
              />
            </View>
          </View>
          <View style={styles.boxCointainer}>
            <View style={{ width: "40%", alignItems: "flex-start" }}>
              <Text style={styles.text}>Pick Manager :</Text>
            </View>
            <View style={styles.textInputContainer}>
              <Picker
                selectedValue={selectedManager}
                onValueChange={(itemValue, itemIndex) =>
                  setselectedManager(itemValue)
                }
                style={styles.picker}
              >
                <Picker.Item label="--SELECT--" value={null} />
                {managerData.map((item, index) => (
                  <Picker.Item
                    label={item.managerName}
                    value={item.id}
                    key={index}
                  />
                ))}
              </Picker>
            </View>
          </View>
          <View
            style={{
              width: "80%",
              marginHorizontal: "10%",
              marginVertical: "3%",
            }}
          >
            <Button title="Submit" color="#6699ff" onPress={saveHandler} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  picker: {
    fontSize: 50,
  },
  text: {
    fontSize: 25,
  },
  boxCointainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: "2.5%",
    marginVertical: "3%",
    width: "95%",
  },
  textInput: {
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    marginVertical: "3%",
    marginHorizontal: "3%",
    fontSize: 25,
    paddingHorizontal: 5,
  },
  textContainer: {
    width: "25%",
    alignItems: "center",
  },
  textInputContainer: {
    width: "60%",
  },
});

export const ScreenOptions = () => {
  return {
    headerTitle: "Employee-add",
  };
};
export default EmployeeAddScreen;
