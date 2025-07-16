import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  const buttons = [
    { title: 'Go to Cart', screen: 'Cart' },
    { title: 'Go to Contact', screen: 'Contact' },
    { title: 'Login Page', screen: 'Login' },
    { title: 'SignupPage', screen: 'Signup' },

    // Add more buttons here if needed
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>🎉 Welcome to Live Sale 🎉</Text>

      {buttons.map((btn, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => navigation.navigate(btn.screen)}
        >
          <Text style={styles.buttonText}>{btn.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    paddingTop: 60,
    alignItems: 'flex-start',
    backgroundColor: '#fefefe',
    minHeight: '100%',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
