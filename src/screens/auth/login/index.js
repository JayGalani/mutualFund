import React from 'react';
import { View, Text } from 'react-native';

import style from './styles';

const LoginScreen = () => {
  return (
   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [text, setText] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const onLoginPress = async () => {
    if (email.trim().length === 0) {
      Alert.alert('Email', 'email address is required!');
    } else if (!validateEmail(email)) {
      Alert.alert('Email', 'valid email is required!');
    } else if (password.trim().length === 0) {
      Alert.alert('Password', 'password is required!');
    } else {
      setIsLoading(true);
      const data = {
        email: email,
        password: password,
      };
      let request = {
        data: data,
        onSuccess: () => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: screenString.main }],
            }),
          );
          AsyncStorage.setItem(asyncStorageKey.isLogin, JSON.stringify(true));
          setIsLoading(false);
        },
        onFail: e => {
          if (e.message) {
            setIsLoading(false);
            Alert.alert('Error', e.message);
          }
        },
      };
      dispatch(login(request));
    }
  };

  return (
    <View onTouchStart={() => Keyboard.dismiss()} style={style.containerStyle}>
      <ActivityLoader visible={isLoading} />
      <View style={{ flex: 0.77 }}>
        <Image
          style={style.imageStyle}
          source={icons.loginScreen}
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
            textInputStyle={{ fontFamily: fontFamily.ceraPro_Light }}
            value={email}
            placeholder={'Email ID'}
            placeholderTextColor={colors.shadowColor_5}
            onChangeText={setEmail}
            keyboardType={'email-address'}
          />
          <InputText
            containerStyle={[
              style.textInputContainerStyle,
              {
                borderWidth: password ? 1 : 0,
                borderColor: password
                  ? colors.commonColor
                  : colors.shadowColor_5,
              },
            ]}
            value={password}
            placeholder={'Password'}
            placeholderTextColor={colors.shadowColor_5}
            onChangeText={setPassword}
            secureTextEntry={text}
            icon={text ? icons.close_eye : icons.show_eye}
            onButtonPress={() => setText(!text)}
          />
          <Pressable
            style={{ alignSelf: 'flex-end' }}
            onPress={() => {
              navigation.navigate(screenString.forgotPassword);
            }}>
            <Text style={style.forgotPasswordTextStyle}>
              {'Forgot Password?'}
            </Text>
          </Pressable>
          <Button
            title={'Login'}
            buttonStyle={style.loginButtonStyle}
            buttonTextStyle={style.loginButtonTextStyle}
            onPress={onLoginPress}
          />
        </View>
      </View>
      <View style={{ flex: 0.23 }}>
        <BottomView
          loginTitle
          haveAccount
          signUpText
          loginWithTextStyle={{ marginHorizontal: wp(2.26) }}
          onSignUpTextPress={() => navigation.navigate(screenString.signUp)}
        />
      </View>
    </View>
  );
};

export default LoginScreen;