import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Platform,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
// import { AuthContext} from './Context';
import {DefaultTheme} from '@react-navigation/native';
// import users from '../model/Users';
// import {addUser, getUser} from './../model/data';

const {colors} = DefaultTheme;
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      check_TextInputChange: false,
      check_passInputChange: false,
      secureTextEntry: true,
      isValidUser: true,
      isValidPassword: true,
    };
  }

  textInputChange(val) {
    if (val.trim().length >= 4) {
      this.setState({
        // ...data,
        email: val,
        check_TextInputChange: true,
        isValidUser: true,
        // isValidPassword:true
      });
    } else {
      this.setState({
        // ...data,
        email: val,
        check_TextInputChange: false,
        isValidUser: false,
        // isValidPassword:false
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

  updateSecureTextEntry = () => {
    this.setState({
      // ...data,
      secureTextEntry: !this.state.secureTextEntry,
    });
  };

  handleValidUser(val) {
    if (val.trim().length >= 4) {
      this.setState({
        // ...data,
        isValidUser: true,
      });
    } else {
      this.setState({
        // ...data,
        isValidUser: false,
      });
    }
  }

  loginHandle() {
    if (this.state.email === undefined) {
      Alert.alert('Enter email');
      return;
    }
    if (this.state.password === undefined) {
      Alert.alert('Enter password');
      return;
    }
    getUser()
      .then((user) => {
        console.log(user, 'working');
        if (user != null) {
          user.email == this.state.email &&
            user.password == this.state.password;
        }
        {
          user.isLogged = true;
          addUser(user)
            .then((r) => {
              this.props.navigation.navigate('Home');
            })
            .catch((error) => {});
        }
      })
      .catch((error) => {
        Alert.alert('Error finding user');
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#5499D8" barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.text_header}>Login</Text>
        </View>
        <Animatable.View
          animation="fadeInUpBig"
          style={[styles.footer, {backgroundColor: colors.background}]}>
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Email"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => this.textInputChange(val)}
              onEndEditing={(e) => this.handleValidUser(e.nativeEvent.text)}
            />
            {this.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          {this.state.isValidUser ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Email must be a valid email.</Text>
            </Animatable.View>
          )}

          <Text
            style={[
              styles.text_footer,
              {
                color: colors.text,
                marginTop: 35,
              },
            ]}>
            password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
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
                <Feather name="eye-off" color="gray" size={20} />
              ) : (
                <Feather name="eye" color="gray" size={20} />
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

          <TouchableOpacity>
            <Text style={{color: '#094482', marginTop: 15}}>
              Forgot password?
            </Text>
          </TouchableOpacity>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => {
                this.loginHandle();
              }}>
              <LinearGradient
                colors={['#5499D8', '#01ab9d']}
                style={styles.signIn}>
                <Text style={[styles.textSign, {color: '#fff'}]}>Sign In</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Registration')}
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
                Registration
              </Text>
            </TouchableOpacity>
          </View>
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
    flex: 3,
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
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
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
});
