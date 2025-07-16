// src/config/googleConfig.js
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const configureGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId: 'YOUR_WEB_CLIENT_ID', // Replace with your Firebase client ID
    offlineAccess: true,
  });
};
