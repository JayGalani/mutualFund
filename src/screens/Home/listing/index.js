import React, {useEffect, useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

import {Header} from '../../../components';
import {icons} from '../../../helpers/iconConstant';
import style from './styles';
import {colors, fontFamily} from '../../../helpers/utils';
import {hp, statusBarHeight, wp} from '../../../helpers/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {asyncStorageKey, screenString} from '../../../helpers/strings';

const ListingScreen = ({navigation}) => {
  const [searchValue, setSearchValue] = useState('');
  const [currentUser, setCurrentUser] = useState({});

  const getData = async () => {
    const data = await AsyncStorage.getItem(asyncStorageKey.userDetails);
    const userData = JSON.parse(data);
    console.log(userData);
    setCurrentUser(userData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={style.container}>
      <Header isTitle={'Mutual Fund List'} />
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: statusBarHeight,
          right: wp(5.33),
          backgroundColor: colors.backgroundColor,
          height: hp(5),
          width: hp(5),
          borderRadius: hp(5) / 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate(screenString.signUpScreen, {data: currentUser});
        }}>
        <Text
          style={{fontFamily: fontFamily.semiBold, color: colors.commonColor}}>
          {currentUser?.name
            ?.split(' ')
            .map(x => x[0])
            .join('')}
        </Text>
      </TouchableOpacity>
      <View style={style.subContainerStyle}>
        <Image
          style={style.searchIconStyle}
          source={icons.search}
          resizeMode={'contain'}
        />
        <TextInput
          style={style.textInputStyle}
          placeholder={'Search Mutual fund'}
          placeholderTextColor={colors.shadowColor_6}
          value={searchValue}
          onChangeText={text => setSearchValue(text)}
        />
        {searchValue?.length > 0 && (
          <TouchableOpacity
            style={style.closeIconViewStyle}
            onPress={() => setSearchValue('')}>
            <Image
              style={style.closeIconStyle}
              source={icons.close}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          paddingVertical: hp(2),
          marginHorizontal: wp(5.33),
          backgroundColor: colors.orange,
          borderRadius: wp(2.66),
        }}>
        <Text>cehvcas</Text>
      </View>
    </View>
  );
};

export default ListingScreen;
