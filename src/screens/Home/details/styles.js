import {StyleSheet} from 'react-native';

import {hp, wp} from '../../../helpers/constants';
import {fontFamily} from '../../../helpers/utils';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: wp(4),
  },
  titleText: {
    fontSize: wp(4),
    fontFamily: fontFamily.semiBold,
    marginTop: hp(2),
  },
  titleDescText: {
    fontSize: wp(3.5),
    fontFamily: fontFamily.semiBold,
    marginTop: hp(2),
    color: 'grey',
  },
  titleFundText: {
    fontSize: wp(3),
    fontFamily: fontFamily.medium,
    color: 'grey',
  },
  categoryTitle: {
    fontSize: wp(4),
    fontWeight: 'bold',
    color: 'black',
  },
  categoryDescText: {
    fontSize: wp(4),
    fontFamily: fontFamily.semiBold,
    color: 'grey',
    marginTop: hp(0.5),
  },
  categoryContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp(2),
  },
  trendsText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: wp(5),
  },
  downIcon: {
    height: wp(4),
    width: wp(4),
    alignSelf: 'center',
  },
  linearGradientStyle: {
    padding: 18,
    borderRadius: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(40),
  },
  buttonText: {
    fontFamily: fontFamily.regular,
    color: 'black',
    fontSize: wp(4),
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(3),
  },
});

export default style;
