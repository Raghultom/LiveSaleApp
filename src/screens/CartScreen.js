import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import ConfirmationModal from '../utilities/NavigationUtils'; // adjust path if needed

export class CartScreen extends Component {
  state = {
    isLoading: true,
    showModal: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
  }

  handleGoHome = () => {
    this.setState({ showModal: true });
  };

  confirmNavigation = () => {
    console.log('yes button pressed');

    this.setState({ showModal: false }, () => {
      this.props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        }) 
      );
    });
  };

  render() {
    const { isLoading, showModal } = this.state;

    if (isLoading) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#007bff" />
          <Text style={styles.loadingText}>Loading Cart...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>🛒 Cart Screen</Text>
        <Button title="Go to Home" onPress={this.handleGoHome} color="#007bff" />
        <ConfirmationModal
          visible={showModal}
          title="Go to Home?"
          message="Do you really want to go back to the Home screen?"
          onConfirm={this.confirmNavigation}
          onCancel={() => this.setState({ showModal: false })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefefe',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
});

export default CartScreen;
