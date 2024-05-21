import { StyleSheet, Text, View } from "@dna/react-pdf";
import SignatureComponent from "../common/SignatureComponent";

type NoticeTemplate = {
  signature_image1?: string;
  signature_image2?: string;
  isSof?: boolean;
  cdw_daily_rate?: string | number;
  cdw_sub_total?: string | number;
  gen_from: "mobile" | "web";
};

const Template = ({
  signature_image1,
  signature_image2,
  isSof,
  cdw_daily_rate,
  cdw_sub_total,
  gen_from = "mobile",
}: NoticeTemplate) => {
  return (
    <View>
      <View style={style.container}>
        <Text style={{...style.text, ...style.fontBold}}>
        This contract offers, for an additional charge, an optional collision damage waiver to cover your responsibility for damage to or loss of the rented vehicle. If you have a personal auto policy that was issued in Connecticut, it may cover collision damage, fire and theft damage to the rented vehicle, and personal injury incurred while using the rental vehicle. You should determine the extent of your coverage under your personal auto policy before deciding whether to purchase collision damage waiver. If you purchase collision damage waiver, it will not protect you. If you commit any of the acts listed in Paragraph 7 of the Terms and Conditions. 
        </Text>
      </View>
      <View style={{ ...style.signatureContainer, marginTop: 10 }}>
        <SignatureComponent isSof={isSof} image_source={signature_image1} />
      </View>
      <Text style={{ ...style.text, marginTop: 6, ...style.fontBold }}>
        The daily cost of collision damage waiver is ${cdw_daily_rate}. The annualized rate of collision damage waiver is ${cdw_sub_total}
      </Text>
      
      <Text style={{...style.text, ...style.fontBold}}>
      Warning: We may recover and repossess the Vehicle as permitted under C.G.S.A. § 14- 15c if you fail to return it within 72 hours after the expiration of this Rental Agreement.
      </Text>

      <Text style={{...style.text}}>
      Please have your privacy counsel review the following notice and update as necessary: 
      </Text>
      <Text style={{...style.text}}>
      The Vehicle may be equipped with global positioning satellite technology or another telematics system (“System”). You consent to our use of that System to monitor the Vehicle during the rental and also acknowledge that, to the extent permitted by Connecticut law, we may use the System to locate and recover the Vehicle if you violate this Agreement.
      </Text>
  
      <View style={style.signatureContainer}>
        <SignatureComponent gen_from={gen_from} isSof={isSof} image_source={signature_image2} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  fontBold: {fontWeight: "bold"},
  headingText: {
    fontSize: 9,
    fontWeight: "bold",
    fontFamily: "Karla",
    textAlign: "justify",
    lineHeight: 1.7,
  },
  text: {
    fontSize: 9,
    fontFamily: "Karla",
    textAlign: "justify",
    lineHeight: 1.7,
    marginBottom: 10,
  },
  noticeText: {
    fontSize: 9,
    fontWeight: "bold",
    lineHeight: 1.7,
    fontFamily: "Karla",
    textAlign: "justify",
    marginBottom: 8,
  },
  heading: { fontWeight: 700, fontSize: 12, fontFamily: "Karla" },
  labelText: {
    fontSize: 9,
    fontFamily: "Karla",
  },
  signatureContainer: {
    marginTop: 5,
    rowGap: 5,
    marginBottom: 15,
  },
});

export default Template;
