import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { docStyles } from "../../styles";

type headingType = {
  label: string
}

type EstimatedChargesProps = {
  heading: headingType[];
  rows: any[];
};

const aligment = ['flex-start', 'flex-start', 'center', 'flex-end']

const EstimatedCharges = ({ heading, rows }: EstimatedChargesProps) => {
  return (
    <View>
      <View style={styles.mainContainer}>
        {heading.map((item, index) => {
          const align: any = {justifyContent: aligment[index]}
          return (
            <View key={index} style={styles.row}>
              <View style={{...styles.content, ...align}}>
                <Text style={styles.textheading}>{item.label}</Text>
              </View>
            </View>
          );
        })}
      </View>
      <View>

          {rows.map((item, index) => {
            return (
              <View key={index} style={styles.mainContainer}>
                {Object.values(item).map((value, in_index) => {
                  
                  const align: any = {justifyContent: aligment[in_index]}

                  return (
                    <View key={in_index} style={styles.row}>
                      <View style={{...styles.content, ...align}}>
                        <Text style={{...styles.text}}>{value}</Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            )
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
    flexDirection: 'row',
  },
  row: {
    flexDirection: "row",
    columnGap: 3,
    justifyContent: "space-between",
    marginBottom: 5,
    paddingHorizontal: 3,
    paddingBottom: 3,
    width:'25%'
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
