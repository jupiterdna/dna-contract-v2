
import React from "react";
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import { docStyles } from "../../styles";
import SignatureComponent from "../common/SignatureComponent";
import TemplateSection from "../common/TemplateSection";
import ComponentRenderer from "../templates/ComponentRenderer";

type RentalAgreementProps = {
  title: string;
  state?: 'colorado' | 'arizona'
};

const RentalAgreement = ({ title, state='arizona' }: RentalAgreementProps) => {

  return <ComponentRenderer  state={state} title={title}/>
  
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
    marginBottom: 3,
  },
  text: {
    fontSize: 9,
    fontFamily: "Karla",
    textAlign: "justify",
    lineHeight: 1.7,
    marginBottom: 10,
    fontWeight: "normal",
  },
  textcontainer: { marginBottom: 8 },
  noticeText: {
    fontSize: 9,
    fontWeight: "bold",
    lineHeight: 1.7,
    fontFamily: "Karla",
    textAlign: "justify",
    marginBottom: 8,
  },
  underline: {
    textDecoration: "underline",
  },
  textNormal: {
    fontWeight: "normal",
  },
  textBold: {
    fontWeight: "bold",
  },
  indented: {},
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

export default RentalAgreement;
