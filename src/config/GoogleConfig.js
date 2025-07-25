// src/config/googleConfig.js
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const configureGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId: '654309351854-i79u4l662jlnth9atp909etqu39a3fd3.apps.googleusercontent.com',
    offlineAccess: true,
  });

};
