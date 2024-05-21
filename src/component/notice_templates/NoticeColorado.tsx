import { StyleSheet, Text, View } from "@dna/react-pdf";
import SignatureComponent from "../common/SignatureComponent";

type NoticeTemplate = {
  signature_image1?: string;
  signature_image2?: string;
  isSof?: boolean;
  cdw_daily_rate?: string | number
  cdw_sub_total?: string | number
  gen_from: 'mobile' | 'web';
};

const Template = ({
  signature_image1,
  signature_image2,
  isSof,
  cdw_daily_rate,
  cdw_sub_total,
  gen_from = 'mobile'
}: NoticeTemplate) => {
  return (
    <View>
      <View style={style.container}>
        <Text style={{...style.text, ...style.fontBold}}>
        NOTICE: THIS CONTRACT OFFERS, FOR AN ADDITIONAL CHARGE, A COLLISION DAMAGE WAIVER TO COVER YOUR RESPONSIBILITY FOR DAMAGE TO THE VEHICLE. YOU ARE ADVISED NOT TO SIGN THIS WAIVER IF YOU HAVE RENTAL VEHICLE COLLISION COVERAGE PROVIDED BY CERTAIN GOLD OR PLATINUM CREDIT CARDS OR COLLISION INSURANCE ON YOUR OWN VEHICLE. BEFORE DECIDING WHETHER TO PURCHASE THE COLLISION DAMAGE WAIVER, YOU MAY WISH TO DETERMINE WHETHER YOUR OWN VEHICLE INSURANCE AFFORDS YOU COVERAGE FOR DAMAGE TO THE RENTAL VEHICLE AND THE AMOUNT OF THE DEDUCTIBLE UNDER YOUR OWN INSURANCE COVERAGE. THE PURCHASE OF THIS COLLISION DAMAGE WAIVER IS NOT MANDATORY AND MAY BE WAIVED. 
        </Text>
        <Text style={style.text}>
            THE LIMITATIONS AND EXCLUSIONS THAT APPLY TO THE COLLISION DAMAGE WAIVER ARE LISTED IN PARAGRAPH 8 OF THE RENTAL AGREEMENT TERMS AND CONDITIONS
        </Text>
      </View>
      <View style={{ ...style.signatureContainer, marginTop: 10 }}>
        <SignatureComponent gen_from={gen_from} isSof={isSof} image_source={signature_image1} />
      </View>

      <Text style={{ ...style.text, marginTop: 6, ...style.fontBold }}>
      The daily cost of collision damage waiver is $<Text>{cdw_daily_rate}</Text> to $<Text>{cdw_daily_rate}</Text>
            The total estimated cost of collision damage waiver is $<Text>{cdw_sub_total}</Text>. 
      </Text>

      <Text style={{...style.text, ...style.fontBold}}>
        Failure to return the Vehicle within 72 hours of the due-in date is a felony according to Colorado Revised Statutes § 18-4-401. 
      </Text>
      <Text style={{...style.text}}>
        Pursuant to the requirements of C.R.S. 43-3-302(7)(b) and C.R.S. 42- 4-1209, You (the Renter) are liable for payment of any toll evasion violation civil penalties and any parking violation fines incurred on or after the date you take possession of the Vehicle. If such a penalty is incurred, Your name, address, and state driver`s license number will be furnished to the toll road or toll highway company (for toll violations) or to the prosecutorial division of the appropriate jurisdiction (for parking violation fines).
      </Text>
      <Text style={{...style.text,}}>
        <Text style={style.fontBold}>Notice and Acknowledgment Regarding Chain/Traction Law.</Text> You have sole responsibility for compliance with all chain/traction laws, statutes, regulations, and ordinances, including C.R.S. § 42-4-106. We make no representations or warranties that the Vehicle complies with any chain/traction law, statute, regulation, or ordinance. For more information about Colorado`s chain/traction laws, please review the Colorado Department of Transportation`s Fact Sheet-Traction Law and Passenger Vehicle Chain Law and its website at: <Text style={{color: '#1e48ba'}}>https://www.codot.gov/travel/colorado-chain-law/faq#collapse6</Text>
      </Text>
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
  fontBold:{
    fontWeight: "bold",
  
  },
  signatureContainer: {
    marginTop: 5,
    rowGap: 5,
    marginBottom: 15,
  },
});

export default Template;
