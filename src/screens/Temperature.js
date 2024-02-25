import React,{useState} from "react";
import {StyleSheet, Text, View, TextInput, Button, ImageBackground } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Temperature = () => {
    const [temperature, setTemperature] = useState('');
    const [sourceUnit, setSourceUnit] = useState('C');
    const [targetUnit, setTargetUnit] = useState('K');
    const [convertedTemp, setConvertedTemp] = useState('');

    const handleConvertForTemprature = () => {
        let convertedValue;
        switch(sourceUnit) {
            case 'C':
                switch(targetUnit){
                    case 'K':
                            convertedValue = parseFloat(temperature) + 273.15;// Convert Celcius to Kelvin
                            setConvertedTemp(convertedValue + 'K');
                        break;
                        case "F":
                            convertedValue = (parseFloat(temperature) * 1.8) + 32;//Convert Celcius to Fahreinheit
                            setConvertedTemp(convertedValue.toFixed(2) + 'F');
                            break;
                        default:
                            setConvertedTemp('Invalid target unit');
                }
            case 'K':
                switch(targetUnit){
                    case 'C':
                        convertedValue = parseFloat(temperature) - 273.15; //Cnvert Kelvin to Celcius
                        setConvertedTemp(convertedValue.toFixed(2) + 'C');
                        break;
                    case 'F':
                        convertedValue = ((parseFloat(temperature) - 273.15) * 1.8 ) + 32;// Convert Kelvin to fahreinheit
                        setConvertedTemp(convertedValue.toFixed(2) + 'F');
                        break;
                    default:
                        setConvertedTemp('Invalid target unit');
                }
            case 'F':
                switch(targetUnit){
                    case 'C':
                        convertedValue = (parseFloat(temperature) - 32) * 0.5555555555555556;//Convert Fahreinheit to Celcius
                        setConvertedTemp(convertedValue.toFixed(2) + 'C');
                        break;
                    case 'K':
                        convertedValue = ((parseFloat(temperature) - 32) * 0.5555555555555556) + 273.15;
                        setConvertedTemp(convertedValue.toFixed(2) + 'K');
                        break;
                    default:
                        setConvertedTemp('Invalid target unit')
                }
                    
        }

    }
    return(
        <ImageBackground
        style = {styles.container}
        source={require('../logo/TabBackgroung.jpg')}
        >

            <View style={styles.overlay} >
            
                <Text style={styles.title}>
                    Temperature Measurement
                </Text>

                <TextInput
                style={styles.input}
                placeholder="Enter temperature"
                keyboardType="numeric"
                value={temperature}
                onChangeText={text => setTemperature(text)}
                />

                <Picker
                style={styles.picker}
                selectedValue={sourceUnit}
                onValueChange={itemValue => setSourceUnit(itemValue)}
                >
                    <Picker.Item label="Celcius (°C)" value="C" />
                    <Picker.Item label="Kelvin (K)" value="K" />
                    <Picker.Item label="Fahrenheit (°F)" value="F" />
                </Picker>

                <Picker
                style={styles.picker}
                selectedValue={targetUnit}
                onValueChange={itemValue => setTargetUnit(itemValue)}
                >
                    <Picker.Item label="Celcius (°C)" value="C" />
                    <Picker.Item label="Kelvin (K)" value="K" />
                    <Picker.Item label="Fahrenheit (°F)" value="F" />
        
                </Picker>

                <Button
                title = "Convert"
                onPress = {handleConvertForTemprature}
                />
                {
                    convertedTemp ? (
                        <Text style = {styles.result}>{convertedTemp}</Text>
                    ) : null
                }

            </View>
        
        </ImageBackground>
    )
}

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

export default Temperature;