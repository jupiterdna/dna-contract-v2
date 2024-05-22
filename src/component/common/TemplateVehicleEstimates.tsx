/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Text, View, Image, StyleSheet } from "@dna/react-pdf";

import { docStyles } from "../../styles";

import car from "../assets/car.png";
import { public_path } from "@/utils";

type vehicleType = {
  id?: string;
  vehicle_image?: string;
  vehicle_class: string;
};

type TemplateVehicleEstimatesProps = {
  vehicles: vehicleType[];
};

const TemplateVehicleEstimates = ({
  vehicles,
}: TemplateVehicleEstimatesProps) => {
  if (!vehicles?.length) return null;

  return (
    <>
      {vehicles.map((vehicle, i) => {
        const { id, vehicle_class, vehicle_image } = vehicle;

        return (
          <View
            style={{ ...style.row, columnGap: 10, alignItems: "flex-start" }}
            key={id || i}
          >
            <Image
              src={vehicle_image || public_path + "/images/car.png"}
              style={{ ...docStyles.img, width: 60 }}
              cache={false}
            />
            <View>
              {vehicle_class ? (
                <View style={{ ...style.fontBold, ...style.text }}>
                  <Text style={style.text}>Vehicle Class: {vehicle_class}</Text>
                </View>
              ) : null}
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

export default TemplateVehicleEstimates;
