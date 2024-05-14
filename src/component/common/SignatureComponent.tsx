/* eslint-disable jsx-a11y/alt-text */
import {
  Text,
  View,
  StyleSheet,
  Font,
  Svg,
  Rect,
  Image,
} from "@dna/react-pdf";
import React from "react";

type SignatureComponentProps = {
  label?: string;
  image_source?: string;
  isSof?: boolean;
};

const SignatureComponent = ({
  label = "Renter's Signature",
  image_source,
  isSof
}: SignatureComponentProps) => {

  if(isSof) {
    return (
      <View style={{ position: "relative" }}>
        <Svg viewBox="0 0 150 37" width={150}>
          <Rect x={0} y={0} width={150} height={20} fill="#d0edfb" />
          <Text x={10} y={13} style={{ fontFamily: "Karla", fontSize: 8.5 }}>
            SOF
          </Text>
          <Text x={0} y={33} style={{ fontFamily: "Karla", fontSize: 8.5 }}>
            {label}
          </Text>
        </Svg>
      </View>
    );
  }

  if (image_source) {
    return (
      <View
        style={{
          width: 150,
          height: 20,
          backgroundColor: "#d0edfb",
          position: "relative",
        }}
      >
        <Image
          src={image_source}
          style={{ width: 80, position: "absolute", left: 33, zIndex: 21230 }}
        />
        <Text style={{ fontFamily: "Karla", fontSize: 8.5, top: 25 }}>
          {label}
        </Text>
      </View>
    );
  }

  return (
    <View style={{ position: "relative" }}>
      <Svg viewBox="0 0 150 37" width={150}>
        <Rect x={0} y={0} width={150} height={20} fill="#d0edfb" />

        <Text x={0} y={33} style={{ fontFamily: "Karla", fontSize: 8.5 }}>
          {label}
        </Text>
      </Svg>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: 20,
    backgroundColor: "#d0edfb",
    cursor: "pointer",
    maxWidth: 180,
    flexGrow: 0,
  },
});

export default SignatureComponent;
