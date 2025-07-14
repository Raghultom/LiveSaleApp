import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Welcome to Live Sale 🎉</Text>

      <View style={styles.buttonRow}>
        <View style={styles.buttonWrapper}>
          <Button
            title="Go to Cart"
            onPress={() => navigation.navigate('Cart')}
            color="#007bff"
          />
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            title="Go to Contact"
            onPress={() => navigation.navigate('Contact')}
            color="#007bff"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Login Page"
            onPress={() => navigation.navigate('Login')}
            color="#007bff"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,

  },
  buttonWrapper: {
    marginHorizontal: 5,
    width: 120,
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default HomeScreen;