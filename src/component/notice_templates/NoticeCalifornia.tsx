import { StyleSheet, Text, View } from "@dna/react-pdf";
import SignatureComponent from "../common/SignatureComponent";

type NoticeTemplate = {
  signature_image1?: string;
  signature_image2?: string;
  isSof?: boolean;
};

const Template = ({
  signature_image1,
  signature_image2,
  isSof,
}: NoticeTemplate) => {
  return (
    <View>
      <View style={style.container}>
        <Text style={{...style.text, ...style.fontBold}}>
        The purchase of optional insurance products is not required to rent the vehicle. optional insurance products that we sell may provide coverage that duplicates coverage provided by your personal automobile liability policy or by another source of coverage. we are not qualified to evaluate the extent of your existing auto liability coverage. optional insurance products are provided under individual policies issued to you, or issued to you under a group or master policy issued to us by an insurer authorized to transact the applicable insurance business in the state of california. california department of insurance license number: okz0336. the california department of insurance maintains a toll-free consumer hotline at 1.800.927.4357 (help).
        </Text>
        <View style={{ ...style.signatureContainer, marginTop: 10, marginBottom: 10 }}>
            <SignatureComponent isSof={isSof} image_source={signature_image1} />
        </View>
        <Text style={{...style.text, ...style.fontBold}}>
        By initialing here, you acknowledge that: (a) we may activate electronic surveillance technology to locate the Vehicle if it is not returned within 72 hours of the contracted return date or extension of that date; and (b) that you were orally advised that we may activate electronic surveillance technology as described in (a).We will provide you 24 hours advance notice before activating electronic surveillance technology by telephone and electronically. You agree to receive electronic communications from us at the following email address:___
        </Text>

        <Text style={{...style.text}}>
            <Text style={style.fontBold}>Warning:</Text> We may report the Vehicle as stolen if you fail to return it within 72 hours after the expiration of this Vehicle Use Agreement. If you do not return the Vehicle when scheduled, your preferred method of contact is: <Text>_______ Email address provided elsewhere on this agreement; ______Voice message to number on file; _______ Text message to number on file </Text>
        </Text>

        <Text style={{...style.text}}>
            <Text style={style.fontBold}>Warning:</Text> Operating a motor vehicle can expose you to chemicals including engine exhaust, carbon monoxide, phthalates, and lead, which are known to the State of California to cause cancer and birth defects or other reproductive harm. To minimize exposure, avoid breathing exhaust, do not idle the engine except as necessary, and assure adequate ventilation inside the car. For more information go to <Text style={{color:'#1a7ee2'}}>www.P65Warnings.ca.gov/products/passenger-vehicle/privacy/.</Text>
        </Text>

        
      </View>
      <View style={style.signatureContainer}>
        <SignatureComponent isSof={isSof} image_source={signature_image2} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 20,
  },
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
  fontBold:
    {
        fontWeight: "bold",
    },
});

export default Template;
