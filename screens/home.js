import React, {useState} from 'react';
// import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {COLORS, SIZES, Icons, FONTS} from '../constants';
import moment from 'moment';
import {search} from 'ss-search';
import {TouchableOpacity} from 'react-native-gesture-handler';

// class Home extends Component {
function Home({navigation}) {
  const [data, setData] = useState([
    {
      Topic:
        'Compilation error  building on iOS simulator:fatal error: could not build module',
      Type: 'Problem',
      name: 'Mavine Naaman',
      count: 6,
      comments: 'comments',
      id: 1,
    },
    {
      Topic: 'Testing the text',
      Type: 'Foundation',
      name: 'Mavine Naaman',
      count: 20,
      comments: 'comments',
      id: 2,
    },
    {
      Topic: 'Testing the text',
      Type: 'Problem',
      name: 'Developer',
      count: 10,
      comments: 'comments',
      id: 3,
    },
    {
      Topic: 'Can You react natively',
      Type: 'Problem',
      name: 'React Native',
      count: 15,
      comments: 'comments',
      id: 4,
    },
    {
      Topic: 'Testing the text',
      Type: 'Foundation',
      name: 'Ken Kings',
      count: 10,
      comments: 'comments',
      id: 5,
    },
    {Topic: '', Type: 'Empty', name: 'Tester', comments: 'comments', id: 6},
    {
      Topic: '',
      Type: 'Empty',
      name: 'Mavine Naaman',
      count: 60,
      comments: 'comments',
      id: 7,
    },
  ]);

  const [searched, setSearched] = useState();

  // render() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <View style={styles.container}>
          <Text style={styles.textToday}>Today</Text>
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
        </View>
        <View style={[styles.container, {marginTop: moderateScale(1)}]}>
          <Text style={styles.textDate}>{moment().format('dddd Do MMMM')}</Text>
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
                // this.setState({searched: searched, query: text});
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
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <Text style={styles.secondDate}>Date</Text>
            <Image
              source={Icons.Down}
              resizeMode="contain"
              style={styles.downIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <Text style={styles.secondDate}>Filter by</Text>
            <Image source={Icons.Down} style={styles.downIcon} />
          </TouchableOpacity>
          <Text style={styles.secondDate}>iOS</Text>
          <Text style={styles.secondDate}>Xcode</Text>
        </View>
      </View>
      <ScrollView>
        <View style={{marginBottom: 20}}>
          <FlatList
            data={data}
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
                      onPress={() => navigation.navigate('Issues')}>
                      <View style={styles.openView}>
                        <Text style={styles.openText}>Open</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text>{item.Topic}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text>{item.Type}</Text>
                    <Text>#{item.id}</Text>
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
                      <Text style={styles.userNameComments}>{item.count}</Text>
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
// }

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
