import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#FC603F', //orange
  secondary: '#CDCDD2', //gray
  best: '#5580A0',

  black: '#000000',
  white: '#FFFFFF',

  lightgrey: '#F7F8FA',
  lightgrey2: '#ECF3F9',
  lightgrey3: '#EFEFF1',
  lightgrey4: '#838282',
  darkgrey: '#535653',

  transparent: 'transparent',
};

export const SIZES = {
  //global Size
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // fontsize

  largeTitle: 45,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 38,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: SIZES.largeTitle,
    lineHeight: 20,
  },
  h1: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22},
  body1: {fontFamily: 'Roboto-Medium', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Roboto-Medium', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Roboto-Medium', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Roboto-Medium', fontSize: SIZES.body4, lineHeight: 22},
};
const appTheme = {COLORS, SIZES, FONTS};
export default appTheme;
