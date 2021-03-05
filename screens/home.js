import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import data from './data';
import {moderateScale} from 'react-native-size-matters';
import {COLORS, SIZES, Icons, FONTS} from '../constants';
import moment from 'moment';
import {search} from 'ss-search';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ModalDropdown from 'react-native-modal-dropdown';

class Home extends Component {
  state = {
    searched: [],
    query: '',
    loading: true,
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
          <View style={styles.container}>
            <Text style={styles.textToday}>Today</Text>
            <TouchableOpacity onPress={() => console.log('setting')}>
              <Image
                source={Icons.Settings}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  marginLeft: moderateScale(200),
                  marginVertical: 5,
                  color: COLORS.black,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.container, {marginTop: moderateScale(1)}]}>
            <Text style={styles.textDate}>
              {moment().format('dddd Do MMMM')}
            </Text>
          </View>
          <TouchableOpacity>
            <View style={styles.searchBar}>
              <Image
                source={Icons.Search}
                style={styles.searchIcon}
                resizeMode="contain"
              />
              <TextInput
                style={styles.searchInput}
                onChangeText={(text) => {
                  const searchKeys = ['Topic', 'Type', 'name'];
                  const searched = search(data, searchKeys, text);
                  this.setState({searched: searched, query: text});
                }}
                placeholder={'Search...'}
              />
            </View>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 20,
              justifyContent: 'space-between',
              paddingBottom: 10,
            }}>
            <ModalDropdown
              options={['Open', 'Closed']}
              onChangeText={(val) => {
                const searchKeys = ['Open', 'Closed'];
                const searched = search(data, searchKeys, val);
                this.setState({searched: searched, query: val});
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.secondDate}>Filter by</Text>
                <Image source={Icons.Down} style={styles.downIcon} />
              </View>
            </ModalDropdown>
            <ModalDropdown
              onPress={() => console.log('Filter')}
              options={['Problem', 'Foundation', 'Empty']}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.secondDate}>Tags</Text>
                <Image source={Icons.Down} style={styles.downIcon} />
              </View>
            </ModalDropdown>
          </View>
        </View>
        <ScrollView>
          <View style={{marginBottom: 20}}>
            <FlatList
              data={this.state.query.length > 0 ? this.state.searched : data}
              renderItem={({item}) => (
                <View style={styles.dataItems}>
                  <View style={{marginHorizontal: 20}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 15,
                        justifyContent: 'space-evenly',
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          width: '55%',
                          marginLeft: 5,
                        }}>
                        <Text style={styles.openedText}>Opened</Text>
                        <Text style={styles.dateOnTop}>
                          {moment().format('dddd Do MMMM')}
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate('Issues')
                        }>
                        <View style={styles.openView}>
                          <Text style={styles.openText}>{item.status}</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View>
                      <Text>{item.Topic}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          backgroundColor: COLORS.best,
                          maxWidth: 80,
                          padding: 6,
                          borderRadius: 30,
                          color: COLORS.secondary,
                        }}>
                        {item.Type}
                      </Text>
                      <Text style={{paddingTop: 6}}>#{item.id}</Text>
                    </View>
                    <View style={styles.bottomContainer}>
                      <View style={styles.userItems}>
                        <Image
                          source={Icons.User}
                          resizeMode="contain"
                          style={styles.downIcon}
                        />
                        <Text style={styles.userNameComments}>{item.name}</Text>
                      </View>
                      <View
                        style={[
                          styles.userItems,
                          {marginLeft: 10, paddingLeft: 10},
                        ]}>
                        <Image
                          source={Icons.Messages}
                          resizeMode="contain"
                          style={styles.downIcon}
                        />
                        <Text style={styles.userNameComments}>
                          {item.count}
                        </Text>
                        <Text
                          style={{
                            marginTop: 5,
                            marginBottom: 5,
                            marginLeft: 3,
                            color: COLORS.lightgrey4,
                            fontFamily: 'Roboto-Bold',
                          }}>
                          {item.comments}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.lightgrey2,
    flex: 1,
  },
  subContainer: {
    backgroundColor: COLORS.white,
  },
  container: {
    marginTop: moderateScale(10),
    flexDirection: 'row',
    marginHorizontal: 10,
    // justifyContent: 'space-evenly',
  },
  textToday: {
    color: COLORS.black,
    fontSize: SIZES.h1,
    paddingLeft: SIZES.padding,
  },
  textDate: {
    color: COLORS.lightgrey4,
    fontSize: SIZES.h3,
    paddingLeft: SIZES.padding,
  },
  searchBar: {
    backgroundColor: '#ECF3F9',
    height: moderateScale(42),
    margin: moderateScale(20),
    elevation: 1.5,
    borderRadius: moderateScale(30),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(10),
  },
  searchIcon: {
    width: 25,
    height: 25,
    tintColor: COLORS.best,
  },
  textButtom: {
    backgroundColor: '#ECF3F9',
  },
  downIcon: {
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5,
    width: 15,
    height: 15,
    tintColor: COLORS.best,
  },
  secondDate: {
    color: COLORS.best,
    fontFamily: 'Roboto-Medium',
    fontSize: SIZES.h4,
    lineHeight: 22,
  },
  dataItems: {
    backgroundColor: COLORS.lightgrey,
    marginTop: 20,
  },
  openedText: {
    fontFamily: 'Roboto',
    fontSize: SIZES.body4,
    color: COLORS.lightgrey4,
    marginRight: moderateScale(4),
    lineHeight: 36,
  },
  dateOnTop: {
    fontFamily: 'Roboto-Medium',
    fontSize: SIZES.body4,
    lineHeight: 36,
    color: COLORS.darkgrey,
  },
  openView: {
    marginLeft: moderateScale(100),
    backgroundColor: '#2F80EC',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    marginBottom: 10,
  },
  openText: {
    color: COLORS.white,
    fontFamily: 'Roboto-Medium',
    fontSize: SIZES.body4,
  },
  bottomContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
  },
  userItems: {
    flexDirection: 'row',
    width: '50%',
  },
  userNameComments: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    color: COLORS.lightgrey4,
    fontFamily: 'Roboto-Bold',
  },
  searchInput: {
    flex: 1,
    fontSize: moderateScale(14),
    fontFamily: 'Gotham SSm Book',
  },
});
