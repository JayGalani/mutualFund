import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {icons} from '../../../helpers/iconConstants';
import HeaderButton from '../HeaderButton';
import style from './styles';

const Header = ({
  mainContainer,
  subMainContainer,
  headerTextStyle,
  isLeftView,
  leftIcon,
  leftIconStyle,
  onLeftIconPress,
  isTitle,
  isRightView,
  rightIcon,
  headerButtomMainStyle,
  leftIconContainerStyle,
  rightIconContainerStyle,
  rightIconStyle,
  badgeCount,
  children,
  onRightIconPress,
}) => {
  return (
    <View style={[style.mainContainer, mainContainer]}>
      <View style={[style.subMainContainer, subMainContainer]}>
        {isLeftView ? (
          <View style={style.leftSideViewStyle} onPress={onLeftIconPress}>
            <HeaderButton
              headerButtomMainStyle={headerButtomMainStyle}
              containerStyle={leftIconContainerStyle}
              icon={icons.setting}
              onPress={onLeftIconPress}
              imageStyle={[style.settingIconStyle, leftIconStyle]}
            />
          </View>
        ) : (
          <TouchableOpacity
            activeOpacity={0.7}
            style={style.leftSideViewStyle}
            onPress={onLeftIconPress}
            hitSlop={style.hitSlopStyle}>
            <Image
              style={[style.iconStyle, leftIconStyle]}
              source={leftIcon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        )}
        {isTitle ? (
          <View style={style.centerViewStyle}>
            <Text style={[style.headerTextStyle, headerTextStyle]}>
              {isTitle}
            </Text>
          </View>
        ) : (
          <View style={style.centerViewStyle} />
        )}
        {isRightView ? (
          <View style={style.rightSideViewStyle}>
            <>
              <View style={style.notificationViewStyle}>
                <HeaderButton
                  headerButtomMainStyle={headerButtomMainStyle}
                  containerStyle={rightIconContainerStyle}
                  icon={rightIcon}
                  onPress={onRightIconPress}
                  imageStyle={[style.notificationImageStyle, rightIconStyle]}
                />
              </View>
              {badgeCount > 0 && (
                <View style={style.badgeCountViewStyle}>
                  <Text style={style.badgeCountTextStyle}>{badgeCount}</Text>
                </View>
              )}
            </>
          </View>
        ) : (
          <TouchableOpacity
            activeOpacity={0.7}
            style={style.rightSideViewStyle}
            onPress={onRightIconPress}
            hitSlop={style.hitSlopStyle}>
            <Image
              style={[style.iconStyle, rightIconStyle]}
              source={rightIcon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        )}
      </View>
      {children}
    </View>
  );
};

export default Header;
