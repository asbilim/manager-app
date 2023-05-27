import { FONT,SIZES,COLORS } from "../constants";

import { StyleSheet } from "react-native";

const authStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white,
      paddingHorizontal: SPACING.medium,
      paddingVertical: SPACING.large,
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
});

export {
    authStyles
}