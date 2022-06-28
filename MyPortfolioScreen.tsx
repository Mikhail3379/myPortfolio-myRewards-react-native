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


const MyPortfolioScreen = ({ navigation }: Props) => {
    
    const pieData = [
    { value: 33, color: '#38FFBD'},
    { value: 33, color: 'brown'},
    {value: 34, color: 'purple'},
  ];

    
    const tableTitle = ['USDC', 'SOL', 'BTC']
    const tableData = [
        ['STAKED \n 87.50','EARNED \n 12.38', 'YIELD \n +1.4%',''],
        ['STAKED \n 10','EARNED \n 2.04', 'YIELD \n  +2.2%',''],
        ['STAKED \n 0.0003','EARNED \n 0.0001', 'YIELD \n +3.5%',''],
        
      ]

  return (
    <><View
    style={{
        
         marginTop: 0,  
      }}>
     <Text style={styles.myPortfolio}>MY PORTFOLIOS</Text>
    </View>
    <View style={{
    position: 'absolute',
    alignItems: "center",
    top: 80,
    width: '95%',
    borderRadius: 100,
    left: '3%',

  
  }}>
    <Text style={{
      color: 'white',
      width: '90%',
      fontWeight: '300',
      fontSize: 18,
      fontStyle: "normal",
      lineHeight: 30,
      textAlign:"center",
      backgroundColor:"#4500FF",
      paddingLeft:10,
        paddingRight:10,
      
    }}><Text>BULLRUN ALPHA  by NOVA     </Text>    <NovaIconSmall/></Text>
      
    
  </View>
  <View style={{
        marginTop: 100,
        marginLeft: '5%',
      }}>
      
    <PieChart
                donut
                radius={70}
                innerRadius={50}
                data={pieData}
                // centerLabelComponent={() => {
                // return <Text style={{fontSize: 30}}>70%</Text>;
                // }}
            />
            <Text style={{
                marginLeft:200,
                position: 'absolute',
                top: 10,
                display: 'flex',
                
            }} >
            <View
        style={{
           
          backgroundColor: "purple",
          height: 20,
          width: 20,
          borderRadius: 10,
        }}>
            </View> 33% SOL
            </Text>
            <Text style={{
                marginLeft:200,
                position: 'absolute',
                top: 40,
                display: 'flex',
                
            }} >
            <View
        style={{
            
          backgroundColor: "brown",
          height: 20,
          width: 20,
          borderRadius: 10,
        }}>
            </View> 33% BTC
            </Text>
            <Text style={{
                marginLeft:200,
                position: 'absolute',
                top: 70,
                display: 'flex',
            }} >
            <View
        style={{
            
          backgroundColor: "#38FFBD",
          height: 20,
          width: 20,
          borderRadius: 10,
        }}>
            </View> 33% RAY
            </Text>
            </View>
            <Text style={{marginLeft: 10 }} >       57 Investors                                    +34% YTD</Text>
            <View style={{
                flexDirection: 'row',
            
                marginTop: 10,
                marginLeft: '5%',
            }}>
            
            <View
        style={{
          
          
          
        }}><Icon
        reverse
        name='ios-arrow-up'
        type='ionicon'
        color='blue'
      />
            </View>
        
        
            <View style={{
          marginLeft: '20%', 
         
        }}
        ><Icon
        reverse
        name='ios-arrow-down'
        type='ionicon'
        color='blue'
      />
            </View>
            <View
         style={{
          marginLeft: '20%',
          backgroundColor: "blue",
         height: 50,
         width: 50,
      borderRadius: 25,
      paddingTop: 12,
        }}>
          <Icon
           name='more-horizontal'
           type='feather'
           color='white'
/>
            </View>
            </View>
            <Text style={{
                fontSize: 18,
                fontWeight: '300',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                marginLeft: '3%',
                
            }} > Deposit                  Withdraw                 More</Text>
            <View style={{
                height: 80,
                padding: 20,
                backgroundColor: 'blue',
                

            }}><Text style={{
                fontSize: 14,
                fontWeight: '300',
                color: 'white',
            }}>PORTFOLIO VALUE                MY DEPOSITS {'\n'} $1,825.47                                 $172.00</Text>
                </View>
                <View style={{
                    
                }}><Text style={{
                    fontSize: 14,
                    fontWeight: '700',
                    padding: 20,
                }}>MY EARNINGS</Text>
                
                    </View>
                    <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1}}>
          
          <TableWrapper style={styles.wrapper}>
            <Col data={tableTitle} style={styles.title} heightArr={[48,48]} textStyle={styles.text}/>
            <Rows data={tableData} flexArr={[1, 1, 1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
      </View>
    </>

   
    );
  }

  const styles = StyleSheet.create({
    
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: {  height: 40,  backgroundColor: '#f1f8ff'  },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1,  backgroundColor: '#f6f8fa' },
    row: {  height: 48  },
    text: { textAlign: 'center' },

      myPortfolio:
    {
        marginTop: 40,
        marginLeft: 10,
        color: 'black',
        fontWeight: '700',
        fontSize: 18,
        fontStyle: "normal",
        lineHeight: 30,
    
      }
});
export default memo(MyPortfolioScreen);
