
import React from "react";
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import { docStyles } from "../../styles";
import SignatureComponent from "../common/SignatureComponent";

type NoticeTemplate = {
  signature_image1?: string;
  signature_image2?: string;
};

const NoticeTemplate = ({signature_image1, signature_image2}: NoticeTemplate) => {
  return (
    <View>
      <View style={style.container}>
        <Text style={style.text}>
          You will be in violation of A.R.S. § 13-1806 if the Vehicle is not
          returned within 72 hours of the date and time the Vehicle is due back.
          If you fail to return the Vehicle within 72 hours of the date and time
          due in, you may be found guilty of a Class 5 felony that could result
          in a fine of up to $150,000 per charge and/or imprisonment of up to 2
          years for the first offense.
        </Text>
        <Text style={style.headingText}>
          THE OWNER DOES NOT EXTEND ANY OF ITS MOTOR VEHICLE FINANCIAL
          RESPONSIBILITY OR PROVIDE PUBLIC LIABILITY INSURANCE COVERAGE TO THE
          RENTER, AUTHORIZED DRIVERS OR ANY OTHER DRIVER.
        </Text>
      </View>
      <View style={{...style.signatureContainer, marginTop: 10}}>
        <SignatureComponent image_source={signature_image1}/>
      </View>

      <Text style={{...style.text, marginTop: 6}}>
        NOTICE: Our liability insurance does not cover injuries to passengers in
        the Vehicle.{" "}
      </Text>

      <Text style={style.noticeText}>OPTIONAL INSURANCE POLICIES</Text>

      <Text style={style.text}>
        Any optional insurance policies that we offer may provide a duplication
        of coverage already provided by your personal automobile insurance
        policy or by another source of coverage. You are not required to
        purchase any insurance from us in order to rent the Vehicle.
      </Text>

      <View style={style.signatureContainer}>
        <SignatureComponent image_source={signature_image2}/>
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
    marginBottom: 15
  },
});

export default NoticeTemplate;
