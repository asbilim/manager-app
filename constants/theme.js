// This file defines a set of constants that can be used to style components.

const COLORS = {
  // Primary color.
  primary: "#4B0082",

  //Orange color.

  orange: "#F8981D",

  // Secondary color.
  secondary: "#7B68EE",

  // Tertiary color.
  tertiary: "#FFA07A",

  // Light gray color.
  gray: "#A9A9A9",

  // Dark gray color.
  gray2: "#BEBEBE",

  // White color.
  white: "#FFFFFF",

  // Black color.
  black: "#000000",

  // Transparent color.
  transparent: "transparent",

  // Success color.
  success: "#32CD32",

  // Error color.
  error: "#FF0000",

  // Warning color.
  warning: "#FFA500",
};

const FONT = {
  // Regular font.
  regular: "Regular",

  // Medium font.
  medium: "Medium",

  // Bold font.
  bold: "Bold",
};

const SIZES = {
  // Extra small size.
  xSmall: 10,

  // Small size.
  small: 12,

  // Medium size.
  medium: 16,

  // Large size.
  large: 20,

  // Extra large size.
  xLarge: 24,

  // Extra extra large size.
  xxLarge: 32,
};

const SPACING = {
  // Extra small spacing.
  xSmall: 4,

  // Small spacing.
  small: 8,

  // Medium spacing.
  medium: 16,

  // Large spacing.
  large: 24,

  // Extra large spacing.
  xLarge: 32,

  // Extra extra large spacing.
  xxLarge: 40,
};

const BORDER_RADIUS = {
  // Extra small border radius.
  xSmall: 4,

  // Small border radius.
  small: 8,

  // Medium border radius.
  medium: 16,

  // Large border radius.
  large: 32,
};

const ELEVATION = {
  // Extra small elevation.
  xSmall: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },

  // Small elevation.
  small: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },

  // Medium elevation.
  medium: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
};

// Export the constants.
export { COLORS, FONT, SIZES, SPACING, BORDER_RADIUS, ELEVATION };
