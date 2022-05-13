import {StyleSheet} from 'react-native';

import {wp} from '../../helpers/constants';
import {colors} from '../../helpers/utils';

const style = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },
  indicatorViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryWhite,
    borderRadius: wp(5.33),
    height: wp(22.4),
    width: wp(22.4),
    shadowColor: colors.primaryBlack,
    shadowOpacity: 0.05,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowRadius: 5,
    elevation: 3,
  },
  imageStyle: {
    height: wp(15),
    width: wp(15),
  },
});

export default style;
