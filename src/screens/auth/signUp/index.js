import React, {useState} from 'react';
import {View, Text, Image, Keyboard, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

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

  console.log('auth:--', allUserData);

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

      dispatch({type: USER_DATA, payload: [data]});
    }
  };

  return (
    <View onTouchStart={() => Keyboard.dismiss()} style={style.containerStyle}>
      <View style={style.subContainerStyle}>
        <Text style={style.subTitleTextStyle}>{'Create new account'}</Text>
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
          style={{
            borderRadius: wp(2.66),
            borderWidth: !isDate ? 1 : 0,
            marginTop: hp(1.72),
            paddingVertical: hp(2.66),
            backgroundColor: colors.backgroundColor,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: wp(6.33),
          }}
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
          title={'Sign Up'}
          buttonStyle={style.loginButtonStyle}
          buttonTextStyle={style.loginButtonTextStyle}
          onPress={onSignUpPress}
        />
      </View>
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
      {isDatePicker && (
        <DatePicker
          modal
          mode="date"
          maximumDate={new Date('2004/05/01')}
          open={isDatePicker}
          date={date}
          onConfirm={date => {
            setIsDatePicker(false);
            setDate(date);
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
