import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import { AnimatedCircularProgress } from "react-native-circular-progress";

function LessonCard({ icon, title, subtitle, progress }) {
  return (
    <TouchableOpacity style={styles.card_lesson}>
      {/* Icon bên trái */}
      <View style={styles.iconWrapper_lesson}>
        <Image source={icon} style={styles.icon_lesson} />
      </View>

      {/* Nội dung text */}
      <View style={styles.textBox_lesson}>
        <Text style={styles.title_lesson}>{title}</Text>
        {subtitle && <Text style={styles.subtitle_lesson}>{subtitle}</Text>}
      </View>

      {/* Progress bên phải */}
      {progress !== undefined && (
        <View style={styles.progressCircle_lesson}>
          <Text style={styles.progressText_lesson}>{progress}%</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

export default function HomeScreen({ navigation }){
    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.text_welcome}>Hello Huy</Text>
                <Image
                    style={styles.thumbnail}
                    source={require("../../../assets/images/Image_Login.png")}
                />
            </View>
            <View style={styles.row}>
                <Text style={{ fontSize: 16, fontWeight: 500, color: '#252526'}}>Active Level</Text>
                <Text onPress={() => navigation.navigate("Vocab")} style={{color: '#3A94E7', fontSize: 14, fontWeight: 500}}>See Course</Text>
            </View>
            <View style={styles.card}>
                <View style={styles.row}>
                    {/* Vòng tròn tiến độ */}
                    <AnimatedCircularProgress
                        size={80}
                        width={8}
                        fill={72} // % tiến độ
                        tintColor="#3A94E7"
                        backgroundColor="#E0E0E0"
                        rotation={0}
                    >
                    {(fill) => <Text style={styles.progressText}>{`${Math.round(fill)}%`}</Text>}
                    </AnimatedCircularProgress>

                    {/* Nội dung text */}
                    <View style={styles.textBox}>
                        <Text style={styles.topic}>Topic: Animal</Text>
                        <Text style={styles.title}>Discovering English</Text>
                        <Text style={styles.subText}>Continue your journey!</Text>
                    </View>
                </View>

                {/* Button */}
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Continue Studying</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.container_lesson}>
                <LessonCard
                    icon={require("../../../assets/images/Lessons.png")} // thay icon của bạn
                    title="Vocabulary"
                    subtitle="10 common topic"
                    progress={5}
                />
                <LessonCard
                    icon={require("../../../assets/images/Lessons2.png")} // thay icon của bạn
                    title="Dictionary"
                />
            </View>
            <Image style={{ position: "absolute", bottom: 0, left: 0 }} source={ require("../../../assets/images/ThumbnailHome.png")} />
            <Image style={{ position: "absolute", bottom: 0, right: 0 }} source={ require("../../../assets/images/Thumbnailhome2.png")} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        padding: 20,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        width: '100%'
    },
    text_welcome: {
        fontSize: 30,
        fontWeight: "bold",
        flex: 2, 
        textAlign: 'center',
    },
    thumbnail: {
        width: 200,
        height: 200,
        flex: 1
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        elevation: 4, // Android shadow
        marginTop: 20
    },
    progressText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#3A94E7",
    },
    textBox: {
      marginLeft: 15,
      flex: 1,
    },
    topic: {
      fontSize: 14,
      color: "#666",
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginVertical: 4,
    },
    subText: {
      fontSize: 14,
      color: "#666",
    },
    button: {
      marginTop: 20,
      backgroundColor: "#FFB700",
      paddingVertical: 12,
      borderRadius: 10,
      alignItems: "center",
    },
    buttonText: {
      fontSize: 16,
      fontWeight: "600",
      color: "#fff",
    },
    // Lessons
  container_lesson: {
    flex: 1,
    backgroundColor: "#F8F9FD",
    alignItems: 'center',
    marginTop: 30
  },
  card_lesson: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  iconWrapper_lesson: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: "#F3AE29", // màu nền vòng tròn
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  icon_lesson: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  textBox_lesson: {
    flex: 1,
  },
  title_lesson: {
    fontSize: 16,
    fontWeight: "600",
    color: "#252526",
  },
  subtitle_lesson: {
    fontSize: 14,
    color: "#888",
    marginTop: 3,
  },
  progressCircle_lesson: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#FFD45A",
    justifyContent: "center",
    alignItems: "center",
  },
  progressText_lesson: {
    fontSize: 12,
    fontWeight: "500",
    color: "#FFD45A",
  },
});