import React, {useEffect, useState} from 'react';
import {View, Text, Image, Keyboard, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions, useIsFocused, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {isEmpty} from 'lodash';

import {Button, DropDown} from '../../../components';
import InputText from '../../../components/Common/TextInput';
import {errorMessage, hp, validateEmail, wp} from '../../../helpers/constants';
import {icons} from '../../../helpers/iconConstant';
import {asyncStorageKey, screenString} from '../../../helpers/strings';
import {genderData} from '../../../helpers/constantData';
import {colors, fontFamily} from '../../../helpers/utils';
import style from './styles';
import {USER_DATA} from '../../../actions/types';

const signUpScreen = ({navigation}) => {
  const {allUserData} = useSelector(state => state.auth);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [text, setText] = useState(true);
  const [open, setOpen] = useState(false);
  const [isSelectValue, setIsSelectValue] = useState('');
  const [date, setDate] = useState(new Date());
  const [isDatePicker, setIsDatePicker] = useState(false);

  const opneDropDown = () => setOpen(!open);

  const selectedItem = allUserData?.filter(item => item?.email === email);

  const route = useRoute();
  const isFocued = useIsFocused();

  useEffect(() => {
    if (!isEmpty(route?.params)) {
      setName(route?.params?.data?.name);
      setEmail(route?.params?.data?.email);
      setPassword(route?.params?.data?.password);
      setIsSelectValue(route?.params?.data?.gender);
      setDate(new Date(route?.params?.data?.dob));
    } else {
      setName('');
      setEmail('');
      setPassword('');
      setIsSelectValue('');
      setDate(new Date());
    }
  }, [isFocued]);

  const dispatch = useDispatch();

  const onPressDrop = item => {
    setIsSelectValue(item.label);
    setOpen(false);
  };

  const isDate =
    moment(new Date()).format('DD/MM/YYYY') ===
    moment(date).format('DD/MM/YYYY');

  const onSignUpPress = async () => {
    if (name.trim().length === 0) {
      errorMessage('Full Name', 'Full Name is required!');
    } else if (email.trim().length === 0) {
      errorMessage('Email', 'email address is required!');
    } else if (!validateEmail(email)) {
      errorMessage('Email', 'valid email is required!');
    } else if (!isEmpty(selectedItem) && isEmpty(route.params)) {
      errorMessage('Email', 'This email already exist!');
    } else if (password.trim().length === 0) {
      errorMessage('Password', 'password is required!');
    } else if (isSelectValue == '') {
      errorMessage('Gender', 'Please select gender!');
    } else if (isDate) {
      errorMessage('Date of birth', 'DOB is required!');
    } else {
      let data = {
        name: name,
        email: email,
        password: password,
        gender: isSelectValue,
        dob: moment(date).format('DD/MM/YYYY'),
      };
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: screenString.listingScreen}],
        }),
      );
      AsyncStorage.setItem(asyncStorageKey.isLogin, JSON.stringify(true));
      AsyncStorage.setItem(asyncStorageKey.userDetails, JSON.stringify(data));

      if (isEmpty(route?.params)) {
        let oldData = [];
        oldData = allUserData;
        oldData?.push(data);

        dispatch({type: USER_DATA, payload: oldData});
      } else {
        const finalUpdatedUserData = allUserData?.map(item => {
          if (item?.email === email) {
            return {
              name: name,
              email: email,
              password: password,
              gender: isSelectValue,
              dob: moment(date).format('DD/MM/YYYY'),
            };
          } else {
            return item;
          }
        });

        dispatch({type: USER_DATA, payload: finalUpdatedUserData});
      }
    }
  };

  return (
    <View onTouchStart={() => Keyboard.dismiss()} style={style.containerStyle}>
      <View style={style.subContainerStyle}>
        <Text style={style.subTitleTextStyle}>
          {route?.params ? 'Update User Info' : 'Create new account'}
        </Text>
        <InputText
          containerStyle={{
            marginTop: hp(1.72),
            borderWidth: name ? 1 : 0,
            borderColor: name ? colors.commonColor : colors.shadowColor_5,
          }}
          textInputStyle={{fontFamily: fontFamily.regular}}
          value={name}
          placeholder={'Full Name'}
          placeholderTextColor={colors.shadowColor_6}
          onChangeText={setName}
          keyboardType={'default'}
        />
        <InputText
          containerStyle={{
            marginTop: hp(1.72),
            borderWidth: email ? 1 : 0,
            borderColor: email ? colors.commonColor : colors.shadowColor_5,
          }}
          textInputStyle={{fontFamily: fontFamily.regular}}
          value={email}
          placeholder={'Email ID'}
          placeholderTextColor={colors.shadowColor_6}
          onChangeText={setEmail}
          keyboardType={'email-address'}
        />
        <InputText
          containerStyle={[
            style.textInputContainerStyle,
            {
              borderWidth: password ? 1 : 0,
              borderColor: password ? colors.commonColor : colors.shadowColor_5,
            },
          ]}
          value={password}
          placeholder={'Password'}
          placeholderTextColor={colors.shadowColor_6}
          onChangeText={setPassword}
          secureTextEntry={text}
          icon={text ? icons.close_eye : icons.show_eye}
          onButtonPress={() => setText(!text)}
        />
        <DropDown
          data={genderData}
          open={open}
          onPressDrop={onPressDrop}
          openDropDown={opneDropDown}
          isSelectValue={isSelectValue}
        />
        <TouchableOpacity
          style={{...style.datePickerViewStyle, borderWidth: !isDate ? 1 : 0}}
          onPress={() => setIsDatePicker(true)}>
          <Text
            style={{
              textAlign: 'justify',
              color: !isDate ? colors.primaryBlack : colors.shadowColor_6,
            }}>
            {!isDate ? moment(date).format('DD/MM/YYYY') : 'Date of Birth'}
          </Text>
          <Image
            source={icons.downArrow}
            style={style.downArrowStyle}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <Button
          title={route?.params ? 'Update' : 'Sign Up'}
          buttonStyle={style.loginButtonStyle}
          buttonTextStyle={style.loginButtonTextStyle}
          onPress={onSignUpPress}
        />
        {!isEmpty(route?.params) && (
          <Button
            title={'Log-Out'}
            buttonStyle={{...style.loginButtonStyle, backgroundColor: 'orange'}}
            buttonTextStyle={{
              ...style.loginButtonTextStyle,
              color: colors.commonColor,
            }}
            onPress={() => {
              navigation.navigate(screenString.loginScreen);
              AsyncStorage.clear();
            }}
          />
        )}
      </View>
      {isEmpty(route?.params) && (
        <TouchableOpacity
          style={style.bottomTextViewStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate(screenString.loginScreen)}>
          <Text
            style={[
              style.donotHaveAccountTextStyle,
              {color: colors.commonTextColor},
            ]}>
            {'Already have an account?'}
          </Text>
          <Text
            style={[
              style.donotHaveAccountTextStyle,
              {color: colors.forgotPasswordColor},
            ]}>
            {'SIGN IN'}
          </Text>
        </TouchableOpacity>
      )}
      {isDatePicker && (
        <DatePicker
          modal
          mode="date"
          minimumDate={new Date('01/05/1950')}
          maximumDate={new Date('01/05/2004')}
          open={isDatePicker}
          date={date}
          onConfirm={date => {
            setDate(date);
            setIsDatePicker(false);
          }}
          onCancel={() => {
            setIsDatePicker(false);
          }}
        />
      )}
    </View>
  );
};

export default signUpScreen;
