import {StyleSheet} from 'react-native';

import {hp, wp} from '../../../helpers/constants';
import {colors, fontFamily} from '../../../helpers/utils';

const style = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(89.33),
    height: hp(7.14),
    borderRadius: wp(2.66),
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: wp(6.13),
  },
  textInputStyle: {
    flex: 1,
    alignSelf: 'center',
    paddingVertical: 0,
    fontSize: wp(3.73),
    fontFamily: fontFamily.regular,
    color: colors.commonTextColor,
  },
  imageStyle: {
    height: wp(6.4),
    width: wp(6.4),
    tintColor: colors.iconColor,
  },
  copyIconViewStyle: {
    position: 'absolute',
    alignSelf: 'center',
    right: 14,
  },
  copyIconStyle: {
    height: wp(4),
    width: wp(4),
    tintColor: colors.commonColor,
  },
});

export default style;
