import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {addUser, getUser} from '../../constants/model/data';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import {logout} from '../../model/data'

export default class Logout extends Component {
  constructor(props) {
    super(props);
  }
  logOut() {
    // signOut().then(()=>{
    //     console.log('user loged out')
    //     this.props.navigation.navigate('Login');
    // })

    getUser()
      .then((user) => {
        console.log(user, 'working');
        if (user != null) {
          user.isLogged = false;
          addUser(user)
            .then((r) => {
              console.log('user loged out');
              this.props.navigation.navigate('Login');
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
      <View style={styles.Container}>
        <TouchableOpacity
          style={styles.signIn}
          onPress={() => {
            this.logOut();
          }}
          icon="camera">
          <View style={styles.Logout}>
            <FontAwesome name="sign-out" color="#2d3032" size={38} />
            <Text style={styles.logoutText}>LogOut</Text>
          </View>
          <Text style={styles.MoreText}>Clear local data and logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Logout: {
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
  },
  logoutText: {
    paddingTop: 7,
    paddingLeft: 9,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#2d3032',
  },
  MoreText: {
    paddingLeft: 15,
    paddingTop: 5,
    fontSize: 12,
  },
});
