// src/utils/loginFunctions.js
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { Alert } from 'react-native';

export const handleGoogleLogin = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    Alert.alert('Google Login Success ✅', `Welcome ${userInfo.user.name}`);
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      Alert.alert('Login cancelled');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      Alert.alert('Login already in progress');
    } else {
      Alert.alert('Error', error.message);
    }
  }
};
