import {StyleSheet} from 'react-native';

import {wp} from '../../../helpers/constants';
import {colors} from '../../../helpers/utils';

const style = StyleSheet.create({
  buttonViewStyle: {
    height: wp(4.8),
    width: wp(4.8),
    borderRadius: wp(4.8) / 2,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subRadioButtonStyle: {
    height: wp(2.66),
    width: wp(2.66),
    borderRadius: wp(2.66) / 2,
    alignSelf: 'center',
    backgroundColor: colors.orange,
  },
  iconStyle: {height: wp(2.5), width: wp(2.25)},
});

export default style;
