import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {COLORS} from '../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
class Issues extends Component {
  // state = {
    // item: this.props.route.params.item,
    // loading: true,
  // };
  componentDidMount() {
    console.log('items', this.state.item.node.body);
  }

  render() {
    return (
      <ScrollView>
        <View>
          <View
            style={{
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20,
              marginBottom: 5,
            }}>
            <View
              testID={'FlatList'}
              style={{
                backgroundColor: COLORS.secondary,
                borderRadius: 30,
                elevation: 1.5,
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  borderRadius: 30,
                  width: 48,
                  height: 48,
                }}
                source={{uri: this.state.item.node.author.avatarUrl}}
              />
            </View>
            <View>
              <Text
                style={{
                  textTransform: 'capitalize',
                  fontFamily: 'Roboto-Bold',
                }}>
                {this.state.item.node.author.login}
              </Text>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 20,
            }}>
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                lineHeight: 22,
                color: COLORS.darkgrey,
              }}>
              {this.state.item.node.body}
            </Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={{textTransform: 'capitalize', marginRight: '20%'}}>
                issue Updated
              </Text>
              <Text style={{textTransform: 'capitalize', marginLeft: '20%'}}>
                {moment(this.state.item.node.updatedAt).format('dddd Do MMMM')}{' '}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 15, marginTop: 10}}>
            <AntDesign name="like1" color="#05375a" size={20} />
            <Text style={{marginLeft: 5, fontSize: 18}}>
              {this.state.item.node.comments.totalCount.toString()}
            </Text>
          </View>
          <View>
            <Text>
              <Text>Comments</Text>
            </Text>
          </View>
        </View>
        <View style={{height: 190}} />
      </ScrollView>
    );
  }
}

export default Issues;

const styles = StyleSheet.create({});
