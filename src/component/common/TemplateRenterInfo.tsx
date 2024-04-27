import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import _, { isEmpty } from "lodash";

type TemplateRenterInfoProps = {
  renters?: any;
};


const formatKey = (key: string) => {
    const words = key.split('_');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
};

const TemplateRenterInfo = ({ renters }: TemplateRenterInfoProps) => {
  if (isEmpty(renters)) return null;

  return (
    <>
      {Object.entries(renters).map(([key, value], i) => {
        return (
          <View key={i} style={style.row}>
            <Text style={style.textHeading}>{formatKey(key)}: </Text>
            <Text style={style.text}>{value}</Text>
          </View>
        );
      })}
    </>
  );
};

const style = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 9,
    fontFamily: "Karla",
  },
  textHeading: {
    fontSize: 9,
    fontFamily: "Karla",
    fontWeight: "bold",
  },
});

export default TemplateRenterInfo;
