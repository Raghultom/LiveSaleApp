// src/utils/loginFunctions.js
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { Alert } from 'react-native';

export const handleGoogleLogin = async (navigation) => {
  try {
    await GoogleSignin.hasPlayServices();

    // Force sign out before new login to allow account selection
    await GoogleSignin.signOut();

    const userInfo = await GoogleSignin.signIn();

    // The rest of your user info handling remains the same...
    const user = userInfo?.data?.user;
    const idToken = userInfo?.data?.idToken;
    const serverAuthCode = userInfo?.data?.serverAuthCode;
    const scopes = userInfo?.data?.scopes;

    if (user && idToken) {
      Alert.alert('Google Login Success ✅', `Welcome ${user.name}`);
      console.log('=========================');
      console.log('Google Login Successful');
      console.log('=========================');
      console.log('User Details:');
      console.log('Full Name      :', user.name);
      console.log('Given Name     :', user.givenName);
      console.log('Family Name    :', user.familyName);
      console.log('Email          :', user.email);
      console.log('Photo URL      :', user.photo);
      console.log('Google User ID :', user.id);
      console.log('\nAuth Tokens:');
      console.log('ID Token         :', idToken);
      console.log('Server Auth Code :', serverAuthCode);
      console.log(scopes);
      console.log('=========================');
         // ✅ Navigate to Home
      navigation.navigate('Home');
    } else {
      // Alert.alert('Google Login Error ❌', 'Failed to retrieve user details.');
    }

  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      Alert.alert('Login cancelled');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      Alert.alert('Login already in progress');
    } else {
      console.log('❌ GoogleLoginError:', error);
      Alert.alert('GoogleLoginError', error.message);
    }
  }
};



