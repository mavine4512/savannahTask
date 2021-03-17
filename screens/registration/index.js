import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {addUser} from '../../constants/model/data';

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirm_password: '',
      check_textInputChange: false,
      check_passInputChange: false,
      secureTextEntry: true,
      confirm_secureTextEntry: true,
      isValidPassword: true,
      error: null,
    };
  }

  register() {
    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)
    ) {
      Alert.alert('Enter the correct email');
      return;
    }
    if (this.state.password == undefined) {
      Alert.alert('Enter password');
      return;
    }
    const user = {
      email: this.state.email,
      password: this.state.password,
      isLogged: false,
    };
    addUser(user)
      .then((r) => {
        Alert.alert('You have created account successfully');
        this.props.navigation.navigate('Login');
        console.log('user saved');
      })
      .catch((err) => {
        Alert.alert('Error try again');
        console.log('user error', err);
      });
  }

  textInputChange(val) {
    if (val.length !== 0) {
      this.setState({
        email: val,
        check_textInputChange: true,
      });
    } else {
      this.setState({
        email: val,
        check_textInputChange: false,
      });
    }
  }

  passInputChange(val) {
    if (val.trim().length >= 8) {
      this.setState({
        // ...data,
        password: val,
        check_passInputChange: true,
        isValidPassword: true,
      });
    } else {
      this.setState({
        // ...data,
        password: val,
        check_passInputChange: false,
        isValidPassword: false,
      });
    }
  }

  handlePasswordChange(val) {
    if (val.trim().length >= 8) {
      this.setState({
        // ...data,
        // password:val,
        isValidPassword: true,
      });
    } else {
      this.setState({
        // ...data,
        // password:val,
        isValidPassword: false,
      });
    }
  }

  handleConfirmPasswordChange(val) {
    this.setState({
      confirm_password: val,
    }),
      () => {
        if (this.state.password != this.state.confirm_password) {
          this.setState({error: 'password did not match'});
        } else {
          this.setState({error: null});
        }
        console.log(this.state.error, 'this is the err');
      };
  }

  updateSecureTextEntry = () => {
    this.setState(() => {
      return {
        // ...data,
        secureTextEntry: !this.state.secureTextEntry,
      };
    });
  };
  updateConfirmSecureTextEntry = () => {
    this.setState(() => {
      console.log('this.confirm_secureTextEntry');
      return {
        confirm_secureTextEntry: !this.state.confirm_secureTextEntry,
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#5499D8" barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.text_header}>Create Account!</Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <ScrollView>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
              <FontAwesome name="user-o" color="#05375a" size={20} />
              <TextInput
                testID={'email'}
                placeholder="Your email"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => this.textInputChange(val)}
              />
              {this.check_textInputChange ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
            </View>

            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 35,
                },
              ]}>
              Password
            </Text>
            <View style={styles.action}>
              <FontAwesome name="lock" color="#05375a" size={20} />
              <TextInput
                testID={'password'}
                placeholder="Your Password"
                secureTextEntry={this.state.secureTextEntry}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => this.passInputChange(val)}
                onEndEditing={(e) =>
                  this.handlePasswordChange(e.nativeEvent.text)
                }
              />
              <TouchableOpacity onPress={this.updateSecureTextEntry}>
                {this.state.secureTextEntry ? (
                  <FontAwesome name="eye-slash" color="grey" size={20} />
                ) : (
                  <FontAwesome name="eye" color="grey" size={20} />
                )}
              </TouchableOpacity>
            </View>
            {this.state.isValidPassword ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>
                  Password must be more than 8 characters long.
                </Text>
              </Animatable.View>
            )}
            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 35,
                },
              ]}>
              Confirm Password
            </Text>
            <View style={styles.action}>
              <FontAwesome name="lock" color="#05375a" size={20} />
              <TextInput
                testID={'confirmPassword'}
                placeholder="Confirm Your Password"
                secureTextEntry={this.state.confirm_secureTextEntry}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => this.handleConfirmPasswordChange(val)}
              />
              <TouchableOpacity onPress={this.updateConfirmSecureTextEntry}>
                {this.state.confirm_secureTextEntry ? (
                  <FontAwesome name="eye-slash" color="grey" size={20} />
                ) : (
                  <FontAwesome name="eye" color="grey" size={20} />
                )}
              </TouchableOpacity>
            </View>
            {this.state.error ? (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>{this.state.error}</Text>
              </Animatable.View>
            ) : null}
            <View style={styles.textPrivate}>
              <Text style={styles.color_textPrivate}>
                By signing up you agree to our
              </Text>
              <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
                {' '}
                Terms of service
              </Text>
              <Text style={styles.color_textPrivate}> and</Text>
              <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
                {' '}
                Privacy policy
              </Text>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                style={styles.signIn}
                testID={'registerbtn'}
                onPress={() => this.register()}>
                <LinearGradient
                  colors={['#5499D8', '#01ab9d']}
                  style={styles.signIn}>
                  <Text
                    style={[
                      styles.textSign,
                      {
                        color: '#fff',
                      },
                    ]}>
                    Sign Up
                  </Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                testID={'SignIn'}
                onPress={() => this.props.navigation.navigate('Login')}
                style={[
                  styles.signIn,
                  {
                    borderColor: '#5499D8',
                    borderWidth: 1,
                    marginTop: 15,
                  },
                ]}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#5499D8',
                    },
                  ]}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5499D8',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: 'grey',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
});
