import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Welcome from "./Welcome";
import Length from "../screens/Length";
import Weight from "../screens/Weight";
import Temperature from "../screens/Temperature";
import Ionicons from 'react-native-vector-icons/Ionicons'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MyStack =()=> {
    return(
        <NavigationContainer>
            
            <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{headerShown : false}}
            >
                <Stack.Screen
                name="Welcome"
                component={Welcome}
                />
                <Stack.Screen
                name="Tabs"
                component={MyTabs}
                />
            </Stack.Navigator>

        </NavigationContainer>
    )
}
function MyTabs() {
    return(
            <Tab.Navigator
                initialRouteName="Length"
                screenOptions={{headerShown: false}}
                tabBarOptions={{
                    activeTintColor: 'blue', // Color for the active tab
                    inactiveTintColor: 'black', // Color for inactive tabs
                    labelStyle: { fontSize: 15 }, // Style for tab labels
                  }}
            
                >
                <Tab.Screen
                    name="Length"
                    component={Length}
                    options={{tabBarIcon:() => {
                        <Ionicons name="scale" size={20} color='#4F8EF7' />
                        }
                    }}
                    />
                <Tab.Screen
                    name="Temperature"
                    component={Temperature}
                    options={{tabBarIcon:() => {
                        <Ionicons name="thermometer" size={20} color='#4F8EF7' />
                        }
                    }}
                    />
                <Tab.Screen
                    name="Weight"
                    component={Weight}
                    options={{tabBarIcon:() => {
                        <Ionicons name="power" size={20} color='#4F8EF7' />
                        }
                    }}
                    />
            </Tab.Navigator>
    )
}

export default MyStack;