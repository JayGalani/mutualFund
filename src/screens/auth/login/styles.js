import {StyleSheet} from 'react-native';

import {hp, wp} from '../../../helpers/constants';
import {colors, fontFamily} from '../../../helpers/utils';

const style = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: colors.primaryWhite,
  },
  imageStyle: {
    height: hp(24.54),
    width: wp(45.33),
    alignSelf: 'flex-end',
    marginTop: hp(5.66),
  },
  subContainerStyle: {
    position: 'absolute',
    marginTop: hp(28.57),
    marginHorizontal: wp(5.33),
  },
  titleTextStyle: {
    color: colors.commonColor,
    fontSize: wp(5.33),
    fontFamily: fontFamily.regular,
    fontWeight: '700',
  },
  subTitleTextStyle: {
    marginTop: hp(0.49),
    marginBottom: hp(2.46),
    fontSize: wp(9.6),
    fontFamily: fontFamily.regular,
    fontWeight: '700',
    color: colors.commonColor,
  },
  textInputContainerStyle: {
    marginTop: hp(1.72),
    marginBottom: hp(2.46),
  },
  forgotPasswordTextStyle: {
    alignSelf: 'flex-end',
    fontSize: wp(3.73),
    fontFamily: fontFamily.regular,
    fontWeight: 'normal',
    lineHeight: 20,
    color: colors.forgotPasswordColor,
  },
  loginButtonStyle: {
    height: hp(7.14),
    width: wp(89.33),
    marginVertical: hp(4.31),
    alignSelf: 'center',
    borderRadius: wp(2.66),
    backgroundColor: colors.commonColor,
  },
  loginButtonTextStyle: {
    color: colors.primaryWhite,
    fontSize: wp(4.8),
    fontFamily: fontFamily.regular,
    fontWeight: '400',
  },
  bottomTextViewStyle: {
    position: 'absolute',
    bottom: hp(5),
    flexDirection: 'row',
    marginTop: hp(5.33),
    alignSelf: 'center',
  },
  donotHaveAccountTextStyle: {
    fontSize: wp(3.73),
    fontFamily: fontFamily.semiBold,
    color: colors.commonTextColor,
  },
});

export default style;
