import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";

export default function HomeTab({ navigation }) {
    return(
        <ImageBackground
            source={require("../../../assets/images/background.png")} // ảnh của bạn
            style={styles.background}
            resizeMode="cover" // cover, contain, stretch
        >
          
           
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  animal: {
    width: 60,
    height: 60,
    position: "absolute",
    resizeMode: "contain",
  },
});