import { useCallback } from 'react';
import { Alert } from 'react-native';
import { login } from '../services/loginService';

export const useLogin = ({ onLoginSuccess, onLoginError }) => {
  return useCallback(async (values, { setSubmitting, setFieldError }) => {
    try {
      const response = await login(values);
      onLoginSuccess?.(response);
      // alert(response.message);
      Alert.alert('Success', response.message);
    } catch (error) {
      const message = error.response?.data?.message || error.message ||
        'An unexpected error occurred';
      setFieldError('password', message);
      onLoginError?.(error);
    } finally {
      setSubmitting(false);
    }
  }, [onLoginSuccess, onLoginError]);
};