import { StyleSheet } from "react-native";
import { COLORS, SPACING, BORDER_RADIUS, ELEVATION } from "../constants";

const bottomView = {
    position: 'absolute',
    bottom: 0, 
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center'
}

const viewStyles = StyleSheet.create({
  bottomView: {
    position: 'absolute',
    bottom: 0, 
    left: 0,
    right: 0  
  },
  topView: {
    position: 'absolute',
    top: 0, 
    left: 0,
    right: 0  
  },
  bottomViewPadding: {
    ...bottomView,
    padding: SPACING.medium  
  },
  
  bottomViewRounded: {
    ...bottomView,   
    borderTopLeftRadius: BORDER_RADIUS.large,
    borderTopRightRadius: BORDER_RADIUS.large  
  },
  
  bottomViewShadow: {
    ...bottomView,
    elevation: ELEVATION.medium.elevation  
  },

   bottomViewBackground: {
    ...bottomView,
    backgroundColor: COLORS.white  
   },

  
});

export {
  viewStyles
}