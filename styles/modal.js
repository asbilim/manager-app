import { COLORS,SIZES,SPACING,BORDER_RADIUS,FONT } from "../constants";
import { StyleSheet } from "react-native";

const modalStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:"center",
      backgroundColor: COLORS.error,
      padding: SPACING.medium,
      justifyContent:"center"
    },
    contentContainer: {
      backgroundColor: COLORS.white,
      borderRadius: BORDER_RADIUS.medium,
      padding: SPACING.medium,
      width: '100%',
      maxWidth: 400,

    },
    title: {
      fontFamily: FONT.bold,
      fontSize: SIZES.large,
      color: COLORS.primary,
      marginBottom: SPACING.medium,
      textAlign: 'center',
    },
    message: {
      fontFamily: FONT.regular,
      fontSize: SIZES.medium,
      color: COLORS.gray,
      marginBottom: SPACING.medium,
      textAlign: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: SPACING.medium,
    },
    button: {
      backgroundColor: COLORS.primary,
      borderRadius: BORDER_RADIUS.medium,
      paddingHorizontal: SPACING.medium,
      paddingVertical: SPACING.small,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: SPACING.small,
    },
    buttonText: {
      fontFamily: FONT.medium,
      fontSize: SIZES.medium,
      color:COLORS.white,
    },
  });

export {
    modalStyles
}