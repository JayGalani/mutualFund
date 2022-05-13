import {StyleSheet} from 'react-native';

import {hp, wp} from '../../../helpers/constants';
import {colors, fontFamily} from '../../../helpers/utils';

const style = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(89.33),
    height: hp(7.14),
  },
  buttonTextStyle: {
    textAlign: 'center',
    fontSize: wp(4.8),
    fontFamily: fontFamily.regular,
    color: colors.primaryWhite,
  },
  iconStyle: {
    height: wp(6),
    width: wp(6),
  },
  buttonViewStyle: {
    flexDirection: 'row',
  },
});

export default style;
