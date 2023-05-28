import { FONT,SIZES,COLORS,BORDER_RADIUS,SPACING,ELEVATION } from "../constants";
import { StyleSheet } from "react-native";

const cardStyles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.black,
      borderRadius: BORDER_RADIUS.medium,
      padding: SPACING.medium,
      marginBottom: SPACING.medium,
      ...ELEVATION.medium,
    },
    title: {
      fontFamily: FONT.medium,
      fontSize: SIZES.large,
      color: COLORS.black,
      marginBottom: SPACING.medium,
    },
    subtitle: {
      fontFamily: FONT.regular,
      fontSize: SIZES.medium,
      color: COLORS.gray,
      marginBottom: SPACING.medium,
    },
    text: {
      fontFamily: FONT.regular,
      fontSize: SIZES.small,
      color: COLORS.gray2,
    },
});

const modalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.transparent,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      backgroundColor: COLORS.black,
      borderRadius: BORDER_RADIUS.medium,
      padding: SPACING.medium,
      ...ELEVATION.medium,
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
      color: COLORS.black,
      marginBottom: SPACING.medium,
      textAlign: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: SPACING.medium,
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
      color: COLORS.black,
    },
});

const headerStyles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.primary,
      flexDirection: 'row',
      alignItems: 'center',
      height: 60,
     paddingHorizontal: SPACING.medium,
      justifyContent: 'space-between',
    },
    logo: {
      width: 30,
      height: 30,
    },
    title: {
      fontFamily: FONT.bold,
      fontSize: SIZES.medium,
      color: COLORS.black,
    },
});

const titleStyles = StyleSheet.create({
    container: {
      paddingHorizontal: SPACING.medium,
      paddingVertical: SPACING.small,
      backgroundColor: COLORS.primary,
      borderRadius: BORDER_RADIUS.medium,
      marginBottom: SPACING.medium,
      ...ELEVATION.medium,
    },
    text: {
      fontFamily: FONT.bold,
      fontSize: SIZES.medium,
      color: COLORS.black,
    },
});

export {
    cardStyles,
    modalStyles,
    headerStyles,
    titleStyles,
}