import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
export default function LoginScreen({ navigation }){
    return(
        <View style={styles.container}>
            <View>
            <Image source={ require('../../../assets/images/Image_Login.png')} />
            <View>
                <View style={{ padding : 20}}>
                <TextInput placeholder='Email' />
                </View>
                <View style={{ padding : 20}}>
                <TextInput placeholder='Password' />
                </View>
            </View>
            <TouchableOpacity style={styles.button_login}>
                <Text onPress={() => navigation.navigate("Home")} style={styles.button_text}>Đăng nhập</Text>
            </TouchableOpacity>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text onPress={() => navigation.navigate("Register")} style={styles.text_register}>Bạn chưa có tài khoản? Đăng ký</Text>
            </View>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  button_login: {
    padding: 20,
    backgroundColor: "#FFCF25",
    marginTop: 20,
    borderRadius: 20,
  },
  button_text: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "600",
    textAlign: 'center'
  },
  text_register:{
    color: "#757070",
    fontSize: 16,
    fontWeight: 700,
  }
});