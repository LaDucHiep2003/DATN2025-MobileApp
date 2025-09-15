import React from "react";
import { View, Image } from "react-native";
import Svg, { Path } from "react-native-svg";
import { svgPathProperties } from "svg-path-properties";

export default function AnimalPath({ animals = [] }) {
  // Định nghĩa đường cong
  const pathData = "M100 50 C 150 200, 200 300, 150 450 S 200 600, 300 700";

  // Lấy thông tin path
  const properties = new svgPathProperties(pathData);
  const totalLength = properties.getTotalLength();

  // Tính vị trí cho mỗi con vật (chia đều theo số lượng)
  const positions = animals.map((_, index) => {
    const ratio = (index + 1) / (animals.length + 1);
    return properties.getPointAtLength(totalLength * ratio);
  });

  return (
    <View style={{ flex: 1 }}>
      {/* Đường nét đứt */}
      <Svg
        height="100%"
        width="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <Path
          d={pathData}
          stroke="white"
          strokeWidth={3}
          strokeDasharray={[12, 8]} // nét đứt
          fill="none"
        />
      </Svg>

      {/* Các con vật */}
      {positions.map((pos, i) => (
        <Image
          key={i}
          source={animals[i]}
          style={{
            position: "absolute",
            left: pos.x - 25, // căn giữa ảnh
            top: pos.y - 25,
            width: 50,
            height: 50,
            resizeMode: "contain",
          }}
        />
      ))}
    </View>
  );
}
