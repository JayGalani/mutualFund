import {StyleSheet} from 'react-native';

import {hp, statusBarHeight, wp} from '../../../helpers/constants';
import {colors, fontFamily} from '../../../helpers/utils';

const style = StyleSheet.create({
  mainContainer: {
    paddingTop: statusBarHeight + hp(1.23),
    alignItems: 'center',
    justifyContent: 'center',
  },
  subMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(100),
  },
  leftSideViewStyle: {
    flex: 0.15,
    paddingStart: wp(5.33),
  },
  centerViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightSideViewStyle: {
    zIndex: 1,
    flex: 0.15,
    alignItems: 'flex-end',
    marginEnd: wp(5.33),
  },
  settingIconStyle: {
    height: hp(2.46),
    width: wp(5),
  },
  iconStyle: {
    height: hp(1.75),
    width: hp(2.14),
    tintColor: colors.commonColor,
  },
  hitSlopStyle: {
    right: 10,
    top: 10,
    left: 10,
    bottom: 10,
  },
  headerTextStyle: {
    alignSelf: 'center',
    fontSize: wp(4.8),
    fontFamily: fontFamily.regular,
    fontWeight: '700',
    color: colors.commonTextColor,
    lineHeight: 26.19,
  },
  centerImage: {width: wp(25)},
  leftImage: {
    height: wp(9),
    width: wp(9),
    borderRadius: wp(4.5),
  },
  notificationImageStyle: {
    height: hp(5),
    width: wp(5),
  },
  badgeCountViewStyle: {
    height: wp(3.73),
    width: wp(3.73),
    right: 1,
    top: 4,
    borderRadius: wp(3.73) / 2,
    position: 'absolute',
    backgroundColor: colors.primaryRed,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.primaryWhite,
  },
  badgeCountTextStyle: {
    fontSize: wp(1.86),
    fontFamily: fontFamily.regular,
    fontWeight: '600',
    color: colors.primaryWhite,
  },
  notificationViewStyle: {
    zIndex: -1,
  },
  searchImageStyle: {
    height: wp(4),
    width: wp(4),
  },
});

export default style;
