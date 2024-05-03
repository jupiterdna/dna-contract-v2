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
import TemplateHeaderBox from "./common/TemplateHeaderBox";
import VehicleDamage from "./contract/VehicleDamage";
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

const host = process.env.HOST || 'localhost';
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


export const testTemplate  = (

  <Document style={{ display: "flex" }}>
    <Page>
        <View>
          <Text>sdfsdfsdf</Text>
        </View>
    </Page>
  </Document>
  
)

// export const template = (data?: any, display_template: boolean) => {

//   const publicPath = display_template ? '' : public_path

//   return (
//     <Document style={{ display: "flex" }}>
//     <Page size="LETTER" orientation="portrait" style={docStyles.page}>
//       {/* header */}
//       <TemplateHeader
//         title="Colorado Rental Agreement"
//         subTitle="Agreement #: GO123456"
//         path={publicPath}
//       />

//       <View
//         style={{
//           flexDirection: "row",
//           columnGap: 10,
//           display: "flex",
//           marginTop: 20,
//         }}
//       >
//         <TemplateHeaderBox
//           first_heading={{
//             label: "Date & Time Out",
//             value: "12/12/2021 12:00 PM",
//           }}
//           second_heading={{
//             label: "Go rentals Colorado Contract",
//             value: "Colorado Convention Center, 14th Street, Denver, CO, USA",
//           }}
//           contact="(678) 768-7687"
//           date={{
//             date: "31",
//             month: "Aug",
//           }}
//         />
//         <TemplateHeaderBox
//           first_heading={{
//             label: "Date & Time In",
//             value: "Wednesday, Sep 6, 2023 10:59AM",
//           }}
//           second_heading={{
//             label: "Go Rentals Colorado Contract",
//             value: "Colorado Convention Center, 14th Street, Denver, CO, USA",
//           }}
//           contact="(678) 768-7687"
//           date={{
//             date: "30",
//             month: "Aug",
//           }}
//         />
//       </View>

//       {/* info */}
//       <View
//         style={{
//           flexDirection: "row",
//           columnGap: 10,
//           display: "flex",
//           marginTop: 10,
//         }}
//       >
//         <TemplateSection title="Renter Information" style={{ width: "30%" }}>
//           <TemplateRenterInfo
//             renters={{
//               renter: "Shanon Miller Farmer",
//               additional_driver: "N/A",
//               tail_number: "N/A",
//             }}
//           />
//         </TemplateSection>
//         <TemplateSection
//           title="Vehicle  Information"
//           style={{ width: "70%" }}
//         >
//           <View style={{ rowGap: 15 }}>
//             <TemplateVehicle
//               vehicles={[
//                 {
//                   license_no: "1234567",
//                   checkout: "12/12/2021 12:00 PM",
//                   checkin: "12/12/2021 12:00 PM",
//                   vehicle_name: "Toyota Camry 2023 Model",
//                   vin: "1234567890",
//                   fuel_in: "8/8",
//                   fuel_out: "1/2",
//                   milage_in: "4,200",
//                   milage_out: "3,200",
//                   miles_per_day: "100",
//                   unit_no: "123456",
//                   vehicle_type: "Original Exchange 1",
//                   vehicle_image: publicPath + '/images/car.png',
//                 },
//                 {
//                   license_no: "1234567",
//                   checkout: "12/12/2021 12:00 PM",
//                   checkin: "12/12/2021 12:00 PM",
//                   vehicle_name: "Toyota Camry",
//                   vin: "1234567890",
//                   fuel_in: "8/8",
//                   fuel_out: "1/2",
//                   milage_in: "4,200",
//                   milage_out: "3,200",
//                   miles_per_day: "100",
//                   unit_no: "123456",
//                   vehicle_type: "Vehicle Exchange 1",
//                   vehicle_image: publicPath + '/images/car.png',
//                 },
//               ]}
//             />
//           </View>
//         </TemplateSection>
//       </View>

//       <View
//         style={{
//           flexDirection: "row",
//           columnGap: 10,
//           display: "flex",
//           marginTop: 10,
//         }}
//       >
//         <TemplateSection title="Vehicle Damage" style={{ width: "30%" }}>
//           <View>
//             <View
//               style={{
//                 ...style.row,
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <Image
//                 src={image_path + '/vehicle_damage_marks.png'}
//                 style={{ ...docStyles.img, width: "96%" }}
//                 cache={false}
//               />
//             </View>
//             <View style={{ marginTop: 20 }}>
//               <TemplateVehicleDamage
//                 path={publicPath}
//                 damage={{
//                   chip: 1,
//                   crack: 5,
//                   dent: 2,
//                   missing: 0,
//                   paint_swap: 0,
//                   scratch: 2,
//                 }}
//               />
//             </View>
//           </View>
//         </TemplateSection>
//         <TemplateSection title="Estimated Charges" style={{ width: "70%" }}>
//           <View>
//             <EstimatedCharges
//               heading={[
//                 {
//                   label: "Vehicle Charges",
//                 },
//                 {
//                   label: "Price/Unit",
//                 },
//                 {
//                   label: "QTY",
//                 },
//                 {
//                   label: "Subtotal",
//                 },
//               ]}
//               rows={[
//                 {
//                   price_unit: "$120.00/Day",
//                   charge_name: "Daily Rate",
//                   qty: "7",
//                   subtotal: "$840.00",
//                 },
//                 {
//                   price_unit: "$40.00/Hour",
//                   charge_name: "Hourly Rate",
//                   qty: "2",
//                   subtotal: "$80.00",
//                 },
//                 {
//                   price_unit: "$720.00/Hour",
//                   charge_name: "Weekly Rate",
//                   qty: "0",
//                   subtotal: "$0.00",
//                 },
//                 {
//                   price_unit: "$2,880.00/Hour",
//                   charge_name: "Monthly Rate",
//                   qty: "0",
//                   subtotal: "$0.00",
//                 },
//                 {
//                   price_unit: "$120.00/Day",
//                   charge_name: "Daily Rate",
//                   qty: "7",
//                   subtotal: "$840.00",
//                 },
//                 {
//                   price_unit: "$40.00/Hour",
//                   charge_name: "Hourly Rate",
//                   qty: "2",
//                   subtotal: "$80.00",
//                 },
//                 {
//                   price_unit: "$720.00/Hour",
//                   charge_name: "Weekly Rate",
//                   qty: "0",
//                   subtotal: "$0.00",
//                 },
//                 {
//                   price_unit: "$2,880.00/Hour",
//                   charge_name: "Monthly Rate",
//                   qty: "0",
//                   subtotal: "$0.00",
//                 },
//                 {
//                   price_unit: "$120.00/Day",
//                   charge_name: "Daily Rate",
//                   qty: "7",
//                   subtotal: "$840.00",
//                 },
//                 {
//                   price_unit: "$40.00/Hour",
//                   charge_name: "Hourly Rate",
//                   qty: "2",
//                   subtotal: "$80.00",
//                 },
//                 {
//                   price_unit: "$720.00/Hour",
//                   charge_name: "Weekly Rate",
//                   qty: "0",
//                   subtotal: "$0.00",
//                 },
//                 {
//                   price_unit: "$2,880.00/Hour",
//                   charge_name: "Monthly Rate",
//                   qty: "0",
//                   subtotal: "$0.00",
//                 },
//               ]}
//             />

//             <View style={{ marginTop: 20 }}>
//               <EstimatedCharges
//                 heading={[
//                   {
//                     label: "Coverages",
//                   },
//                   {
//                     label: "",
//                   },
//                   {
//                     label: "",
//                   },
//                   {
//                     label: "",
//                   },
//                 ]}
//                 rows={[
//                   {
//                     price_unit: "$120.00/Day",
//                     charge_name: "Daily Rate",
//                     qty: "7",
//                     subtotal: "$840.00",
//                   },
//                   {
//                     price_unit: "$40.00/Hour",
//                     charge_name: "Hourly Rate",
//                     qty: "2",
//                     subtotal: "$80.00",
//                   },
//                   {
//                     price_unit: "$720.00/Hour",
//                     charge_name: "Weekly Rate",
//                     qty: "0",
//                     subtotal: "$0.00",
//                   },
//                   {
//                     price_unit: "$2,880.00/Hour",
//                     charge_name: "Monthly Rate",
//                     qty: "0",
//                     subtotal: "$0.00",
//                   },
//                   {
//                     price_unit: "$120.00/Day",
//                     charge_name: "Daily Rate",
//                     qty: "7",
//                     subtotal: "$840.00",
//                   },
//                   {
//                     price_unit: "$40.00/Hour",
//                     charge_name: "Hourly Rate",
//                     qty: "2",
//                     subtotal: "$80.00",
//                   },
//                   {
//                     price_unit: "$720.00/Hour",
//                     charge_name: "Weekly Rate",
//                     qty: "0",
//                     subtotal: "$0.00",
//                   },
//                   {
//                     price_unit: "$2,880.00/Hour",
//                     charge_name: "Monthly Rate",
//                     qty: "0",
//                     subtotal: "$0.00",
//                   },
//                 ]}
//               />
//             </View>

//             <View style={{ marginTop: 20 }}>
//               <EstimatedCharges
//                 heading={[
//                   {
//                     label: "Fees",
//                   },
//                 ]}
//                 rows={[
//                   {
//                     price_unit: "$120.00/Day",
//                     charge_name: "Daily Rate",
//                     qty: "7",
//                     subtotal: "$840.00",
//                   },
//                   {
//                     price_unit: "$40.00/Hour",
//                     charge_name: "Hourly Rate",
//                     qty: "2",
//                     subtotal: "$80.00",
//                   },
//                   {
//                     price_unit: "$720.00/Hour",
//                     charge_name: "Weekly Rate",
//                     qty: "0",
//                     subtotal: "$0.00",
//                   },
//                   {
//                     price_unit: "$2,880.00/Hour",
//                     charge_name: "Monthly Rate",
//                     qty: "0",
//                     subtotal: "$0.00",
//                   },
//                   {
//                     price_unit: "$120.00/Day",
//                     charge_name: "Daily Rate",
//                     qty: "7",
//                     subtotal: "$840.00",
//                   },
//                   {
//                     price_unit: "$40.00/Hour",
//                     charge_name: "Hourly Rate",
//                     qty: "2",
//                     subtotal: "$80.00",
//                   },
//                   {
//                     price_unit: "$720.00/Hour",
//                     charge_name: "Weekly Rate",
//                     qty: "0",
//                     subtotal: "$0.00",
//                   },
//                   {
//                     price_unit: "$2,880.00/Hour",
//                     charge_name: "Monthly Rate",
//                     qty: "0",
//                     subtotal: "$0.00",
//                   },
//                   {
//                     price_unit: "$120.00/Day",
//                     charge_name: "Daily Rate",
//                     qty: "7",
//                     subtotal: "$840.00",
//                   },
//                   {
//                     price_unit: "$40.00/Hour",
//                     charge_name: "Hourly Rate",
//                     qty: "2",
//                     subtotal: "$80.00",
//                   },
//                   {
//                     price_unit: "$720.00/Hour",
//                     charge_name: "Weekly Rate",
//                     qty: "0",
//                     subtotal: "$0.00",
//                   },
//                   {
//                     price_unit: "$2,880.00/Hour",
//                     charge_name: "Monthly Rate",
//                     qty: "0",
//                     subtotal: "$0.00",
//                   },
//                 ]}
//               />
//             </View>
//           </View>
//         </TemplateSection>
//       </View>
//       <NoticeTemplate />

//       {/* coverages */}
//       <View style={{ marginTop: 15 }}>
//         <TemplateSection title="Coverage" />
//         <Coverage
//           data={[
//             {
//               title: "Collision Damage Waiver (CDW)",
//               signature_type: "accept",
//               signature_id: "cdw_123",
//               onSignatureClick: () =>
//                 alert("Handle accept signature click here..."),
//               description: `If you initial “accept,” you agree to purchase CDW and, subject to the provisions of Para-graph 8 of the Terms and Conditions, we will waive your financial responsibility for collision damage to the Vehicle. There are exclusions. See paragraph 8 of the Rental Agreement Terms and Conditions (or Master Rental Agreement Terms and Conditions, if applicable) for additional information. If you initial “decline,” you decline to purchase CDW, and you will be responsible for all damage to or loss of the Vehicle. See paragraph 5 of the Rental Agreement Terms and Conditions (or paragraph 6 of the Master Rental Agreement Terms and Conditions if applicable) for additional information on your responsibility for damage.`,
//             },
//             {
//               title:
//                 "Personal Accident Insurance/Personal Effects Coverage (PAI/PEC)",
//               signature_type: "decline",
//               signature_id: "pai_pec_123",
//               onSignatureClick: () =>
//                 alert("Handle decline signature click here..."),
//               description: `If you accept, you agree to purchase PAI/PEC. A summary of the terms of the PAI/PEC insur-ance policy is contained in a separate brochure that you acknowledge receiving.`,
//             },
//             {
//               title:
//                 "Renter's Liability Protection (RLP) and Supplemental Liability Insurance (SLI)",
//               signature_type: "decline",
//               signature_id: "rlp_sli_123",
//               onSignatureClick: () =>
//                 alert("Handle decline signature click here..."),
//               description: `If you initial "accept," you agree to purchase RLP and SLI. RLP provides primary liability cov-erage up to the minimum financial responsibility limits of the State of Colorado. A sum-mary of the terms of the RLP policy and SLI policy are contained in separate brochures that you acknowledge receiving. RLP and SLI do not cover all risks. There are exclusions for unauthorized drivers, driving while intoxicated, and other conditions. There is no first party uninsured motorist coverage, and there may be no coverage for passengers in the Vehicle. If you initial "decline," you decline to purchase SLI, and you agree to be primarily responsible for all injury or damage you cause to others or their property. Please read the brochure carefully.`,
//             },
//           ]}
//         />
//       </View>
//       {/* agreement */}
//       <View style={{ marginTop: 15 }}>
//         <TemplateSection title="Agreement" />
//         <Agreement
//           content={`By signing below, you certify that you (1) had the opportunity to read, and that you agree to, the terms and conditions of this agreement as set forth on this Rental Agreement Face Page and in either the Rental Agreement Terms and Conditions or the Master Rental Terms and Conditions (the “Agreement”), (2) authorize us to process a separate payment card transaction in your name for all Charges, (3) authorize us to release your billing and rental information to a third-party processor for billing and processing purposes; (4) authorize us or a third-party processor to charge your payment card account after the rental concludes for any Tolls or Violations assessed against you, us or the Vehicle during this rental plus taxes, administrative fees of up to $50 per Toll or Violation, convenience fees, service charges, and related fees; (5) accept or decline Optional Products as shown on the Face Page; (6) understand that all Charges are subject to our final audit and authorize us to adjust your payment card account to reflect changes resulting from our audit; (7) understand that the purchase of optional insurance products or CDW is not required to rent the Vehicle, and that the optional insurance products and CDW that we offer may duplicate coverage provided by your personal automobile insurance policy or another source of coverage; and (8) agree to our collection and use of vehicle data and texting and calling terms as described in Paragraphs 15 and 17 of the Rental Agreement Terms and Conditions (or the Master Rental Agreement Terms and Conditions if applicable).`}
//         />
//       </View>

//       {/* rental agreement */}
//       <View
//         style={{
//           marginTop: 15,
//         }}
//       >
//         <RentalAgreement title="GO RENTALS RENTAL AGREEMENT TERMS AND CONDITIONS - COLORADO" />
//       </View>

//       <View
//         style={{
//           marginTop: 10,
//         }}
//       >
//         <View style={{ ...style.row, justifyContent: "space-between" }}>
//           <SignatureComponent image_source="" label="Renter's Signature" />
//           <DateComponent label="Date" />
//         </View>
//       </View>
//     </Page>
//   </Document>
//   )
// }

// function TestRender() {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) return null;

//   return (
//     template(undefined, true)
//   )

// }


// export default TestRender;
