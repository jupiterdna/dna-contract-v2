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

import vehicle_screenshot from "../assets/vehicle_damage_marks.png";
// @ts-ignore
import TemplateHeaderBox from "./common/TemplateHeaderBox";
import EstimatedCharges from "./common/EstimatedCharges";
import NoticeTemplate from "./contract/NoticeTemplate";
import Coverage from "./contract/Coverage";
import Agreement from "./contract/Agreement";
import TemplateVehicle from "./common/TemplateVehicle";
import RentalAgreement from "./contract/RentalAgreement";
import SignatureComponent from "./common/SignatureComponent";
import DateComponent from "./DateComponent";
import TemplateHeader from "./common/TemplateHeader";
import TemplateSection from "./common/TemplateSection";
import TemplateRenterInfo from "./common/TemplateRenterInfo";
import TemplateVehicleDamage from "./contract/TemplateVehicleDamage";
import { public_path } from "@/utils";
import AmountCharges from "./receipt/AmountCharges";
import Points from "./receipt/Points";
import TotalCharges from "./receipt/TotalCharges";

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;

const image_path = `http://${host}:${port}/images`;

const style = StyleSheet.create({
  text: {
    fontSize: 8,
    fontFamily: "Karla",
  },
  textHeading: {
    fontSize: 9,
    fontFamily: "Karla",
    fontWeight: "bold",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export const template = (data?: any, display_template: boolean) => {
  const publicPath = display_template ? "" : public_path;

  return (
    <Document style={{ display: "flex" }}>
      <Page size="LETTER" orientation="portrait" style={docStyles.page}>
        {/* header */}
        <TemplateHeader title="Receipt" subTitle="GO123456" path={publicPath} />

        <View
          style={{
            flexDirection: "row",
            columnGap: 10,
            display: "flex",
            marginTop: 20,
          }}
        >
          <TemplateHeaderBox
            first_heading={{
              label: "Date & Time Out",
              value: "12/12/2021 12:00 PM",
            }}
            second_heading={{
              label: "Go rentals Colorado Contract",
              value: "Colorado Convention Center, 14th Street, Denver, CO, USA",
            }}
            contact="(678) 768-7687"
            date={{
              date: "31",
              month: "Aug",
            }}
          />
          <TemplateHeaderBox
            first_heading={{
              label: "Date & Time In",
              value: "Wednesday, Sep 6, 2023 10:59AM",
            }}
            second_heading={{
              label: "Go Rentals Colorado Contract",
              value: "Colorado Convention Center, 14th Street, Denver, CO, USA",
            }}
            contact="(678) 768-7687"
            date={{
              date: "30",
              month: "Aug",
            }}
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
          <TemplateSection title="Renter Information" style={{ width: "30%" }}>
            <TemplateRenterInfo
              renters={{
                renter: "Shanon Miller Farmer",
                additional_driver: "N/A",
                tail_number: "N/A",
              }}
            />
          </TemplateSection>
          <TemplateSection
            title="Vehicle  Information"
            style={{ width: "70%" }}
          >
            <View style={{ rowGap: 15 }}>
              <TemplateVehicle
                vehicles={[
                  {
                    license_no: "1234567",
                    checkout: "12/12/2021 12:00 PM",
                    checkin: "12/12/2021 12:00 PM",
                    vehicle_name: "Toyota Camry 2023 Model",
                    vin: "1234567890",
                    fuel_in: "8/8",
                    fuel_out: "1/2",
                    milage_in: "4,200",
                    milage_out: "3,200",
                    miles_per_day: "100",
                    unit_no: "123456",
                    vehicle_type: "Original Exchange 1",
                    vehicle_image: publicPath + "/images/car.png",
                  },
                ]}
              />
            </View>
          </TemplateSection>
        </View>

        <View
          style={{
            flexDirection: "row",
            columnGap: 10,
            display: "flex",
            marginTop: 10,
          }}
        >
          <TemplateSection title="Estimated Charges" style={{ width: "65%" }}>
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
                    price_unit: "$120.00/Day",
                    charge_name: "Daily Rate",
                    qty: "7",
                    subtotal: "$840.00",
                  },
                  {
                    price_unit: "$720.00/Hour",
                    charge_name: "Weekly Rate",
                    qty: "0",
                    subtotal: "$0.00",
                  },
                  {
                    price_unit: "$2,880.00/Hour",
                    charge_name: "Monthly Rate",
                    qty: "0",
                    subtotal: "$0.00",
                  },
                ]}
              />

              <View style={{ marginTop: 20 }}>
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
                      price_unit: "$120.00/Day",
                      charge_name: "Daily Rate",
                      qty: "7",
                      subtotal: "$840.00",
                    },
                    {
                      price_unit: "$40.00/Hour",
                      charge_name: "Hourly Rate",
                      qty: "2",
                      subtotal: "$80.00",
                    },
                    {
                      price_unit: "$720.00/Hour",
                      charge_name: "Weekly Rate",
                      qty: "0",
                      subtotal: "$0.00",
                    }
                  ]}
                />
              </View>

              <View style={{ marginTop: 20 }}>
                <EstimatedCharges
                  heading={[
                    {
                      label: "Fees",
                    },
                  ]}
                  rows={[
                    {
                      price_unit: "$120.00/Day",
                      charge_name: "Daily Rate",
                      qty: "7",
                      subtotal: "$840.00",
                    },
                    {
                      price_unit: "$40.00/Hour",
                      charge_name: "Hourly Rate",
                      qty: "2",
                      subtotal: "$80.00",
                    },
                    {
                      price_unit: "$720.00/Hour",
                      charge_name: "Weekly Rate",
                      qty: "0",
                      subtotal: "$0.00",
                    },
                    {
                      price_unit: "$40.00/Hour",
                      charge_name: "Hourly Rate",
                      qty: "2",
                      subtotal: "$80.00",
                    },
                    {
                      price_unit: "$720.00/Hour",
                      charge_name: "Weekly Rate",
                      qty: "0",
                      subtotal: "$0.00",
                    },
                    {
                      price_unit: "$2,880.00/Hour",
                      charge_name: "Monthly Rate",
                      qty: "0",
                      subtotal: "$0.00",
                    }
                  ]}
                />
              </View>

              {/* total charges */}
              <TotalCharges 
                 total="30"
                />
            </View>
          </TemplateSection>
          <View style={{ width: "35%" }}>
            <TemplateSection title="Payment">
              <AmountCharges 
                    amount="$2500"
                    paymentMethod="$1,500"
              />
            </TemplateSection>
            <TemplateSection title="Points">
                <Points 
                    points="20"
                />
            </TemplateSection>
            
          </View>
        </View>
      </Page>
    </Document>
  );
};

function TestRender() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return template(undefined, true);
}

export default TestRender;
