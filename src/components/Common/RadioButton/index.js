import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

import {icons} from '../../../helpers/iconConstants';
import style from './styles';

const RadioButton = ({
  onPress,
  isSelected,
  icon,
  iconStyle,
  buttonViewStyle,
  disable,
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} disabled={disable}>
      <>
        {!isSelected ? (
          <View style={[style.buttonViewStyle, buttonViewStyle]} />
        ) : (
          <View style={[style.buttonViewStyle, buttonViewStyle]}>
            {icon ? (
              <Image
                style={[style.iconStyle, iconStyle]}
                source={icons.check}
                resizeMode={'contain'}
              />
            ) : (
              <View style={style.subRadioButtonStyle} />
            )}
          </View>
        )}
      </>
    </TouchableOpacity>
  );
};

export default RadioButton;
