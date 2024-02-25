import React from "react";
import { StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Image, 
    ImageBackground}
    from "react-native";

const Welcome = ({navigation}) => {
    return(
        <ImageBackground
          style={styles.container}
          source={require('../logo/wbg.png')}
          >
          
          <View style = {styles.overlay}>
            
            <Text style ={styles.text}>
              Measurements
            </Text>
            
            <Image
              style = {styles.logo}
              source = {require('../logo/measureIcon.png')}
              />
            <TouchableOpacity
              style = {styles.button}
              onPress={() => navigation.navigate('Tabs')}
              >
              <Text
                style = {styles.buttonText}
                >
                  Welcome
                </Text>
            
            </TouchableOpacity>
          
          </View>
        
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover'
      },
      overlay: {
        flex: 1,
        // backgroundColor: 'rgba(0, 0, 0, 0.2)', // Add opacity to the overlay
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
      text:{
        fontSize: 50,
        marginVertical: 20,
        fontWeight: "bold",
        color:'#008000'
      },
      logo: {
        width: 300,
        height: 300,
        backgroundColor: 'lightyellow',
      },    
      button: {
        paddingTop: 'auto',
        paddingHorizontal: 10,
        marginVertical: 100,
        backgroundColor: '#008000',
        borderRadius: 10
      },
      buttonText: {
        fontSize:30,
        fontWeight: "400",
        color:'lightyellow'
      }
    
})

export default Welcome;