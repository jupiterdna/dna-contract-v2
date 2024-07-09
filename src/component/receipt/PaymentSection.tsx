import React from "react";
import { Text, View, StyleSheet, Font } from "@dna/react-pdf";

type paymentType = {
  label: string;
  value: string;
};

type TotalChargesProps = {
  payments?: paymentType[];
};

const PaymentSection = ({ payments }: TotalChargesProps) => {
  return (
    <View style={style.container}>
      <View style={{marginBottom: 10}}>
        <Text style={{ ...style.textheading, ...{ fontWeight: "bold" } }}>
          Payments
        </Text>
      </View>
      {payments?.map((payment, index) => {
        return (
          <View
            key={index}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <Text style={{ ...style.textheading }}>{payment.label}</Text>
            <Text style={{ ...style.textheading }}>{payment.value}</Text>
          </View>
        );
      })}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 5,
    paddingVertical: 10,
    paddingTop: 0,
    // backgroundColor: '#d6d6d6'
  },
  fontBold: {
    fontWeight: "bold",
  },
  cell: {
    padding: 7,
  },
  row: {
    backgroundColor: "#d6d6d6",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  totalContainer: {
    backgroundColor: "#222",
    color: "#fff",
    padding: 7,
    width: "35%",
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    // rowGap: 10
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textheading: {
    fontSize: 8,
    fontFamily: "Karla",
    // fontWeight: "bold",
  },
  heading: { fontWeight: 700, fontSize: 12, fontFamily: "Karla" },
});

export default PaymentSection;
