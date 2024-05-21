import React from "react";
import { Text, View, StyleSheet, Font } from "@dna/react-pdf";
import { docStyles } from "../../styles";
import SignatureComponent from "../common/SignatureComponent";
import NoticeRenderer from "../notice_templates/NoticeRenderer";
import { stateType } from "../types";

type NoticeTemplate = {
  signature_image1?: string;
  signature_image2?: string;
  isSof?: boolean;
  state?: stateType
  cdw_daily_rate?: string | number
  cdw_sub_total?: string | number
  gen_from: 'mobile' | 'web';
};

const NoticeTemplate = ({
  signature_image1,
  signature_image2,
  isSof,
  state = "arizona",
  cdw_daily_rate,
  cdw_sub_total,
  gen_from = 'mobile'
}: NoticeTemplate) => {
  return (
    <NoticeRenderer
      state={state}
      signature_image1={signature_image1}
      signature_image2={signature_image2}
      isSof={isSof}
      gen_from={gen_from}
      cdw_daily_rate={cdw_daily_rate}
      cdw_sub_total={cdw_sub_total}
    />
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
});

export default NoticeTemplate;
