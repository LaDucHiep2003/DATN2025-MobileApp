import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import LottieView from "lottie-react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={ require('./assets/images/Image_Login.png')} />
        <View>
          <View style={{ padding : 20}}>
            <Image source={ require('./assets/ICON (2).svg')} />
            <TextInput placeholder='Email' />
          </View>
          <View style={{ padding : 20}}>
            <Image source={ require('./assets/ICON (2).svg')} />
            <TextInput placeholder='Password' />
          </View>
        </View>
        <TouchableOpacity style={styles.button_login}>
          <Text style={styles.button_text}>Đăng nhậps</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.text_register}>Bạn chưa có tài khoản? Đăng ký</Text>
        </View>
      </View>
      <LottieView
        source={require("./assets/animations/dog.json")}
        autoPlay
        loop
        style={styles.animation}
      />
      <StatusBar style="auto" />
    </View>
  
  );
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
  },
  animation: {
    width: 300,
    height: 300,
  },
});
