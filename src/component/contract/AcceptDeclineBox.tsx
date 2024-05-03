/* eslint-disable jsx-a11y/alt-text */
import { Image, Rect, StyleSheet, Svg, Text, View } from "@react-pdf/renderer";
import React from "react";
import { dataType } from "./Coverage";

type AcceptDeclineBoxType = {
  item?: dataType;
  item_key: string | number;
};

const AcceptDeclineBox = ({ item, item_key }: AcceptDeclineBoxType) => {
  const _renderImage = (isMatch?: boolean, title?: "Accept" | "Decline") => {
    if (item?.signature_image && isMatch) {
      return (
        <View
          style={{
            width: 38,
            height: 38,
            marginRight: title === 'Accept' ? 45 : 45,
            marginLeft: title === 'Accept' ? 5 : 0,
            backgroundColor:  "#d0edfb",
            position: "relative",
            border:'1px solid black',
            top: 12,
          }}
        >
          <Image
            src={item?.signature_image}
            style={{ width: '100%', position: "absolute", left: 0, top: 8, zIndex: 21230 }}
          />
          <Text style={{ fontFamily: "Karla", fontSize: 8.5, top: -14, left: 3, fontWeight: 'bold' }}>
            {title}
          </Text>
        </View>
      );
    }
    return (
      <Svg viewBox="0 0 120 160">
        <Text
          x={16}
          y={20}
          style={{
            fontFamily: "Karla",
            fontSize: 26,
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
        <Rect
          height="120"
          width="120"
          y={40}
          stroke="#222"
          fill={isMatch ? "#d0edfb" : "#fff"}
        />
      </Svg>
    );
  };

  return (
    <View style={{ ...style.row, ...style.boxcontainer }} key={item_key}>
      <View>{_renderImage(item?.signature_type === "accept", "Accept")}</View>
      <View>{_renderImage(item?.signature_type === "decline", "Decline")}</View>
    </View>
  );
};

const style = StyleSheet.create({
  titleContainer: {
    paddingVertical: 5,
    borderBottom: "1px solid black",
    marginBottom: 10,
  },

  signatureBox: {
    border: "1px solid black",
    height: 40,
    width: 40,
  },

  contentCatainer: {
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
  },
  boxcontainer: {
    columnGap: 6,
    width: "18%",
    minWidth: 100,
    height: 50,
  },
  boxLabel: {
    fontSize: 8,
    fontFamily: "Karla",
    fontWeight: "bold",
  },
  box: {
    alignItems: "center",
    rowGap: 5,
    backgroundColor: "red",
  },
  headingTxt: {
    fontSize: 9,
    fontFamily: "Karla",
    textTransform: "uppercase",
    lineHeight: 1.7,
    fontWeight: "bold",
  },
  text: {
    fontSize: 9,
    fontFamily: "Karla",
    lineHeight: 1.7,
    marginBottom: 10,
    textAlign: "justify",
  },
  contentText: {
    fontSize: 9,
    fontFamily: "Karla",
    lineHeight: 1.7,
    marginBottom: 10,
    textAlign: "justify",
  },
});

export default AcceptDeclineBox;
