import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import HomeTab from "./HomeTab";

export default function HomeScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, icon: require("../../../assets/images/puzzle.png") },
    { id: 1, icon: require("../../../assets/icons/property.png") },
    { id: 2, icon: require("../../../assets/icons/teddy-bear 1.png") },
  ];
  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <View style={styles.content}>
            <Text style={styles.contentText}>🎮 Đây là nội dung Tab 1</Text>
          </View>
        );
      case 1:
        return <HomeTab />
      case 2:
        return (
          <View style={styles.content}>
            <Text style={styles.contentText}>🍬 Đây là nội dung Tab 3</Text>
          </View>
        );
      default:
        return null;
    }
  };


  return (
    <View style={styles.screen}>
      {/* Nội dung chính */}
      <View style={styles.contentWrapper}>{renderContent()}</View>

      {/* Tab bar */}
      <View style={styles.row}>
        <View style={styles.container}>
          {/* Các tab */}
          <View style={styles.tabGroup}>
            {tabs.map((tab, index) => (
              <TouchableOpacity
                key={tab.id}
                style={[
                  styles.tab,
                  activeTab === index && styles.activeTab,
                ]}
                onPress={() => setActiveTab(index)}
              >
                <Image source={tab.icon} style={styles.icon} />
              </TouchableOpacity>
            ))}
          </View>

        </View>
        {/* Tab My Candies */}
          <TouchableOpacity 
            onPress={() => navigation.navigate("Profile")} 
            style={styles.candiesWrapper}
          >
            <Image
              source={require("../../../assets/icons/candy.png")}
              style={styles.icon}
            />
            <Text style={styles.candyText}>My Candies</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>26</Text>
            </View>
          </TouchableOpacity>
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  row:{
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 10,
    right: 10,
    flex: 1,
    justifyContent: 'space-between'
  },
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 20,
    margin: 10,
    backgroundColor: "#FFF7CC", // vàng nhạt
    width: 'auto'
  },
  tabGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tab: {
    width: 58,
    height: 58,
    backgroundColor: "#F8B6B6", // hồng nhạt
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: "#F06A6A", // đỏ hồng khi active
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  candiesWrapper: {
    backgroundColor: "#FFF1C1",
    borderRadius: 15,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "auto",
  },
  candyText: {
    fontSize: 12,
    marginTop: 4,
    color: "#F06F7F",
    fontWeight: "600",
  },
  badge: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: "#EF3349",
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});
