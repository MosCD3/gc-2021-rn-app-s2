import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Platform, TouchableOpacity } from "react-native";


const PageHeader = (props)=> {
    const { children } = props;
    return (
        <View style = {styles.wrapper}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor: "#0a4a4b",
        padding:20,
    },
    textStyle: {
        color:"#fff",
        textAlign: 'center',
        fontWeight:'bold'
    }
})

export default PageHeader;

