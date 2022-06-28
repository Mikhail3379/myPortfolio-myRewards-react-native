import React, { memo, useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, Text, TouchableOpacity, Pressable } from "react-native";
import {
  Paragraph,
} from "../components";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { PieChart } from "react-native-gifted-charts";
import { Navigation } from "../types";
import { BsArrowBarDown } from "react-icons/bs";
import AppButton from "../components/AppButton";
import ArrowBack from "../assets/SVG/ArrowBack";
import { Icon } from 'react-native-elements'
import NextButton from "../components/NextButton";

import NovaIconSmall from "../assets/SVG/NovaIconSmall";


type Props = {
  navigation: Navigation;
};
const { width, height } = Dimensions.get('window');


const MyRewardsScreen = ({ navigation }: Props) => {
    
   

  return (
    <><View style={{
        backgroundColor: 'blue',
        height: '100%',
        
          
     }}
    ><Text style={{
        color: 'white',
        marginTop: 50,
        marginLeft: '5%',  
     }}>MY REWARDS</Text>
     <View style={{
        marginLeft:'-25%',
        marginTop: '-5%',
     }}><Icon name="questioncircleo" type="antdesign" color="white" size={20} /></View>
    
    
    <View style={{
    }}>
    <Text style={{
        padding: '5%',
        color: 'white',
    }}>Your investments have generated</Text>
    </View>
    <View>
    <Text style={{
        padding: 'auto',
        color: '#38FFBD',
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
    }}>25 </Text>
    <Text style={{
        padding: 'auto',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    }}>NOVA</Text>
    <Text style={{
        marginTop: '-7%',
        marginLeft: '65%',
        color: 'white',
        fontSize: 20,
        fontWeight: 'normal',
        
    }}>$45.89</Text>
    <Text style={{
        padding: 'auto',
        marginTop: 40,
        color: 'white',
        fontSize: 14,
        fontWeight: 'normal',
        textAlign: 'center',
    }}>You will automatically receive your rewards {'\n'} into your wallet</Text>
    <Text style={{
        padding: 'auto',
        marginTop: 60,
        color: 'white',
        fontSize: 24,
        fontWeight: 'normal',
        textAlign: 'center',
    }}>How to use your NOVA</Text>
     <Text style={{
        padding: 'auto',
        marginTop: 40,
        marginBottom: 20,
        color: 'white',
        fontSize: 14,
        fontWeight: 'normal',
        textAlign: 'center',
    }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat: </Text>
    <Text style={{
        padding: 'auto',
        marginTop: 20,
        color: 'white',
        fontSize: 14,
        fontWeight: 'normal',
        textAlign: 'center',
    }}>Duis aute irure dolor in enim ad minim veniam.</Text>
    <Text style={{
        padding: 'auto',
        marginTop: 20,
        color: 'white',
        fontSize: 14,
        fontWeight: 'normal',
        textAlign: 'center',
    }}>Excepteur sint occaecat cupidatat non proident</Text>
    </View>
    </View>
    </>

   
    );
  }

  
export default memo(MyRewardsScreen);
