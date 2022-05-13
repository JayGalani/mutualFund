import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';

import {icons} from '../../../helpers/iconConstant';
import {colors} from '../../../helpers/utils';
import style from './styles';

const DropDown = ({data, isSelectValue, open, openDropDown, onPressDrop}) => {
  return (
    <>
      <TouchableOpacity
        style={{
          ...style.containerStyle,
          borderWidth: isSelectValue == '' ? 0 : 1,
          bordeColor: isSelectValue == '' && colors.primaryBlack,
        }}
        key={data?.id}
        onPress={openDropDown}
        activeOpacity={0.5}>
        <Text
          style={{
            ...style.placeHolderTextStyle,
            color:
              isSelectValue == '' ? colors.shadowColor_7 : colors.primaryBlack,
          }}>
          {isSelectValue == '' ? 'Gender' : isSelectValue}
        </Text>
        <Image
          source={icons.downArrow}
          style={style.downArrowStyle}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
      {open && (
        <View style={style.dropDownStyle}>
          {data.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => onPressDrop(item)}
                style={[
                  style.itemViewStyle,
                  {
                    borderBottomWidth: index !== data.length - 1 ? 1 : 0,
                  },
                ]}
                key={index}>
                <Text style={style.itemTextStyle}>{item.label}</Text>
                <Image
                  source={
                    isSelectValue == item.label
                      ? icons.selected
                      : icons.withoutSelected
                  }
                  style={style.selectedIconStyle}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </>
  );
};

export default DropDown;
