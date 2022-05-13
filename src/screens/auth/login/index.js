import React, {useState} from 'react';
import {View, Text, Image, Keyboard, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {isEmpty} from 'lodash';

import {Button} from '../../../components';
import InputText from '../../../components/Common/TextInput';
import {errorMessage, validateEmail} from '../../../helpers/constants';
import {icons} from '../../../helpers/iconConstant';
import {asyncStorageKey, screenString} from '../../../helpers/strings';
import {colors, fontFamily} from '../../../helpers/utils';
import style from './styles';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [text, setText] = useState(true);

  const {allUserData} = useSelector(state => state.auth);

  const isData = allUserData.filter(
    item => item?.email === email && item?.password === password,
  );

  const onLoginPress = async () => {
    if (email.trim().length === 0) {
      errorMessage('Email', 'email address is required!');
    } else if (!validateEmail(email)) {
      errorMessage('Email', 'valid email is required!');
    } else if (password.trim().length === 0) {
      errorMessage('Password', 'password is required!');
    } else {
      if (!isEmpty(isData)) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: screenString.listingScreen}],
          }),
        );
        AsyncStorage.setItem(
          asyncStorageKey.userDetails,
          JSON.stringify(isData?.[0]),
        );
        AsyncStorage.setItem(asyncStorageKey.isLogin, JSON.stringify(true));
      } else {
        errorMessage('Invalid credential', 'email or password are incorrect!');
      }
    }
  };

  return (
    <View onTouchStart={() => Keyboard.dismiss()} style={style.containerStyle}>
      <Image
        style={style.imageStyle}
        source={icons.loginscreen}
        resizeMode={'stretch'}
      />
      <View style={style.subContainerStyle}>
        <Text style={style.titleTextStyle}>{'Hello Again!'}</Text>
        <Text style={style.subTitleTextStyle}>{'Welcome back'}</Text>
        <InputText
          containerStyle={{
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
        <Text style={style.forgotPasswordTextStyle}>{'Forgot Password?'}</Text>
        <Button
          title={'Login'}
          buttonStyle={style.loginButtonStyle}
          buttonTextStyle={style.loginButtonTextStyle}
          onPress={onLoginPress}
        />
      </View>
      <TouchableOpacity
        style={style.bottomTextViewStyle}
        activeOpacity={0.5}
        onPress={() => navigation.navigate(screenString.signUpScreen)}>
        <Text
          style={[
            style.donotHaveAccountTextStyle,
            {color: colors.commonTextColor},
          ]}>
          {'Don’t have an account?'}
        </Text>
        <Text
          style={[
            style.donotHaveAccountTextStyle,
            {color: colors.forgotPasswordColor},
          ]}>
          {'SIGN UP'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
