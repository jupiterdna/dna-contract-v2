import { Text, View, StyleSheet, Image, Rect, Svg } from "@dna/react-pdf";
import React from "react";
import AcceptDeclineBox from "./AcceptDeclineBox";

export type dataType = {
  title?: string;
  signature_type?: "accept" | "decline";
  signature_id?: string;
  signature_image?: string;
  description?: string;
};

type CoverageProps = {
  data: dataType[];
  isSof?: boolean;
  gen_from?: "mobile" | "web";
};

const signatureStyle = (
  sigType: "accept" | "decline",
  key: "accept" | "decline",
) => {
  return sigType === key
    ? {
        backgroundColor: "#d0edfb",
      }
    : {
        backgroundColor: "#fff",
      };
};



const removeHtmlTags = (str?: string) => {
  const regex = /(<([^>]+)>)/gi;
  return str?.replace(regex, "");
};

const Coverage = ({ data, isSof, gen_from }: CoverageProps) => {


  return data.map((item, index) => {
    return (
      <View key={item?.signature_id || index} style={{ marginBottom: 20 }}>
        <View style={style.titleContainer}>
          <Text style={style.headingTxt}>{item.title}</Text>
        </View>
        <View
          style={{
            ...style.row,
            columnGap: 10,
            justifyContent: "space-between",
            display: "flex",
          }}
        >
         <AcceptDeclineBox gen_from={gen_from} isSof={isSof} item={item} item_key={item?.signature_id || index} />
          <View style={{ flex: 1, paddingTop: 10, width: 100, alignSelf: 'flex-end' }}>
            <Text style={style.text}>{removeHtmlTags(item?.description)}</Text>
          </View>
        </View>
      </View>
    );
  });
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

export default Coverage;
