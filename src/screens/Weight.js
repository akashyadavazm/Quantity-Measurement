import React, {useState} from "react";
import { StyleSheet, Button, TextInput, Text, View, ImageBackground } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Weight = () => {
    const [weight, setWeight] = useState('');
    const [sourceUnit, setSourceUnit] = useState('mg');
    const [targetUnit, setTargetUnit] = useState('ton');
    const [convertedWeight, setConvertedWeight] = useState('');

    const handleConvertForWeight= () => {
        let convertedValue;
        switch (sourceUnit){
            case 'mg':
                switch(targetUnit){
                    case 'g':
                        convertedValue = parseFloat(weight) / 1000;//Convert Miligram to gram
                        setConvertedWeight(convertedValue.toFixed(2) + ' g')
                        break;
                    case 'kg':
                        convertedValue = parseFloat(weight) / 1000000;//Convert Miligram to Kilogram
                        setConvertedWeight(convertedValue.toFixed(2) + ' kg');
                        break;
                    case 'ton':
                        convertedValue =parseFloat(weight) / 1000000000;//Convert Miligram to tonne
                        setConvertedWeight(convertedValue.toFixed(2) + ' ton');
                        break;
                    default:
                        setConvertedWeight('Invalid target unit');
                }
            case 'g':
                switch(targetUnit){
                    case 'mg':
                        convertedValue = parseFloat(weight) * 1000;//Convert gram to miligram
                        setConvertedWeight(convertedValue.toFixed(2) + ' mg');
                        break;
                    case 'kg':
                        convertedValue = parseFloat(weight) / 1000;//Convert gram to kilogram
                        setConvertedWeight(convertedValue.toFixed(2) + ' kg');
                        break;
                    case 'ton':
                        convertedValue = parseFloat(weight) * 1000000;//Convert gram to miligram
                        setConvertedWeight(convertedValue.toFixed(2) + ' ton');
                    default:
                        setConvertedWeight('Invalid target unit');
                }
            case 'kg':
                switch(targetUnit){
                    case 'mg':
                        convertedValue = parseFloat(weight) / 1000000;//Convert kilogram to miligram
                        setConvertedWeight(convertedValue.toFixed(2) + ' mg');
                        break;
                    case 'g':
                        convertedValue = parseFloat(weight) / 1000;//Convert kilogram to gram
                        setConvertedWeight(convertedValue.toFixed(2) + ' g');
                        break;
                    case 'ton':
                        convertedValue = parseFloat(weight) * 1000;//Convert kilogram to tonne
                        setConvertedWeight(convertedValue.toFixed(2) + ' ton');
                        break;
                    default:
                        setConvertedWeight('Invalid target value');
                }
            case 'ton':
                switch(targetUnit){
                    case 'mg':
                        convertedValue = parseFloat(weight) / 1000000000;//Convert tonne to miligram
                        setConvertedWeight(convertedValue.toFixed(2) + ' mg');
                        break;
                    case 'g':
                        convertedValue = parseFloat(weight) / 1000000;//Convert tonne to gram
                        setConvertedWeight(convertedValue.toFixed(2) + ' g');
                        break;
                    case 'kg':
                        convertedValue = parseFloat(weight) / 1000;//Convert tonne to kilogram
                        setConvertedWeight(convertedValue.toFixed(2) + ' kg');
                        break;
                    default:
                        setConvertedWeight('Invalid target value');
                }
        }
    }
    return(
        <ImageBackground
        style = {styles.container}
        source={require('../logo/TabBackgroung.jpg')}
        >

            <View style= {styles.overlay}>

                <Text style = {styles.title}>
                    Weight Measurement
                </Text>

                <TextInput
                style={styles.input}
                placeholder="Enter Weight"
                keyboardType="numeric"
                value={weight}
                onChangeText={text => setWeight(text)}
                />

                <Picker
                style = {styles.picker}
                selectedValue={sourceUnit}
                onValueChange={itemValue => setSourceUnit(itemValue)}
                >
                    <Picker.Item label="Miligram (mg)" value="mg"/>
                    <Picker.Item label="Gram (g)" value="g"/>
                    <Picker.Item label="Kilogram (kg)" value="kg"/>
                    <Picker.Item label="Tonne (ton)" value="ton"/>
                </Picker>

                <Picker
                style = {styles.picker}
                selectedValue={targetUnit}
                onValueChange={itemValue => setTargetUnit(itemValue)}
                >
                    <Picker.Item label="Miligram (mg)" value="mg"/>
                    <Picker.Item label="Gram (g)" value="g"/>
                    <Picker.Item label="Kilogram (kg)" value="kg"/>
                    <Picker.Item label="Tonne (ton)" value="ton"/>
                </Picker>

                <Button
                title = "Convert"
                onPress = {handleConvertForWeight}
                />
                
                {
                    convertedWeight ? (
                        <Text style = {styles.result}>{convertedWeight}</Text>
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

export default Weight;