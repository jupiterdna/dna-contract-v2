"use client";

import React, { useEffect, useState } from "react";
import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
  Image,
  Font,
} from "@react-pdf/renderer";
import { docStyles } from "../styles";
import Img from "next/image";

import car from "../assets/car.png";
import Glogo from "../assets/Glogo.png";
import symbols_chip from "../assets/symbols-chip.png";
import symbols_crack from "../assets/symbols-crack.png";
import symbols_dent from "../assets/symbols-dent.png";
import symbols_missing from "../assets/symbols-missing.png";
import symbols_paint_swap from "../assets/symbols-paint-swap.png";
import symbols_scratch from "../assets/symbols-scratch.png";
import vehicle_screenshot from "../assets/vehicle_damage_marks.png";
// @ts-ignore
import font from "../assets/font/KronaOne-Regular.ttf";
import HeaderView from "./HeaderView";
import ContractHeaderBox from "./ContractHeaderBox";
import VehicleDamage from "./VehicleDamage";
import EstimatedCharges from "./EstimatedCharges";
import NoticeTemplate from "./NoticeTemplate";
import Coverage from "./Coverage";
import Agreement from "./Agreement";
import VehicleSection from "./VehicleSection";
import RentalAgreement from "./RentalAgreement";

function TestRender() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Document style={{ display: "flex" }}>
      <Page size="LETTER" orientation="portrait"  style={docStyles.page}>
        {/* header */}
     
        
        {/* rental agreement */}
          <View style={{
            marginTop: 15
          }}>
          <RentalAgreement  title='GO RENTALS RENTAL AGREEMENT TERMS AND CONDITIONS - COLORADO' />
          </View>
      </Page>
    </Document>
  );
}

const style = StyleSheet.create({
  text: {
    fontSize: 8,
    fontFamily: "Karla",
  },
  textHeading: {
    fontSize: 9,
    fontFamily: "Karla",
    fontWeight:'bold'
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default TestRender;
