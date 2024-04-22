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

function TestRender() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Document style={{ display: "flex" }}>
      <Page size="A4" style={docStyles.page}>
        {/* header */}
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Image src={Glogo.src} style={docStyles.img} cache={false} />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={docStyles.headerText}>Colorado Rental Agreement</Text>
            <Text style={docStyles.headerSubText}>Agreement #: GO123456</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            columnGap: 10,
            display: "flex",
            marginTop: 20,
          }}
        >
          <ContractHeaderBox
            first_heading={{
              label: "Date & Time Out",
              value: "12/12/2021 12:00 PM",
            }}
            second_heading={{
              label: "Go rentals Colorado Contract",
              value: "Colorado Convention Center, 14th Street, Denver, CO, USA",
            }}
            contact="(678) 768-7687"
          />
          <ContractHeaderBox
            first_heading={{
              label: "Date & Time In",
              value: "Wednesday, Sep 6, 2023 10:59AM",
            }}
            second_heading={{
              label: "Go Rentals Colorado Contract",
              value: "Colorado Convention Center, 14th Street, Denver, CO, USA",
            }}
            contact="(678) 768-7687"
          />
        </View>

        {/* info */}
        <View
          style={{
            flexDirection: "row",
            columnGap: 10,
            display: "flex",
            marginTop: 10,
          }}
        >
          <HeaderView title="Renter Information" style={{ width: "30%" }}>
            <View style={style.row}>
              <Text style={style.textHeading}>Renter : </Text>
              <Text style={style.text}>Shannon Miller Farmer</Text>
            </View>
            <View style={style.row}>
              <Text style={style.textHeading}>Additional Drivers : </Text>
              <Text style={style.text}>N/A</Text>
            </View>
            <View style={style.row}>
              <Text style={style.textHeading}>Tail Number : </Text>
              <Text style={style.text}>N/A</Text>
            </View>
          </HeaderView>
          <HeaderView title="Vehicle  Information" style={{ width: "70%" }}>
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
          </HeaderView>
        </View>

        <View
          style={{
            flexDirection: "row",
            columnGap: 10,
            display: "flex",
            marginTop: 10,
          }}
        >
          <HeaderView title="Vehicle Damage" style={{ width: "30%" }}>
            <View>
              <View
                style={{
                  ...style.row,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={vehicle_screenshot.src}
                  style={{ ...docStyles.img, width: "96%" }}
                  cache={false}
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <VehicleDamage
                  items={[
                    {
                      img: symbols_dent.src,
                      label: "Dent",
                      value: "1",
                    },
                    {
                      img: symbols_scratch.src,
                      label: "Scratch",
                      value: "0",
                    },
                    {
                      img: symbols_missing.src,
                      label: "Missing",
                      value: "2",
                    },
                    {
                      img: symbols_paint_swap.src,
                      label: "Paint Swap",
                      value: "0",
                    },
                    {
                      img: symbols_chip.src,
                      label: "Chip",
                      value: "1",
                    },
                    {
                      img: symbols_crack.src,
                      label: "Crack",
                      value: "2",
                    },
                  ]}
                />
              </View>
            </View>
          </HeaderView>
          <HeaderView title="Estimated Charges" style={{ width: "70%" }}>
            <View>
              <EstimatedCharges
                heading={[
                  {
                    label: "Vehicle Charges",
                  },
                  {
                    label: "Price/Unit",
                  },
                  {
                    label: "QTY",
                  },
                  {
                    label: "Subtotal",
                  },
                ]}
                rows={[
                  {
                    charge_name: "Daily Rate",
                    price_unit: "$120.00/Day",
                    qty: "7",
                    subtotal: "$840.00",
                  },
                  {
                    charge_name: "Hourly Rate",
                    price_unit: "$40.00/Hour",
                    qty: "2",
                    subtotal: "$80.00",
                  },
                  {
                    charge_name: "Weekly Rate",
                    price_unit: "$720.00/Hour",
                    qty: "0",
                    subtotal: "$0.00",
                  },
                  {
                    charge_name: "Monthly Rate",
                    price_unit: "$2,880.00/Hour",
                    qty: "0",
                    subtotal: "$0.00",
                  },
                  {
                    charge_name: "Daily Rate",
                    price_unit: "$120.00/Day",
                    qty: "7",
                    subtotal: "$840.00",
                  },
                  {
                    charge_name: "Hourly Rate",
                    price_unit: "$40.00/Hour",
                    qty: "2",
                    subtotal: "$80.00",
                  },
                  {
                    charge_name: "Weekly Rate",
                    price_unit: "$720.00/Hour",
                    qty: "0",
                    subtotal: "$0.00",
                  },
                  {
                    charge_name: "Monthly Rate",
                    price_unit: "$2,880.00/Hour",
                    qty: "0",
                    subtotal: "$0.00",
                  },
                  {
                    charge_name: "Daily Rate",
                    price_unit: "$120.00/Day",
                    qty: "7",
                    subtotal: "$840.00",
                  },
                  {
                    charge_name: "Hourly Rate",
                    price_unit: "$40.00/Hour",
                    qty: "2",
                    subtotal: "$80.00",
                  },
                  {
                    charge_name: "Weekly Rate",
                    price_unit: "$720.00/Hour",
                    qty: "0",
                    subtotal: "$0.00",
                  },
                  {
                    charge_name: "Monthly Rate",
                    price_unit: "$2,880.00/Hour",
                    qty: "0",
                    subtotal: "$0.00",
                  },
                ]}
              />

              <View style={{marginTop: 20}}>
                <EstimatedCharges
                  heading={[
                    {
                      label: "Coverages",
                    },
                    {
                      label: "",
                    },
                    {
                      label: "",
                    },
                    {
                      label: "",
                    },
                  ]}
                  rows={[
                    {
                      charge_name: "Daily Rate",
                      price_unit: "$120.00/Day",
                      qty: "7",
                      subtotal: "$840.00",
                    },
                    {
                      charge_name: "Hourly Rate",
                      price_unit: "$40.00/Hour",
                      qty: "2",
                      subtotal: "$80.00",
                    },
                    {
                      charge_name: "Weekly Rate",
                      price_unit: "$720.00/Hour",
                      qty: "0",
                      subtotal: "$0.00",
                    },
                    {
                      charge_name: "Monthly Rate",
                      price_unit: "$2,880.00/Hour",
                      qty: "0",
                      subtotal: "$0.00",
                    },
                    {
                      charge_name: "Daily Rate",
                      price_unit: "$120.00/Day",
                      qty: "7",
                      subtotal: "$840.00",
                    },
                    {
                      charge_name: "Hourly Rate",
                      price_unit: "$40.00/Hour",
                      qty: "2",
                      subtotal: "$80.00",
                    },
                    {
                      charge_name: "Weekly Rate",
                      price_unit: "$720.00/Hour",
                      qty: "0",
                      subtotal: "$0.00",
                    },
                    {
                      charge_name: "Monthly Rate",
                      price_unit: "$2,880.00/Hour",
                      qty: "0",
                      subtotal: "$0.00",
                    },
                    {
                      charge_name: "Daily Rate",
                      price_unit: "$120.00/Day",
                      qty: "7",
                      subtotal: "$840.00",
                    },
                    {
                      charge_name: "Hourly Rate",
                      price_unit: "$40.00/Hour",
                      qty: "2",
                      subtotal: "$80.00",
                    },
                    {
                      charge_name: "Weekly Rate",
                      price_unit: "$720.00/Hour",
                      qty: "0",
                      subtotal: "$0.00",
                    },
                    {
                      charge_name: "Monthly Rate",
                      price_unit: "$2,880.00/Hour",
                      qty: "0",
                      subtotal: "$0.00",
                    },
                  ]}
                />
              </View>

              <View style={{marginTop: 20}}>
                <EstimatedCharges
                  heading={[
                    {
                      label: "Fees",
                    },
                    {
                      label: "",
                    },
                    {
                      label: "",
                    },
                    {
                      label: "",
                    },
                  ]}
                  rows={[
                    {
                      charge_name: "Daily Rate",
                      price_unit: "$120.00/Day",
                      qty: "7",
                      subtotal: "$840.00",
                    },
                    {
                      charge_name: "Hourly Rate",
                      price_unit: "$40.00/Hour",
                      qty: "2",
                      subtotal: "$80.00",
                    },
                    {
                      charge_name: "Weekly Rate",
                      price_unit: "$720.00/Hour",
                      qty: "0",
                      subtotal: "$0.00",
                    },
                    {
                      charge_name: "Monthly Rate",
                      price_unit: "$2,880.00/Hour",
                      qty: "0",
                      subtotal: "$0.00",
                    },
                    {
                      charge_name: "Daily Rate",
                      price_unit: "$120.00/Day",
                      qty: "7",
                      subtotal: "$840.00",
                    },
                    {
                      charge_name: "Hourly Rate",
                      price_unit: "$40.00/Hour",
                      qty: "2",
                      subtotal: "$80.00",
                    },
                    {
                      charge_name: "Weekly Rate",
                      price_unit: "$720.00/Hour",
                      qty: "0",
                      subtotal: "$0.00",
                    },
                    {
                      charge_name: "Monthly Rate",
                      price_unit: "$2,880.00/Hour",
                      qty: "0",
                      subtotal: "$0.00",
                    },
                    {
                      charge_name: "Daily Rate",
                      price_unit: "$120.00/Day",
                      qty: "7",
                      subtotal: "$840.00",
                    },
                    {
                      charge_name: "Hourly Rate",
                      price_unit: "$40.00/Hour",
                      qty: "2",
                      subtotal: "$80.00",
                    },
                    {
                      charge_name: "Weekly Rate",
                      price_unit: "$720.00/Hour",
                      qty: "0",
                      subtotal: "$0.00",
                    },
                    {
                      charge_name: "Monthly Rate",
                      price_unit: "$2,880.00/Hour",
                      qty: "0",
                      subtotal: "$0.00",
                    },
                  ]}
                />
              </View>
            </View>
          </HeaderView>
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
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default TestRender;
