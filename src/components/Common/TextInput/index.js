import React from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';

import {icons} from '../../../helpers/iconConstants';
import style from './styles';

const InputText = ({
  ref,
  isVisible,
  containerStyle,
  textInputStyle,
  placeholder,
  placeholderTextColor,
  keyboardType,
  maxLength,
  value,
  onChangeText,
  icon,
  onButtonPress,
  onCopyPress,
  imageStyle,
  onFocus,
  onBlur,
  textContentType,
  secureTextEntry,
  editable,
  multiline,
  numberOfLines,
  disabled,
}) => {
  return (
    <View style={[style.containerStyle, containerStyle]}>
      <TextInput
        ref={ref}
        style={[style.textInputStyle, textInputStyle]}
        placeholder={placeholder}
        editable={editable}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        maxLength={maxLength}
        autoCorrect={false}
        autoCapitalize={'none'}
        onFocus={onFocus}
        onBlur={onBlur}
        textContentType={textContentType || 'password'}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
      {icon && (
        <TouchableOpacity
          style={{alignSelf: 'center'}}
          activeOpacity={0.7}
          onPress={onButtonPress}>
          <Image
            source={icon}
            style={[style.imageStyle, imageStyle]}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      )}
      {isVisible && (
        <TouchableOpacity
          style={style.copyIconViewStyle}
          onPress={onCopyPress}
          activeOpacity={0.7}
          disabled={disabled}>
          <Image
            source={icons.copy}
            style={style.copyIconStyle}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputText;
