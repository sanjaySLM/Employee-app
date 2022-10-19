import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  TextInput,
} from "react-native";
import { addManager } from "../store/actions/ManagerAction";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const ManagerAddScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const saveHandler = async () => {
    await dispatch(addManager(name));
    navigation.navigate("ManagerListScreen")
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
    width: "75%",
  },
});

export const ScreenOptions = () => {
  return {
    headerTitle: "Add-Manager",
  };
};
export default ManagerAddScreen;
