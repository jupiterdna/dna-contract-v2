import React from "react";
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import { docStyles } from "../../styles";
import SignatureComponent from "../common/SignatureComponent";

type AgreementProps = {
  content?: string;
  renter_signature?: string;
  additional_signatures?: string[];
  isSof?: boolean;
};

const Agreement = ({
  content,
  renter_signature,
  additional_signatures,
  isSof
}: AgreementProps) => {
  return (
    <View style={{ ...style.container }}>
      <Text style={style.text}>{content}</Text>
      <View style={{ ...style.rowStyle, justifyContent: "space-between" }}>
        <View style={style.signatureContainer}>
          <SignatureComponent isSof={isSof} image_source={renter_signature} />
        </View>
        {!additional_signatures?.length ? (
          <View style={style.signatureContainer}>
            <SignatureComponent isSof={isSof} label="Signature of Additional Driver" />
          </View>
        ) : (
          <View style={{ rowGap: 20, ...style.colStyle }}>
            {additional_signatures?.map((signature, i) => (
              <View style={{ ...style.signatureContainer, height: 43 }} key={i}>
                <SignatureComponent
                  isSof={isSof}
                  image_source={signature}
                  label="Signature of Additional Driver"
                />
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
  },
  colStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  rowStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    fontWeight: "normal",
  },
  text: {
    fontSize: 9,
    fontFamily: "Karla",
    lineHeight: 1.7,
    marginBottom: 10,
    textAlign: "justify",
    fontWeight: "normal",
  },
  signatureContainer2: {
    marginTop: 5,
    rowGap: 5,
    marginBottom: 15,
    width: 300,
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
