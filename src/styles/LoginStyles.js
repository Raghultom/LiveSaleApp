// src/styles/loginStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#007bff',
    marginTop: 20,
    paddingVertical: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    marginLeft: 4,
    fontSize: 13,
  },
  googleButton: {
    marginTop: 20,
    alignSelf: 'center',
    width: 220,
    height: 48,
  },
});

export default styles;
