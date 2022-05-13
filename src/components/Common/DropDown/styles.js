import {StyleSheet} from 'react-native';

import {hp, isIos, wp} from '../../../helpers/constants';
import {colors, fontFamily} from '../../../helpers/utils';

const style = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: wp(6.4),
    paddingVertical: hp(2),
    backgroundColor: colors.backgroundColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(1.72),
    borderRadius: wp(2.66),
  },
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  placeHolderTextStyle: {
    fontSize: wp(3.73),
    fontFamily: fontFamily.regular,
    fontWeight: '400',
    lineHeight: 26.19,
  },
  downArrowStyle: {
    height: hp(1.29),
    width: hp(1.29),
    alignSelf: 'center',
    tintColor: colors.commonColor,
    transform: [{rotate: '90deg'}],
  },
  dropDownStyle: {
    width: wp(88.5),
    marginHorizontal: wp(0.5),
    position: 'absolute',
    zIndex: 1,
    backgroundColor: colors.primaryWhite,
    marginTop: isIos ? hp(8) : hp(9),
    borderRadius: wp(2.66),
    top: hp(35),
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOpacity: 2,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 12,
    elevation: 6,
  },
  itemViewStyle: {
    flexDirection: 'row',
    paddingVertical: hp(0.7),
    marginHorizontal: wp(5.33),
    borderBottomColor: colors.backgroundColor,
  },
  itemTextStyle: {
    flex: 1,
    fontSize: wp(3.2),
    fontFamily: fontFamily.regular,
    color: colors.commonTextColor,
    lineHeight: 26.19,
  },
  selectedIconStyle: {
    height: wp(4.26),
    width: wp(4.26),
    marginRight: wp(2.4),
    alignSelf: 'center',
  },
});

export default style;
