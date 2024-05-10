/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import _, { isEmpty } from "lodash";
import SignatureComponent from "../common/SignatureComponent";
import { public_path } from "@/utils";

type TemplateVehicleDamageProps = {
  vehicle_image:'',
  signature_image:'',
  damage: {
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
  signature_image, 
  vehicle_image
}: TemplateVehicleDamageProps) => {

    const { dent, scratch, chip, missing, crack, paint_swap } = damage;

    const path= public_path

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.row}>
          <View style={styles.content}>
            <Image
              src={path+'/images/symbols-dent.png'}
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
              src={path+'/images/symbols-scratch.png'}
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
              src={path+'/images/symbols-missing.png'}
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
              src={path+'/images/symbols-paint-swap.png'}
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
              src={path+'/images/symbols-chip.png'}
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
              src={path+'/images/symbols-crack.png'}
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
            image_source={signature_image}
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
