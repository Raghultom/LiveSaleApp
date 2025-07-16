// src/utils/loginValidation.js
export const validateLoginFields = (email, password) => {
  const errors = {};
  const emailRegex = /\S+@\S+\.\S+/;

  if (!email) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(email)) {
    errors.email = 'Enter a valid email';
  }

  if (!password) {
    errors.password = 'Password is required';
  } else if (password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  return errors;
};
