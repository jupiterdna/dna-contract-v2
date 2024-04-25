import React from "react";
import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";

import { docStyles } from "../styles";

import car from "../assets/car.png";

type vehicleType = {
  id?: string;
  vehicle_name: string;
  vin: string;
  license_no: string;
  unit_no?: string;
  milage_out?: string;
  milage_in?: string;
  fuel_in?: string;
  fuel_out?: string;
  miles_per_day?: string;
  vehicle_type?: string;
  vehicle_image?: string;
  checkout?: string;
  checkin?: string;
};

type TemplateVehicleProps = {
  vehicles: vehicleType[];
};

const TemplateVehicle = ({ vehicles }: TemplateVehicleProps) => {
  if (!vehicles?.length) return null;

  return (
    <>
      {vehicles.map((vehicle, i) => {
        const {
          id,
          vehicle_image,
          vehicle_name,
          vin,
          license_no,
          vehicle_type,
          unit_no,
          milage_out,
          fuel_in,
          fuel_out,
          milage_in,
          miles_per_day,
          checkout,
          checkin,
        } = vehicle;

        return (
          <View
            style={{ ...style.row, columnGap: 10, alignItems: "flex-start" }}
            key={id || i}
          >
            <Image
              src={vehicle_image}
              style={{ ...docStyles.img, width: 60 }}
              cache={false}
            />
            <View>
              <View style={{ ...style.row, ...style.primary }}>
                <Text style={style.text}>{vehicle_type}</Text>
              </View>
              <View style={{ ...style.fontBold, ...style.text }}>
                <Text style={style.text}>{vehicle_name}</Text>
              </View>

              {vin && (
                <View style={style.row}>
                  <Text style={style.textHeading}>VIN: </Text>
                  <Text style={style.text}>{vin}</Text>
                </View>
              )}

              {unit_no && (
                <View style={style.row}>
                  <Text style={style.textHeading}>Unit Number: </Text>
                  <Text style={style.text}>{unit_no}</Text>
                </View>
              )}

              {license_no && (
                <View style={style.row}>
                  <Text style={style.textHeading}>License #: </Text>
                  <Text style={style.text}>{license_no}</Text>
                </View>
              )}

              {checkout && (
                <View style={style.row}>
                  <Text style={style.textHeading}>Checkout: </Text>
                  <Text style={style.text}>{checkout}</Text>
                </View>
              )}

              {checkin && (
                <View style={style.row}>
                  <Text style={style.textHeading}>Checkin: </Text>
                  <Text style={style.text}>{checkin}</Text>
                </View>
              )}

              <View style={{ ...style.row, columnGap: 20 }}>
                {milage_out && (
                  <View style={style.firstRow}>
                    <Text style={style.textHeading}>Mileage Out: </Text>
                    <Text style={style.text}>{milage_out}</Text>
                  </View>
                )}

                {milage_in && (
                  <View style={style.row}>
                    <Text style={style.textHeading}>Mileage In: </Text>
                    <Text style={style.text}>{milage_in}</Text>
                  </View>
                )}
              </View>

              <View style={{ ...style.row, columnGap: 20 }}>
                {fuel_out && (
                  <View style={style.firstRow}>
                    <Text style={style.textHeading}>Fuel Out: </Text>
                    <Text style={style.text}>{fuel_out}</Text>
                  </View>
                )}
                {fuel_in && (
                  <View style={style.row}>
                    <Text style={style.textHeading}>Fuel In: </Text>
                    <Text style={style.text}>{fuel_in}</Text>
                  </View>
                )}
              </View>
            </View>
          </View>
        );
      })}
    </>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 9,
    fontFamily: "Karla",
  },
  fontBold: {
    fontWeight: "bold",
  },
  primary: {
    color: "#52a0f3",
    fontWeight: "semibold",
  },
  textHeading: {
    fontSize: 9,
    fontFamily: "Karla",
    fontWeight: "semibold",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  firstRow: {
    width: "50%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default TemplateVehicle;
