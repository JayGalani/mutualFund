import {StyleSheet} from 'react-native';

import {hp, statusBarHeight, wp} from '../../../helpers/constants';
import {colors, fontFamily} from '../../../helpers/utils';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subContainerStyle: {
    height: hp(7.14),
    marginHorizontal: wp(5.33),
    paddingLeft: wp(4.53),
    marginTop: hp(2.7),
    backgroundColor: colors.backgroundColor,
    borderRadius: wp(2.13),
    flexDirection: 'row',
  },
  searchIconStyle: {
    height: wp(4.8),
    width: wp(4.8),
    alignSelf: 'center',
    tintColor: colors.commonColor,
  },
  textInputStyle: {
    flex: 1,
    marginLeft: wp(4.8),
    marginRight: wp(8.8),
    alignSelf: 'center',
    paddingVertical: 0,
    fontSize: wp(3.5),
    fontFamily: fontFamily.regular,
    color: colors.commonColor,
  },
  closeIconViewStyle: {
    position: 'absolute',
    height: hp(3),
    width: wp(3),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    right: wp(5.46),
  },
  closeIconStyle: {
    height: wp(2.53),
    width: wp(2.53),
    alignSelf: 'center',
  },
  profileIconStyle: {
    position: 'absolute',
    top: statusBarHeight,
    right: wp(5.33),
    backgroundColor: colors.backgroundColor,
    height: hp(5),
    width: hp(5),
    borderRadius: hp(5) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileTextStyle: {
    fontFamily: fontFamily.semiBold,
    fontSize: wp(3.73),
    color: colors.commonColor,
  },
  itemViewStyle: {
    padding: hp(2),
    marginHorizontal: wp(5.33),
    backgroundColor: colors.commonTextColor,
    borderRadius: wp(2.66),
    flexDirection: 'row',
  },
  iconStyle: {
    height: hp(5),
    width: hp(5),
    tintColor: 'white',
    alignSelf: 'center',
  },
  itemTitleTextStyle: {
    flex: 1,
    marginHorizontal: wp(2.66),
    color: colors.primaryWhite,
    fontSize: wp(3.73),
    fontFamily: fontFamily.semiBold,
  },
  itemSubTitleViewStyle: {
    marginTop: hp(1),
    marginHorizontal: wp(2.66),
    color: colors.primaryWhite,
    fontSize: wp(3),
    fontFamily: fontFamily.medium,
  },
});

export default style;
