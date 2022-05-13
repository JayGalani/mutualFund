import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import {hp} from '../../../helpers/constants';
import {colors} from '../../../helpers/utils';
import styles from './styles';

const Button = ({
  title,
  loading,
  buttonStyle,
  buttonTextStyle,
  onPress,
  icon,
  iconStyle,
  disabled,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.buttonStyle, buttonStyle]}>
      {loading ? (
        <ActivityIndicator size={hp(2)} color={colors.backgroundColor} />
      ) : (
        <View style={styles.buttonViewStyle}>
          {icon && (
            <Image
              style={[styles.iconStyle, iconStyle]}
              source={icon}
              resizeMode={'contain'}
            />
          )}
          <Text style={[styles.buttonTextStyle, buttonTextStyle]}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
