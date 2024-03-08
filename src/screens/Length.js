import React, {useState} from "react";
import { Picker } from "@react-native-picker/picker";
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from "react-native"

const Length = () => {
    const [length, setLength] = useState('');
    const [sourceUnit, setSourceUnit] = useState('cm');
    const [targetUnit, setTargetUnit] = useState('m');
    const [convertedLength, setConvertedLength] = useState('');
    
    const handleConvertForLength = () => {
        let convertedValue;
        switch(sourceUnit){
            case 'cm' :
                switch(targetUnit){
                    case 'm':
                        convertedValue = parseFloat(length) / 100; // Convert cm to m
                        setConvertedLength(convertedValue.toFixed(2) + ' meters');
                        break;
                    case 'in':
                        convertedValue = parseFloat(length) * 0.393701; // Convert cm to inches
                        setConvertedLength(convertedValue.toFixed(2) + ' inches');
                        break;
                    case 'ft':
                        convertedValue = parseFloat(length) * 0.0328084; // Convert cm to feet
                        setConvertedLength(convertedValue.toFixed(2) + ' feet');
                        break;
                    default:
                        setConvertedLength('Invalid target unit');
                }

            case 'm' :
                switch(targetUnit){
                    case 'cm' :
                        convertedValue = parseFloat(length) * 100; //Convert m to cm
                        setConvertedLength(convertedValue.toFixed(2) + ' cm');
                        break;
                    case 'in' :
                        convertedValue = parseFloat(length) * 39.37008; //Convert m to inches
                        setConvertedLength(convertedValue.toFixed(2) + ' inches');
                        break;
                    case 'ft' :
                        convertedValue = parseFloat(length) * 3.28084; //Convert m to feet
                        setConvertedLength(convertedValue.toFixed(2) + ' ft');
                        break;
                    default:
                        setConvertedLength('Invalid target unit');
                }

            case 'in' :
                switch(targetUnit){
                    case 'cm' :
                        convertedValue = parseFloat(length) * 2.54000008128;//Convert inches to cm
                        setConvertedLength(convertedValue.toFixed(2) + ' cm');
                        break;
                    case 'm' :
                        convertedValue = parseFloat(length) * 0.0254000008128;//Convert inches to m
                        setConvertedLength(convertedValue.toFixed(2) + ' m');
                        break;
                    case 'ft' :
                        convertedValue = parseFloat(length) * 0.08333333599999999397;//Convert inches to ft
                        setConvertedLength(convertedValue.toFixed(2) + ' feet');
                        break;
                    default:
                        setConvertedLength('Invalid target unit');
                }

            case 'ft' :
                switch(targetUnit){
                    case 'cm' :
                        convertedValue = parseFloat(length) * 30.480000975359999416;//Convert feet to cm
                        setConvertedLength(convertedValue.toFixed(2) + ' cm');
                        break;
                    case 'm' :
                        convertedLength = parseFloat(length) * 0.3048000097535999986;//Convert feet to m
                        setConvertedLength(convertedValue.toExponential(2) + ' m');
                        break;
                    case 'in' :
                        convertedValue = parseFloat(length) * 12.000000383999999798;//Convert feet to inches
                        setConvertedLength(convertedValue.toFixed(2) + ' inches');
                        break;
                    default:
                        setConvertedLength('Invalid target unit');
                }
       }
    }
    return(
        <ImageBackground
        style = {styles.container}
        source={require('../logo/TabBackgroung.jpg')}
        >

            <View style = {styles.overlay}>
                
                <Text style={styles.title}>
                    Length Measurement
                </Text>
                
                <TextInput
                style={styles.input}
                placeholder="Enter length"
                keyboardType="numeric"
                value={length}
                onChangeText={text => setLength(text)}
                />
                
                <Picker
                style={styles.picker}
                selectedValue={sourceUnit}
                onValueChange={itemValue => setSourceUnit(itemValue)}
                >
                    <Picker.Item label="Centimeter" value= "cm"/>
                    <Picker.Item label="Meters (m)" value="m" />
                    <Picker.Item label="Inches (in)" value="in" />
                    <Picker.Item label="Feet (ft)" value="ft" />
                </Picker>
                
                <Picker
                style={styles.picker}
                selectedValue={targetUnit}
                onValueChange={itemValue => setTargetUnit(itemValue)}
                >
                    <Picker.Item label="Centimeters (cm)" value="cm" />
                    <Picker.Item label="Meters (m)" value="m" />
                    <Picker.Item label="Inches (in)" value="in" />
                    <Picker.Item label="Feet (ft)" value="ft" />
                </Picker>
                
                <Button
                title = "Convert"
                onPress = {handleConvertForLength}
                />
            
                {
                    convertedLength ? (
                        <Text style = {styles.result}>
                            {convertedLength}
                        </Text>
                    ) : null
                }
            
            </View>
        
        </ImageBackground>
    )
}

export default Length;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
      },
      overlay: {
        flex: 1,
        // backgroundColor: 'rgba(10, 10, 10, 0.5)', // Add opacity to the overlay
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
      title: {
        fontSize: 24,
        fontWeight:'bold',
        marginBottom: 20,
      },
      input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
      },
      picker: {
        width: '80%',
        height: 40,
        marginBottom: 20,
      },
      result: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
      },
});
