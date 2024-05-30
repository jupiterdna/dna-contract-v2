import React from "react";
import { Text, View, StyleSheet, Image } from "@dna/react-pdf";
import _ from "lodash";

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

  const newRows = rows.filter((item) => item.type !== "" && item.type !== "discount");

  newRows.forEach((item) => {
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
  
  if(rows?.length) return null

  const numRows = 100 / getRownumber(rows) === 0 ? 4 : 100 / getRownumber(rows);

  const disCountedStyle = rowType === "discount" ? { color: "#e75139" } : {};
  const isDiscountHeader = heading[0]?.label === "Discount";

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

        const isDiscount = item.type === "discount";

        const rowStyle = isDiscount ? { color: "#e75139" } : {};
        
        const newItems = {...item}
        delete newItems.type;

          const arr = Object.values(newItems).filter(itm => itm !== 'discount');

          return (
            <>
              {(isDiscount && !isDiscountHeader) ? <Text style={{ ...styles.text,...disCountedStyle, ...rowStyle, marginLeft: 2, fontWeight: 'bold'}}>Discount</Text> : null}
              <View key={index} style={styles.mainContainer}>
              {arr.map((value: any, in_index) => {
                const align: any = {
                  justifyContent: aligment(getRownumber(rows))[in_index],
                };


                return (
                  <View
                    key={in_index}
                    style={{ ...styles.row, width: `${numRows}%` }}
                  >
                    <View style={{ ...styles.content, ...align }}>
                      {wrapText(value+"").map((text, i) => {
                        const val = text?.text?.charAt(0) === ' ' ? text?.text?.slice(1) : text?.text
                        return <Text style={{ ...styles.text,...disCountedStyle, ...rowStyle }} key={i}>{val}</Text>
                      })}
                    </View>
                  </View>
                );
              })}
            </View>
            </>
          );
        })}
      </View>
    </View>
  );
};


const wrapText = (text: string) => { 
  if(!text) return [{text: '', isWrapped: false}]
  const textArr = text?.split(' ');
  const res = textArr.reduce((acc, item, index) => {
    if (acc[acc.length - 1].text.length + item.length < 18) {
      acc[acc.length - 1].text += ` ${item}`;
    } else {
      acc.push({text: item, isWrapped: true})
    }
    return acc

  }, [{text: '', isWrapped: false}])

  return res

}

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    flexDirection: "row",
    columnGap: 6,
  },
  content: {
    columnGap: 3,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
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
