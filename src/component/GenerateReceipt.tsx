import { Document, Page, StyleSheet, View } from "@dna/react-pdf";
import { docStyles } from "../styles";

// @ts-ignore
import TemplateHeaderBox from "./common/TemplateHeaderBox";
import EstimatedCharges from "./common/EstimatedCharges";
import TemplateVehicle from "./common/TemplateVehicle";
import TemplateHeader from "./common/TemplateHeader";
import TemplateSection from "./common/TemplateSection";
import TemplateRenterInfo from "./common/TemplateRenterInfo";
import AmountCharges from "./receipt/AmountCharges";
import Points from "./receipt/Points";
import TotalCharges from "./receipt/TotalCharges";
import moment from "moment";
import TemplateVehicleReceipt from "./common/TemplateVehicleReceipt";

export const receipt = (data: any) => {
  const {
    document_type,
    header = {},
    header_boxes = {},
    renter_info = {},
    vehicle_info = [],
    estimated_charges = [],
    total_charges = 0,
    payments = [],
    points = 0,
  } = data;

  return (
    <Document style={{ display: "flex" }}>
      <Page size="LETTER" orientation="portrait" style={docStyles.page}>
        {/* header */}
        <TemplateHeader
          title={header?.title || "Receipt"}
          subTitle={header.subtitle || "GO123456"}
        />

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
              label:
                header_boxes?.left?.first_heading?.label || "Date & Time Out",
              value:
                header_boxes?.left?.first_heading?.value ||
                moment().format("MM/DD/YYYY hh:mm A"),
            }}
            second_heading={{
              label:
                header_boxes?.left?.second_heading?.label ||
                "Go Rentals Arizona Contract",
              value:
                header_boxes?.left?.second_heading?.value ||
                "Arizona Convention Center, 14th Street, Denver, CO, USA",
            }}
            contact={header_boxes?.left?.contact || "(678) 768-7687"}
            date={{
              day: header_boxes?.left?.date?.day || moment().format("DD"),
              month: header_boxes?.left?.date?.month || moment().format("MMM"),
            }}
          />

          <TemplateHeaderBox
            first_heading={{
              label:
                header_boxes?.right?.first_heading?.label || "Date & Time In",
              value:
                header_boxes?.right?.first_heading?.value ||
                moment().format("MM/DD/YYYY hh:mm A"),
            }}
            second_heading={{
              label:
                header_boxes?.right?.second_heading?.label ||
                "Go Rentals Colorado Contract",
              value:
                header_boxes?.right?.second_heading?.value ||
                "Arizona Convention Center, 14th Street, Denver, CO, USA",
            }}
            contact={header_boxes?.right?.contact || "(678) 768-7687"}
            date={{
              day: header_boxes?.right?.date?.day || moment().format("DD"),
              month: header_boxes?.right?.date?.month || moment().format("MMM"),
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
                renter: renter_info?.renter || "",
                additional_driver: renter_info?.additional_driver || "N/A",
                tail_number: renter_info?.tail_number || "N/A",
              }}
            />
          </TemplateSection>
          <TemplateSection
            title="Vehicle  Information"
            style={{ width: "70%" }}
          >
            <View style={{ rowGap: 15 }}>
              <TemplateVehicleReceipt vehicles={vehicle_info} />
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
              {estimated_charges?.map((charge: any, i: number) => {
                return (
                  <View
                    style={{ marginTop: i !== 0 ? 10 : 3 }}
                    key={charge.id || i}
                  >
                    <EstimatedCharges
                      heading={charge.headers}
                      rows={charge.rows}
                      id={charge?.id}
                      rowType={charge?.row_type}
                    />
                  </View>
                );
              })}

              {/* total charges */}
              <TotalCharges total={total_charges || 0} />
            </View>
          </TemplateSection>
          <View style={{ width: "35%" }}>
            <TemplateSection title="Payment">
              <AmountCharges
                payments={payments}
              />
            </TemplateSection>
            <TemplateSection title="Points">
              <Points points={points || 0} />
            </TemplateSection>
          </View>
        </View>
      </Page>
    </Document>
  );
};

// export const template = (data?: any, display_template: boolean) => {
//   const publicPath = display_template ? "" : public_path;

//   return (
//     <Document style={{ display: "flex" }}>
//       <Page size="LETTER" orientation="portrait" style={docStyles.page}>
//         {/* header */}
//         <TemplateHeader title="Receipt" subTitle="GO123456" path={publicPath} />

//         <View
//           style={{
//             flexDirection: "row",
//             columnGap: 10,
//             display: "flex",
//             marginTop: 20,
//           }}
//         >
//           <TemplateHeaderBox
//             first_heading={{
//               label: "Date & Time Out",
//               value: "12/12/2021 12:00 PM",
//             }}
//             second_heading={{
//               label: "Go rentals Colorado Contract",
//               value: "Colorado Convention Center, 14th Street, Denver, CO, USA",
//             }}
//             contact="(678) 768-7687"
//             date={{
//               date: "31",
//               month: "Aug",
//             }}
//           />
//           <TemplateHeaderBox
//             first_heading={{
//               label: "Date & Time In",
//               value: "Wednesday, Sep 6, 2023 10:59AM",
//             }}
//             second_heading={{
//               label: "Go Rentals Colorado Contract",
//               value: "Colorado Convention Center, 14th Street, Denver, CO, USA",
//             }}
//             contact="(678) 768-7687"
//             date={{
//               date: "30",
//               month: "Aug",
//             }}
//           />
//         </View>

//         {/* info */}
//         <View
//           style={{
//             flexDirection: "row",
//             columnGap: 10,
//             display: "flex",
//             marginTop: 10,
//           }}
//         >
//           <TemplateSection title="Renter Information" style={{ width: "30%" }}>
//             <TemplateRenterInfo
//               renters={{
//                 renter: "Shanon Miller Farmer",
//                 additional_driver: "N/A",
//                 tail_number: "N/A",
//               }}
//             />
//           </TemplateSection>
//           <TemplateSection
//             title="Vehicle  Information"
//             style={{ width: "70%" }}
//           >
//             <View style={{ rowGap: 15 }}>
//               <TemplateVehicle
//                 vehicles={[
//                   {
//                     license_no: "1234567",
//                     checkout: "12/12/2021 12:00 PM",
//                     checkin: "12/12/2021 12:00 PM",
//                     vehicle_name: "Toyota Camry 2023 Model",
//                     vin: "1234567890",
//                     fuel_in: "8/8",
//                     fuel_out: "1/2",
//                     milage_in: "4,200",
//                     milage_out: "3,200",
//                     miles_per_day: "100",
//                     unit_no: "123456",
//                     vehicle_type: "Original Exchange 1",
//                     vehicle_image: publicPath + "/images/car.png",
//                   },
//                 ]}
//               />
//             </View>
//           </TemplateSection>
//         </View>

//         <View
//           style={{
//             flexDirection: "row",
//             columnGap: 10,
//             display: "flex",
//             marginTop: 10,
//           }}
//         >
//           <TemplateSection title="Estimated Charges" style={{ width: "65%" }}>
//             <View>
//               <EstimatedCharges
//                 heading={[
//                   {
//                     label: "Vehicle Charges",
//                   },
//                   {
//                     label: "Price/Unit",
//                   },
//                   {
//                     label: "QTY",
//                   },
//                   {
//                     label: "Subtotal",
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

//               <View style={{ marginTop: 20 }}>
//                 <EstimatedCharges
//                   heading={[
//                     {
//                       label: "Coverages",
//                     },
//                     {
//                       label: "",
//                     },
//                     {
//                       label: "",
//                     },
//                     {
//                       label: "",
//                     },
//                   ]}
//                   rows={[
//                     {
//                       price_unit: "$120.00/Day",
//                       charge_name: "Daily Rate",
//                       qty: "7",
//                       subtotal: "$840.00",
//                     },
//                     {
//                       price_unit: "$40.00/Hour",
//                       charge_name: "Hourly Rate",
//                       qty: "2",
//                       subtotal: "$80.00",
//                     },
//                     {
//                       price_unit: "$720.00/Hour",
//                       charge_name: "Weekly Rate",
//                       qty: "0",
//                       subtotal: "$0.00",
//                     }
//                   ]}
//                 />
//               </View>

//               <View style={{ marginTop: 20 }}>
//                 <EstimatedCharges
//                   heading={[
//                     {
//                       label: "Fees",
//                     },
//                   ]}
//                   rows={[
//                     {
//                       price_unit: "$120.00/Day",
//                       charge_name: "Daily Rate",
//                       qty: "7",
//                       subtotal: "$840.00",
//                     },
//                     {
//                       price_unit: "$40.00/Hour",
//                       charge_name: "Hourly Rate",
//                       qty: "2",
//                       subtotal: "$80.00",
//                     },
//                     {
//                       price_unit: "$720.00/Hour",
//                       charge_name: "Weekly Rate",
//                       qty: "0",
//                       subtotal: "$0.00",
//                     },
//                     {
//                       price_unit: "$40.00/Hour",
//                       charge_name: "Hourly Rate",
//                       qty: "2",
//                       subtotal: "$80.00",
//                     },
//                     {
//                       price_unit: "$720.00/Hour",
//                       charge_name: "Weekly Rate",
//                       qty: "0",
//                       subtotal: "$0.00",
//                     },
//                     {
//                       price_unit: "$2,880.00/Hour",
//                       charge_name: "Monthly Rate",
//                       qty: "0",
//                       subtotal: "$0.00",
//                     }
//                   ]}
//                 />
//               </View>

//               {/* total charges */}
//               <TotalCharges
//                  total="30"
//                 />
//             </View>
//           </TemplateSection>
//           <View style={{ width: "35%" }}>
//             <TemplateSection title="Payment">
//               <AmountCharges
//                     amount="$2500"
//                     paymentMethod="$1,500"
//               />
//             </TemplateSection>
//             <TemplateSection title="Points">
//                 <Points
//                     points="20"
//                 />
//             </TemplateSection>

//           </View>
//         </View>
//       </Page>
//     </Document>
//   );
// };

// function TestRender() {
//   const [isClient, setIsClient] = useState(false);

//   if (!isClient) return null;

//   return template(undefined, true);
// }

// export default TestRender;
