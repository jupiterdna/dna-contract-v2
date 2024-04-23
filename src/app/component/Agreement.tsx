"use client";

import React from "react";
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import { docStyles } from "../styles";
import SignatureComponent from "./SignatureComponent";

type AgreementProps = {
  content?: string;
};

const Agreement = ({ content }: AgreementProps) => {
  return (
    <View style={{ ...style.container }}>
      <Text style={style.text}>{content}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style={style.signatureContainer}>
        <SignatureComponent />
      </View>
      <View style={style.signatureContainer}>
        <SignatureComponent label="Signature of Additional Driver" />
      </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
  },
  headingText: {
    fontSize: 9,
    fontWeight: "bold",
    fontFamily: "Karla",
    textTransform: "uppercase",
  },
  labelText: {
    fontSize: 9,
    fontFamily: "Karla",
  },
  text: {
    fontSize: 9,
    fontFamily: "Karla",
    lineHeight: 1.7,
    marginBottom: 10,
    textAlign: "justify",
  },
  signatureContainer: {
    marginTop: 5,
    rowGap: 5,
    marginBottom: 15,
    width: "30%",
  },
  heading: { fontWeight: 700, fontSize: 12, fontFamily: "Karla" },
});

export default Agreement;
