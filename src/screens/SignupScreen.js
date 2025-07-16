import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    ScrollView,
    Alert,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
const SignupScreen = ({ navigation }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        address: '',
    });

    const handleChange = (key, value) => {
        setFormData({ ...formData, [key]: value });
    };

    const handleSubmit = () => {
        //   const { username, email, password, confirmPassword, phone, address } = formData;

        //   if (!username || !email || !password || !confirmPassword || !phone || !address) {
        //     return Alert.alert('Validation Error', 'Please fill in all fields');
        //   }

        //   if (password !== confirmPassword) {
        //     return Alert.alert('Validation Error', 'Passwords do not match');
        //   }

        Alert.alert('Success', 'Signup successful!', [
            {
                text: 'OK',
                onPress: () => navigation.replace('Login'), // replaces current screen
            },
        ]);

    };


    return (
        <KeyboardAvoidingView
            style={styles.wrapper}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Sign Up</Text>

                <TextInput
                    placeholder="Username"
                    value={formData.username}
                    onChangeText={(text) => handleChange('username', text)}
                    style={styles.input}
                />

                <TextInput
                    placeholder="Email"
                    keyboardType="email-address"
                    value={formData.email}
                    onChangeText={(text) => handleChange('email', text)}
                    style={styles.input}
                />

                <TextInput
                    placeholder="Password"
                    secureTextEntry
                    value={formData.password}
                    onChangeText={(text) => handleChange('password', text)}
                    style={styles.input}
                />

                <TextInput
                    placeholder="Confirm Password"
                    secureTextEntry
                    value={formData.confirmPassword}
                    onChangeText={(text) => handleChange('confirmPassword', text)}
                    style={styles.input}
                />

                <TextInput
                    placeholder="Phone Number"
                    keyboardType="phone-pad"
                    value={formData.phone}
                    onChangeText={(text) => handleChange('phone', text)}
                    style={styles.input}
                />

                <TextInput
                    placeholder="Address"
                    multiline
                    numberOfLines={3}
                    value={formData.address}
                    onChangeText={(text) => handleChange('address', text)}
                    style={[styles.input, { textAlignVertical: 'top' }]}
                />

                <Button title="Register" onPress={handleSubmit} color="#007bff" />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#f4f6fd',
    },
    container: {
        padding: 20,
        paddingBottom: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
});

export default SignupScreen;
