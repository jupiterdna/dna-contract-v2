import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
  Image,
  Font,
} from "@dna/react-pdf";
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
import { BASE_URL, public_path } from "@/utils";
import { agreementText } from "./data";
import HeadingSection from "./contract/HeadingSection";

const image_path = `${BASE_URL}images`;
// const image_path = `https://dna-contract-development.vercel.app/images`

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
    optional_insurance_policies = {},
    converage_info = [],
    agreement = {},
    footer_info = {},
    isSof = false,
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
            contact={header_boxes?.left?.contact || ""}
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
                `Go Rentals ${state} Contract`,
              value:
                header_boxes?.right?.second_heading?.value ||
                `${state} Convention Center, 14th Street, Denver, CO, USA`,
            }}
            contact={header_boxes?.right?.contact || ""}
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
                  src={
                    vehicle_damage?.vehicle_image ||
                    "" ||
                    image_path + "/vehicle_damage_marks.png"
                  }
                  style={{ ...docStyles.img, width: "96%" }}
                  cache={false}
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <TemplateVehicleDamage
                  vehicle_image={vehicle_damage?.vehicle_image || ""}
                  damage={vehicle_damage?.damage || {}}
                  signature_image={vehicle_damage?.signature_image || ""}
                  isSof={isSof}
                />
              </View>
            </View>
          </TemplateSection>
          {/* estimated charges section */}
          <TemplateSection title="Estimated Charges" style={{ width: "70%" }}>
            {estimated_charges?.map((charge: any, i: number) => {
              return (
                <View
                  style={{ marginTop: i !== 0 ? 4 : 5 }}
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
          </TemplateSection>
        </View>
        {/* notice template */}
        <NoticeTemplate
          signature_image1={notice_info?.signature_image || ""}
          signature_image2={optional_insurance_policies?.signature_image || ""}
          isSof={isSof}
          state={state?.toLowerCase()}
          cdw_sub_total={notice_info?.cdw_sub_total || 0}
          cdw_daily_rate={notice_info?.cdw_daily_rate || 0}
        />

        {/* <View style={{height:270,backgroundColor: 'red'}}></View> */}

        {/* coverages */}
        <View style={{ marginTop: 20 }}>
          <HeadingSection text="Coverage" />
          <Coverage data={converage_info} isSof={isSof} />
        </View>
        {/* agreement */}
        <View style={{ marginTop: 5 }}>
          <HeadingSection text="Agreement" />
          <Agreement
            content={agreement?.content || agreementText(state?.toLowerCase())}
            renter_signature={agreement?.signature_image}
            additional_signatures={agreement?.additional_signatures}
            isSof={isSof}
          />
        </View>

        {/* rental agreement */}
        <View
          style={{
            marginTop: 15,
          }}
        >
          <RentalAgreement
            title={
              agreement?.title ||
              `GO RENTALS RENTAL AGREEMENT TERMS AND CONDITIONS - ${state}`
            }
            state={state.toLowerCase()}
          />
        </View>

        <View
          style={{
            marginTop: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              // alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <SignatureComponent
              isSof={isSof}
              image_source={footer_info?.signature_image}
              label="Renter's Signature"
            />
            <DateComponent
              label="Date "
              value={footer_info?.date || moment().format("MM-DD-YYYY")}
            />
          </View>
        </View>
      </Page>
    </Document>
  );
};
