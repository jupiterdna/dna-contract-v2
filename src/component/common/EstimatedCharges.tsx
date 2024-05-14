import React from "react";
import { Text, View, StyleSheet, Image } from "@dna/react-pdf";

type headingType = {
  label: string;
};

type EstimatedChargesProps = {
  heading: headingType[];
  rows: any[];
  rowType?: string;
  id?: string;
};

const getRownumber = (rows: any[]) => {
  let max = 0;
  rows.forEach((item) => {
    if (Object.values(item).length > max) {
      max = Object.values(item).length;
    }
  });
  return max;
};

const aligment = (num_row: number) => {
  return num_row === 3
    ? ["flex-start", "center", "flex-end"]
    : ["flex-start", "flex-start", "center", "flex-end"];
};

const EstimatedCharges = ({ heading, rows,id, rowType }: EstimatedChargesProps) => {
  const numRows = 100 / getRownumber(rows) === 0 ? 4 : 100 / getRownumber(rows);

  const disCountedStyle = rowType === "discount" ? { color: "#e75139" } : {};

  return (
    <View key={id}>
      <View style={styles.mainContainer}>
        {heading.map((item, index) => {
          const align: any = {
            justifyContent: aligment(getRownumber(rows))[index],
          };
          return (
            <View key={index} style={{ ...styles.row, width: `${numRows}%` }}>
              <View style={{ ...styles.content, ...align }}>
                <Text style={{...styles.textheading}}>{item.label}</Text>
              </View>
            </View>
          );
        })}
      </View>
      <View>
        {rows.map((item, index) => {
          return (
            <View key={index} style={styles.mainContainer}>
              {Object.values(item).map((value: any, in_index) => {
                const align: any = {
                  justifyContent: aligment(getRownumber(rows))[in_index],
                };

                return (
                  <View
                    key={in_index}
                    style={{ ...styles.row, width: `${numRows}%` }}
                  >
                    <View style={{ ...styles.content, ...align }}>
                      <Text style={{ ...styles.text,...disCountedStyle}}>{value}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    flexDirection: "row",
    columnGap: 10,
  },
  content: {
    columnGap: 3,
    width: "100%",
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
    columnGap: 3,
    justifyContent: "space-between",
    marginBottom: 5,
    paddingHorizontal: 3,
    paddingBottom: 3,
  },
  textheading: {
    fontSize: 9,
    fontFamily: "Karla",
    fontWeight: "bold",
  },
  text: {
    fontSize: 8,
    fontFamily: "Karla",
  },
  //   content:{
  //     paddingVertical: 10,
  //     lineHeight: 1.3
  //   },
  //   container:{
  //       border: '1px solid black',
  //       padding: 5,
  //       width: '100%',
  //       position:'relative',
  //       paddingBottom: 10
  //   },
  //   headingContainer:{
  //     backgroundColor: 'black',
  //     color: 'white',
  //    padding: 5,
  //    paddingLeft: 5,
  //     textTransform: 'uppercase'
  //   },
  // headingText:{
  //   fontSize: 10,
  //   fontWeight: 'bold'
  // },
  // text:{
  //   fontSize: 8
  // },
  // heading: {fontWeight: 300, fontSize: 12}
});

export default EstimatedCharges;
