import { FONT,SIZES,COLORS } from "../constants";

const homeStyles = StyleSheet.create({
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
    subtitle: {
      fontFamily: FONT.regular,
      fontSize: SIZES.medium,
      color: COLORS.gray,
      marginBottom: SPACING.medium,
      textAlign: 'center',
    },
    cardContainer: {
      marginTop: SPACING.large,
    },
    card: {
      backgroundColor: COLORS.white,
      borderRadius: BORDER_RADIUS.medium,
      padding: SPACING.medium,
      marginBottom: SPACING.medium,
      ...ELEVATION.medium,
    },
    cardTitle: {
      fontFamily: FONT.medium,
      fontSize: SIZES.large,
      color: COLORS.black,
      marginBottom: SPACING.medium,
    },
    cardSubtitle: {
      fontFamily: FONT.regular,
      fontSize: SIZES.medium,
      color: COLORS.gray,
      marginBottom: SPACING.medium,
    },
    cardText: {
      fontFamily: FONT.regular,
      fontSize: SIZES.small,
      color: COLORS.gray2,
    },
});

export {
    homeStyles
}