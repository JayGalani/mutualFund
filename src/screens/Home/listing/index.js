import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Header} from '../../../components';
import {icons} from '../../../helpers/iconConstant';
import style from './styles';
import {colors} from '../../../helpers/utils';
import {hp} from '../../../helpers/constants';
import {asyncStorageKey, screenString} from '../../../helpers/strings';

const ListingScreen = ({navigation}) => {
  const [searchValue, setSearchValue] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [data, setData] = useState([]);

  const getData = async () => {
    const data = await AsyncStorage.getItem(asyncStorageKey.userDetails);
    const userData = JSON.parse(data);
    setCurrentUser(userData);
  };

  const getMutualFundData = async () => {
    let response = await fetch('https://api.mfapi.in/mf');
    let json = await response.json();
    setData(json);
  };

  useEffect(() => {
    getData();
    getMutualFundData();
  }, []);

  const onItemPress = async item => {
    let response = await fetch(`https://api.mfapi.in/mf/${item?.schemeCode}`);
    let json = await response.json();
    navigation.navigate(screenString.detailScreen, {
      data: json,
    });
  };

  return (
    <View style={style.container}>
      <Header isTitle={'Mutual Fund List'} />
      <TouchableOpacity
        style={style.profileIconStyle}
        onPress={() => {
          navigation.navigate(screenString.signUpScreen, {data: currentUser});
        }}>
        <Text style={style.profileTextStyle}>
          {currentUser?.name
            ?.split(' ')
            .map(x => x[0])
            .join('')
            .toUpperCase()}
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
      <FlatList
        data={data?.filter(e =>
          e.schemeName?.toLowerCase()?.includes(searchValue.toLowerCase()),
        )}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={style.itemViewStyle}
              onPress={() => onItemPress(item)}
              activeOpacity={0.5}>
              <Image
                source={icons.christian_faith}
                style={style.iconStyle}
                resizeMode={'contain'}
              />
              <View style={{flex: 1}}>
                <Text style={style.itemTitleTextStyle}>{item?.schemeName}</Text>
                <Text style={style.itemSubTitleViewStyle}>
                  {'Asset Management'}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
        ItemSeparatorComponent={() => <View style={{height: hp(2)}} />}
        ListHeaderComponent={() => <View style={{height: hp(2)}} />}
        ListFooterComponent={() => <View style={{height: hp(2)}} />}
      />
    </View>
  );
};

export default ListingScreen;
