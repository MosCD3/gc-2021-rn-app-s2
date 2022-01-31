import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Platform } from "react-native";

const FlexBoxTry = ()=> {
    return (
        <SafeAreaView style = {styles.wrapper}>
            {/* <View style = {[styles.boxStyle, styles.box1]}>
                <View style={styles.box1_1}/>
                <View style={styles.box1_2}>
                    <Text style={styles.textH1Style}>Welcome to My App</Text>
                </View>
            </View>
            <View style = {[styles.boxStyle, styles.box2]}>
                <View style={styles.box2_1}/>
                <View style={styles.box2_2}>
                    <Text></Text>
                </View>
            </View> */}
             <View style={styles.box1}>
                <View  style={styles.boxSquare}/>
                <View  style={styles.boxSquare}/>
                <View  style={styles.boxSquare}/>
                <View  style={styles.boxSquare}/>
            </View>
            <View style={styles.box2}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1
    },
    box1:{
        flex:1,
        padding: 20,
        flexDirection: 'row',
        flexWrap:'wrap',
        backgroundColor:"grey",
    },
    box2:{
        flexBasis:80,
        backgroundColor:'green'
    },
    boxSquare:{
        width:100,
        height: 100,
        backgroundColor: 'blue',
        marginRight: 1,
        marginBottom:1,
    }
})

// const styles = StyleSheet.create({
//     wrapper:{
//         flex:1,
//         flexDirection: 'column'
//     },
//     boxStyle: {
//         padding: 10
//     },
//     box1:{
//         backgroundColor:'#2e83a7',
//         flex:1,
//         justifyContent:'flex-end',
//     },
//     box2:{
//         // backgroundColor:'green',
//         flex:2,
//         justifyContent:'flex-end'
//     },
//     box1_1:{
//         height: 80,
//         width: 80,
//         marginTop: 5,
//         backgroundColor: "purple",
//         alignSelf:'center',
//         position:'relative',
//         bottom: 50
//     },
//     box1_2:{
//         flex:0.5,
//         marginTop: 5,
//         justifyContent:'center',
//         alignItems:'center'
//     },
//     box2_1:{
//         height: 80,
//         marginTop: 5,
//         backgroundColor: "purple",
//     },
//     box2_2:{
//         height:40,
//         backgroundColor: "purple",
//         marginTop: 5,
//     },
//     defaultContainer:{
//         flex: 1,
//         backgroundColor:"#ededed"
//     },
//     //Text Styles
//     textH1Style:{
//         ...Platform.select({
//             ios:{
//                 fontSize: 20,
//                 fontWeight: "700" ,
//             },
//             android:{
//                 fontSize: 30,
//                 fontWeight: "bold" ,
//             }
//         }),
//         color:'white'
//     }
// })

export default FlexBoxTry;