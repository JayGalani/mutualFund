import {StyleSheet} from 'react-native';

import {hp, wp} from '../../../helpers/constants';
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
});

export default style;
