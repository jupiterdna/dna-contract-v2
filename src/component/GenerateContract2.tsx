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
import moment from "moment";

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

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;

const image_path = `${host}:${port}/images`;

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

const publicPath = public_path;

export const temp = (data: any) => {
  const {
    document_type,
    state = "Arizona",
    header = {},
    header_boxes = {},
    renter_info = {},
    vehicle_info = [],
    vehicle_damage = {},
    estimated_charges = [],
    notice_info = {},
    optional_insurance_policies={},
    converage_info=[],
    agreement={},
    footer_info={}
  } = data;


  return (
    <Document style={{ display: "flex" }}>
      <Page size="LETTER" orientation="portrait" style={docStyles.page}>
        {/* header */}
        <TemplateHeader
          title={header?.title || `${state} Rental Agreement`}
          subTitle={header.subtitle || ""}
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
                `Go Rentals ${state} Contract`,
              value:
                header_boxes?.left?.second_heading?.value ||
                `${state} Convention Center, 14th Street, Denver, CO, USA`,
            }}
            contact={header_boxes?.left?.contact || "(678) 768-7687"}
            date={{
              date: header_boxes?.left?.date?.date || moment().format("DD"),
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
                `Go Rentals ${state} Contract`,
              value:
                header_boxes?.right?.second_heading?.value ||
                `${state} Convention Center, 14th Street, Denver, CO, USA`,
            }}
            contact={header_boxes?.right?.contact || "(678) 768-7687"}
            date={{
              date: header_boxes?.right?.date?.date || moment().format("DD"),
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
              <TemplateVehicle vehicles={vehicle_info} />
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
          <TemplateSection title="Vehicle Damage" style={{ width: "30%" }}>
            <View>
              <View
                style={{
                  ...style.row,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={(vehicle_damage?.vehicle_image || "") || image_path + "/vehicle_damage_marks.png"}
                  style={{ ...docStyles.img, width: "96%" }}
                  cache={false}
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <TemplateVehicleDamage
                  vehicle_image={vehicle_damage?.vehicle_image || ""}
                  damage={vehicle_damage?.damage || {}}
                  signature_image={vehicle_damage?.signature_image || ""}
                />
              </View>
            </View>
          </TemplateSection>
          {/* estimated charges section */}
          <TemplateSection title="Estimated Charges" style={{ width: "70%" }}>
            {estimated_charges?.map((charge: any, i: number) => {
              return (
                <View style={{ marginTop: i!==0 ? 20 : 10 }} key={charge.id || i}>
                  <EstimatedCharges
                    heading={charge.headers}
                    rows={charge.rows}
                    id={charge?.id}
                    rowType={charge?.row_type}
                  />
                </View>
              );
            })}
          </TemplateSection>
        </View>
          {/* notice template */}
        <NoticeTemplate 
            signature_image1={notice_info?.signature_image || ""}
            signature_image2={optional_insurance_policies?.signature_image || ""}
        />

        {/* coverages */}
        <View style={{ marginTop: 15 }}>
          <TemplateSection title="Coverage" />
          <Coverage
            data={converage_info}
          />
        </View>
        {/* agreement */}
        <View style={{ marginTop: 15 }}>
          <TemplateSection title="Agreement" />
          <Agreement
            content={agreement?.content  || `By signing below, you certify that you (1) had the opportunity to read, and that you agree to, the terms and conditions of this agreement as set forth on this Rental Agreement Face Page and in either the Rental Agreement Terms and Conditions or the Master Rental Terms and Conditions (the “Agreement”), (2) authorize us to process a separate payment card transaction in your name for all Charges, (3) authorize us to release your billing and rental information to a third-party processor for billing and processing purposes; (4) authorize us or a third-party processor to charge your payment card account after the rental concludes for any Tolls or Violations assessed against you, us or the Vehicle during this rental plus taxes, administrative fees of up to $50 per Toll or Violation, convenience fees, service charges, and related fees; (5) accept or decline Optional Products as shown on the Face Page; (6) understand that all Charges are subject to our final audit and authorize us to adjust your payment card account to reflect changes resulting from our audit; (7) understand that the purchase of optional insurance products or CDW is not required to rent the Vehicle, and that the optional insurance products and CDW that we offer may duplicate coverage provided by your personal automobile insurance policy or another source of coverage; and (8) agree to our collection and use of vehicle data and texting and calling terms as described in Paragraphs 15 and 17 of the Rental Agreement Terms and Conditions (or the Master Rental Agreement Terms and Conditions if applicable).`}
            renter_signature={agreement?.signature_image}
            additional_signatures={agreement?.additional_signatures}
          />
        </View>

        {/* rental agreement */}
        <View
          style={{
            marginTop: 15,
          }}
        >
          <RentalAgreement title={agreement?.title || `GO RENTALS RENTAL AGREEMENT TERMS AND CONDITIONS - ${state}`} state={state.toLowerCase()} />
        </View>

        <View
          style={{
            marginTop: 10,
          }}
        >
          <View style={{ ...style.row, justifyContent: "space-between" }}>
            <SignatureComponent image_source={footer_info?.signature_image} label="Renter's Signature" />
            <DateComponent label="Date " value={footer_info?.date || moment().format('MM-DD-YYYY')}/>
          </View>
        </View>
      </Page>
    </Document>
  );
};
