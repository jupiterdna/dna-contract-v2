import { Text, View, StyleSheet, Font } from "@dna/react-pdf";
import { docStyles } from '../../styles';


type dateType = {
  day?: string
  month?: string
}

type ContractHeaderBoxProps = {
    first_heading: {
        label: string,
        value?: string
    }
    second_heading: {
        label: string,
        value?: string
    }
    contact?: string
    date?: dateType
}

const TemplateHeaderBox = ({first_heading, second_heading, contact, date }:ContractHeaderBoxProps)  => {


  return (
    <View style={{...docStyles.fontKarla, ...style.container}}>
        <View style={{
            position: 'absolute',
            width: 30,
            height: 30,
            backgroundColor: 'black',
            color: 'white',
            right: 0,
            top: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent :'center',
            textAlign: 'center',
      
        }}>
            <Text style={style.text}>{date?.month}</Text>
            <Text style={{...style.text, ...style.heading, ...docStyles.fontKarlaBold}}>{date?.day}</Text>
        </View>
        <View>
            <Text style={style.headingText}>{first_heading.label}</Text>
            <Text style={style.text}>{first_heading.value}</Text>
        </View>
        <View style={{marginTop: 8}}>
            <Text style={style.capitalize}>{second_heading.label}</Text>
            <Text style={style.text}>{second_heading.value}</Text>
            <Text style={style.text}>{contact}</Text>
        </View>
    </View>
  )
}


const style = StyleSheet.create({
    container:{
        border: '1px solid black', 
        padding: 5,
        width: '100%',
        position:'relative',
        paddingBottom: 10
    },
    capitalize:{
      textTransform: 'capitalize',
      fontSize: 9,
      fontWeight: 'bold',
      fontFamily: 'Karla',
    },
  headingText:{
    fontSize: 9,
    fontWeight: 'bold',
    fontFamily: 'Karla',
    textTransform: 'uppercase'
  },
  text:{
    fontSize: 8
  },
  heading: {fontWeight: 700, fontSize: 12, fontFamily: 'Karla'}
})

export default TemplateHeaderBox