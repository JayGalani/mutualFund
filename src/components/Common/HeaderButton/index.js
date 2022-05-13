import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import style from './styles';

const HeaderButton = ({
  onPress,
  icon,
  text,
  imageStyle,
  containerStyle,
  headerButtomMainStyle,
  disabled,
  textStyle,
}) => (
  <View style={headerButtomMainStyle}>
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[style.containerStyle, containerStyle]}
      disabled={disabled}
      hitSlop={style.hitSlopStyle}>
      {icon ? (
        <Image
          source={icon}
          style={[style.imageStyle, imageStyle]}
          resizeMode={'contain'}
        />
      ) : (
        <Text style={[style.textStyle, textStyle]}>{text}</Text>
      )}
    </TouchableOpacity>
  </View>
);

export default HeaderButton;
