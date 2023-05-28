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
    verticalContainer: {
      flex: 1,
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
      backgroundColor: COLORS.gray2,
      borderRadius: BORDER_RADIUS.medium,
      paddingHorizontal: SPACING.medium,
      paddingVertical: SPACING.small,
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
    buttonFilledBlackText: {
      fontFamily: FONT.medium,  
      fontSize: SIZES.medium,
      color: COLORS.white
    }
});

export {
    authStyles
}