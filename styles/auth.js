import { FONT,SIZES,COLORS,SPACING,BORDER_RADIUS,ELEVATION } from "../constants";


import { StyleSheet } from "react-native";

const button = {
  borderRadius: BORDER_RADIUS.medium,
  paddingHorizontal: SPACING.medium,
  paddingVertical: SPACING.small,
  alignItems: 'center',
  justifyContent: 'center',
  width:380
}

const authStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white,
      paddingHorizontal:24,
      paddingVertical:30,
      justifyContent:"center",
      alignItems:"center",
      position:"relative"
    },
    smallInput:{
      borderRadius:BORDER_RADIUS.small,
      borderWidth:1,
      borderColor:COLORS.gray,
      paddingHorizontal:SPACING.small,
      paddingVertical:SPACING.small,
      fontSize:SIZES.medium,
      color:COLORS.gray2,
      width:40,
      height:40,
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      textAlign:"center"
    },
    startContainer: {
      flex: 1,
      backgroundColor: COLORS.white,
      paddingHorizontal:24,
      paddingVertical:30,
      justifyContent:"start",
      alignItems:"center",
      position:"relative"
    },
    simpleContainer:{
      flex: 1,
      backgroundColor: COLORS.white,
      justifyContent:"center",
      alignItems:"center",
      position:"relative"
    }
    ,
    containerBetween:{
      backgroundColor: COLORS.white,
      justifyContent:"space-between",
      alignItems:"center",
      position:"relative"
    }
    ,
    containerAround:{
      backgroundColor: COLORS.white,
      justifyContent:"space-around",
      alignItems:"center",
      position:"relative"
    },
    verticalContainer: {
      flex: 1,
      backgroundColor: COLORS.white,
      justifyContent:"center",
      alignItems:"start",
      position:"relative",
      flexDirection:"column",
      paddingBottom:40
    },
    simpleVerticalContainer: {
      backgroundColor: COLORS.white,
      justifyContent:"center",
      alignItems:"start",
      position:"relative",
      flexDirection:"column",
      paddingBottom:40
    },
    title: {
      fontFamily: FONT.bold,
      fontSize: SIZES.xxLarge,
      color: COLORS.primary,
      marginBottom: SPACING.medium,
      textAlign: 'center',
    },
    input: {
      backgroundColor: "transparent",
      borderWidth:1,
      width:346,
      borderRadius: BORDER_RADIUS.medium,
      paddingHorizontal: SPACING.medium,
      paddingVertical: SPACING.medium,
      marginBottom: SPACING.medium,
      fontFamily: FONT.regular,
      fontSize: SIZES.medium,
      color: COLORS.black,
    },
    button: {
      backgroundColor: COLORS.primary,
      borderRadius: BORDER_RADIUS.medium,
      paddingHorizontal: SPACING.medium,
      paddingVertical: SPACING.small,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontFamily: FONT.medium,
      fontSize: SIZES.medium,
      color: COLORS.white,
    },
    button: {
      backgroundColor: COLORS.primary,
      borderRadius: BORDER_RADIUS.medium, 
      alignItems: 'center', 
      justifyContent: 'center' 
    },
    
    buttonMedium: {
      ...button,
      paddingHorizontal: SPACING.medium,
      paddingVertical: SPACING.medium  
    },
    
    buttonTextMedium: {
      fontSize: SIZES.medium  
    },
    
    buttonSmall: {
      ...button,
      paddingHorizontal: SPACING.small,    
      paddingVertical: SPACING.small
    },   
    
    buttonTextSmall: {
      fontSize: SIZES.small
    },
    
    buttonLarge: {
      ...button,   
      paddingHorizontal: SPACING.large,  
      paddingVertical: SPACING.large    
    },
    
    buttonTextLarge: {
      fontSize: SIZES.large  
    },
    buttonOutline: {
      borderColor: COLORS.primary,  
      borderWidth: 1,      
      borderRadius: BORDER_RADIUS.medium,
      paddingHorizontal: SPACING.medium,
      paddingVertical: SPACING.small,
      alignItems: 'center', 
      justifyContent: 'center' 
    },
    buttonOutlineText: {
      fontFamily: FONT.medium,
      fontSize: SIZES.medium,  
      color: COLORS.primary   
    },
    buttonFilledBlack: {    
      backgroundColor: COLORS.black,   
      borderRadius: BORDER_RADIUS.medium,  
      paddingHorizontal: SPACING.medium,
      paddingVertical: SPACING.small,
      alignItems: 'center',  
      justifyContent: 'center'   
    },   
    buttonFilledBlackLarge: {    
      backgroundColor: COLORS.black,   
      borderRadius: BORDER_RADIUS.small,  
      paddingHorizontal: SPACING.large,
      paddingVertical: SPACING.large,
      alignItems: 'center',  
      justifyContent: 'center'   
    },    
    buttonFilledBlackText: {
      fontFamily: FONT.medium,  
      fontSize: SIZES.medium,
      color: COLORS.white
    }
});

export {
    authStyles
}