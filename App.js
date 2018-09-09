import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormInputTextBox from './components/FormInputTextBox/FormInputTextBox';
import FormRegisterButton from './components/FormRegisterButton/FormRegisterButton';
import validate from './validations/validate';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: '',
      errorMessages: {}
    };
    this.saveLoginDetails = this.saveLoginDetails.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  saveLoginDetails() {
    this.validateOnSubmit();
  }

  handleUserNameChange(key, value){
    this.setState({ userName: value });
  }
  handlePasswordChange(key, value){
    this.setState({ password: value });
  }

  validate(fieldName, fieldValue) {
    const errorMessage = validate(fieldName, fieldValue);
    const errorMessages = this.state.errorMessages;
    errorMessages[fieldName] = errorMessage;
    this.setState({ errorMessages });
  }

  validateOnSubmit() {
    const errorMessages = this.state.errorMessages;

    Object.keys(this.state).forEach((key) => {
      if (Object.hasOwnProperty.call(this.state, key)) {
        const fieldName = `${key}`;
        const fieldValue = this.state[key];

        const errorMessage = validate(fieldName, fieldValue);
        errorMessages[fieldName] = errorMessage;
      }
    });

    // Removing fields from error messages where validation message is null
    Object.keys(errorMessages).forEach((key) => {
      const val = errorMessages[key];
      if (val === "" || val === null) {
        delete errorMessages[key];
      }
    });

    this.setState({ errorMessages });
  }

  render() {
    return (
      <View style={styles.container}>
        <FormInputTextBox
          placeholder="User name"
          value={this.state.userName}
          onChangeText={this.handleUserNameChange}
          onBlur={() =>
            this.validate("email",
              this.state.userName)}
        />
        <Text
          style={styles.error}
        >
          {this.state.errorMessages["email"]}
        </Text>
        <FormInputTextBox
          placeholder="Password"
          value={this.state.password}
          secureTextEntry
          onChangeText={this.handlePasswordChange}
          onBlur={() =>
            this.validate("password",
              this.state.password)}
        />
        <Text
          style={styles.error}
        >
          {this.state.errorMessages["password"]}
        </Text>

        <FormRegisterButton
          title="Sign in/Sign up"
          onPress={this.saveLoginDetails}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: "#f00",
    justifyContent: "flex-start"
  }
});
