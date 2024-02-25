import {TextStyle} from 'react-native';
import {typo} from '@theme/colors';

export interface PropsTypes {
  font?: Font;
  children?: string | null | React.ReactNode;
  style?: TextStyle;
  color?: string;
  size?: typo.L | typo.M | typo.S | typo.XL | typo.SM | typo.SSM;
  textStyle?: TextStyle;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
}

export enum Font {
  Urbanist = 'Urbanist-Light',
  UrbanistRegular = 'Urbanist-Regular',
  UrbanistBold = 'Urbanist-SemiBold',
  Kaushan = 'KaushanScript-Regular',
  Releway = 'Raleway-ExtraLight',
  RelewayMedium = 'Raleway-Medium',
  RelewayRegular = 'Raleway-Regular',

  LatoRegular = 'Lato-Regular',
  PoppinsRegular = 'Poppins-Regular',
  NotoSerifExtraCondensedRegular = 'NotoSerif_ExtraCondensed-Regular',
  KaushanScriptRegular = 'KaushanScript-Regular',
  OutFitRegular = 'Outfit-Regular',
  OutFitThin = 'Outfit-Thin',
}
