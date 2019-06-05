import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

export default class home extends React.Component {
  static navigationOption = {
    title: "pictureClicker"
  };

  render() {
    let photo = this.props.navigation.getParam("photo", "empty");

    return (
      <View style={styles.container}>
        <Image
          resizeMode="center"
          style={styles.imageHolder}
          source={photo === "empty" ? require("../assets/logo.png") : photo}
        />
        <Button
          title="Click Picture"
          style={styles.btn}
          onPress={() => {
            this.props.navigation.navigate("Camera");
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  imageHolder: {
    alignSelf: "center",
    height: 400,
    margin: 20
  },
  btn: {
    margin: 20
  }
});
