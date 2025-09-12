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

export default function VocabQuestScreen({ navigation }){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            {/* Nút Back */}
                <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.backButton}>
                    <Image source={require('../../../assets/images/Arrow-left.png')} />
                </TouchableOpacity>

                {/* Title */}
                <Text style={styles.title}>Vocab Quest</Text>

                {/* Giữ chỗ cho cân đối layout */}
                <View style={{ width: 30 }} />
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
                <TouchableOpacity style={[styles.card_lesson, styles.card_lesson_active]}>
                    {/* Icon bên trái */}
                    <View style={styles.iconWrapper_lesson}>
                        <Image source={require("../../../assets/images/Lessons2.png")} style={styles.icon_lesson} />
                    </View>

                    {/* Nội dung text */}
                    <View style={styles.textBox_lesson}>
                        <Text style={styles.title_lesson}>Travel Destinations</Text>
                        <Text style={styles.subtitle_lesson}>18 vocabulary words</Text>
                    </View>

                    
                    <View style={styles.button_premium}>
                        <Text style={styles.button_premium_text}>Premium</Text>
                        <Image style={{ position: "absolute", top: 0, right: 0 }} source={require("../../../assets/icons/crown 1.png")} />
                    </View>
                    
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: "#F7FCFF",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    marginTop: 10
  },
  backButton: {
    width: 30,
    alignItems: "flex-start",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    color: "#252526",
  },
  container_lesson: {
    flex: 1,
    backgroundColor: "#F8F9FD",
    alignItems: 'center',
    marginTop: 30,
    padding: 20
  },
  card_lesson: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  card_lesson_active: {
    backgroundColor: "#D0EFFF", // màu nền khi active
  },
  iconWrapper_lesson: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#F3AE29", // màu nền vòng tròn
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  icon_lesson: {
    width: 30,
    height: 30,
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
  button_premium:{
    padding: 5,
    borderRadius: 50,
    backgroundColor: '#3A94E7',
  },
  button_premium_text:{
    fontSize: 12,
    fontWeight: 800,
    color: '#fff'
  }
})