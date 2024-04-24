"use client";

import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import _, { isEmpty } from "lodash";
import SignatureComponent from "./SignatureComponent";

import symbols_chip from "../assets/symbols-chip.png";
import symbols_crack from "../assets/symbols-crack.png";
import symbols_dent from "../assets/symbols-dent.png";
import symbols_missing from "../assets/symbols-missing.png";
import symbols_paint_swap from "../assets/symbols-paint-swap.png";
import symbols_scratch from "../assets/symbols-scratch.png";

type TemplateVehicleDamageProps = {
  damage: {
    vehicle_image?: string;
    dent?: number;
    scratch?: number;
    chip?: number;
    missing?: number;
    crack?: number;
    paint_swap?: number;
  }
};



const TemplateVehicleDamage = ({
  damage,
}: TemplateVehicleDamageProps) => {

    const { dent, scratch, chip, missing, crack, paint_swap } = damage;

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.row}>
          <View style={styles.content}>
            <Image
              src={symbols_dent.src}
              style={{ width: 10, height: 10 }}
              cache={false}
            />
            <Text style={styles.text}>Dent</Text>
          </View>
          <Text style={styles.text}>{dent || 0}</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.content}>
            <Image
              src={symbols_scratch.src}
              style={{ width: 10, height: 10 }}
              cache={false}
            />
            <Text style={styles.text}>Scratch</Text>
          </View>
          <Text style={styles.text}>{scratch || 0}</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.content}>
            <Image
              src={symbols_missing.src}
              style={{ width: 10, height: 10 }}
              cache={false}
            />
            <Text style={styles.text}>Missing</Text>
          </View>
          <Text style={styles.text}>{missing || 0}</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.content}>
            <Image
              src={symbols_paint_swap.src}
              style={{ width: 10, height: 10 }}
              cache={false}
            />
            <Text style={styles.text}>Paint Swap</Text>
          </View>
          <Text style={styles.text}>{paint_swap || 0}</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.content}>
            <Image
              src={symbols_chip.src}
              style={{ width: 10, height: 10 }}
              cache={false}
            />
            <Text style={styles.text}>Chip</Text>
          </View>
          <Text style={styles.text}>{chip || 0}</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.content}>
            <Image
              src={symbols_crack.src}
              style={{ width: 10, height: 10 }}
              cache={false}
            />
            <Text style={styles.text}>Crack</Text>
          </View>
          <Text style={styles.text}>{crack || 0}</Text>
        </View>
      </View>
      <View style={styles.signatureContainer}>
        <Text style={styles.labelText}>Condition Agreed to:</Text>
        <SignatureComponent 
            image_source="https://raw.githubusercontent.com/ww6015132/SilkySignature/master/signature.png"
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    columnGap: 10,
  },
  content: {
    flexDirection: "row",
    columnGap: 3,
  },
  row: {
    flexDirection: "row",
    columnGap: 3,
    justifyContent: "space-between",
    width: "45%",
    marginBottom: 5,
    paddingHorizontal: 3,
    paddingBottom: 3,
    borderBottom: "1px solid black",
  },
  text: {
    fontSize: 8,
    fontFamily: "Karla",
  },
  labelText: {
    fontSize: 9,
    fontFamily: "Karla",
  },
  signatureContainer: {
    marginTop: 20,
    rowGap: 5,
  },
  //   content:{
  //     paddingVertical: 10,
  //     lineHeight: 1.3
  //   },
  //   container:{
  //       border: '1px solid black',
  //       padding: 5,
  //       width: '100%',
  //       position:'relative',
  //       paddingBottom: 10
  //   },
  //   headingContainer:{
  //     backgroundColor: 'black',
  //     color: 'white',
  //    padding: 5,
  //    paddingLeft: 5,
  //     textTransform: 'uppercase'
  //   },
  // headingText:{
  //   fontSize: 10,
  //   fontWeight: 'bold'
  // },
  // text:{
  //   fontSize: 8
  // },
  // heading: {fontWeight: 300, fontSize: 12}
});

export default TemplateVehicleDamage;
