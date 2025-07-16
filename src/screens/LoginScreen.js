// src/components/LoginScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';

import styles from '../styles/LoginStyles';
import { configureGoogleSignIn } from '../config/GoogleConfig';
import { validateLoginFields } from '../utilities/LoginValidations';
import { handleGoogleLogin } from '../utilities/LoginFunctions';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    configureGoogleSignIn();
  }, []);

  const onLogin = () => {
    const validationErrors = validateLoginFields(email, password);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      Alert.alert('Login Successful ✅', `Email: ${email}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

      <TouchableOpacity style={styles.button} onPress={onLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <GoogleSigninButton
        style={styles.googleButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={handleGoogleLogin}
      />
    </View>
  );
};

export default LoginScreen;
