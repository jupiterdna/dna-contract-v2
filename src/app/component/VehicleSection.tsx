import React from "react";
import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";

import { docStyles } from "../styles";

import car from "../assets/car.png";

const VehicleSection = () => {
  return (
    <View style={{ ...style.row, columnGap: 10 }}>
      <Image
        src={car.src}
        style={{ ...docStyles.img, width: 60 }}
        cache={false}
      />
      <View>
        <View style={style.row}>
          <Text style={style.textHeading}>Vehicle : </Text>
          <Text style={style.text}>2020 Blue TOTOYA CAMRY</Text>
        </View>
        <View style={style.row}>
          <Text style={style.textHeading}>VIN : </Text>
          <Text style={style.text}>JH4DA3350JS000592</Text>
        </View>
        <View style={style.row}>
          <Text style={style.textHeading}>License : </Text>
          <Text style={style.text}>OK3642234</Text>
        </View>
        <View style={{ ...style.row, columnGap: 20 }}>
          <View style={style.row}>
            <Text style={style.textHeading}>Mileage Out: </Text>
            <Text style={style.text}>8/8</Text>
          </View>
          <View style={style.row}>
            <Text style={style.textHeading}>Mileage In: </Text>
            <Text style={style.text}>90</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 8,
    fontFamily: "Karla",
  },
  textHeading: {
    fontSize: 9,
    fontFamily: "Karla",
    fontWeight: "bold",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default VehicleSection;
