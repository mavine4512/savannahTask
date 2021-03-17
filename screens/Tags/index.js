import React, {useState} from 'react';
import {View} from 'react-native-animatable';
import {Image, StyleSheet, Text} from 'react-native';
import {COLORS, Icons, SIZES} from '../../constants';
import ModalDropdown from 'react-native-modal-dropdown';
import {FETCH_ALL_LABELS} from '../../constants/query';
import {useQuery} from '@apollo/react-hooks';

const Tags = () => {
  const [endlableCursor, setEndlableCursor] = useState(null);

  let {data, loading, error} = useQuery(FETCH_ALL_LABELS, {
    variables: {
      endCursor: null,
    },
  });

  if (loading) {
    return null;
  }

  if (error) {
    return null;
  }

  if (data) {
    /* if (data.repository.labels.pageInfo.hasNextPage) {
      setEndlableCursor(data.repository.labels.pageInfo.endCursor);
    }
    */

    let labels = [];

    data.repository.labels.edges.forEach((tag) => {
      labels.push(tag.node.name);
    });

    return (
      <ModalDropdown testID={'tags'} style={{width: 70}} options={[...labels]}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.secondDate}>Tags</Text>
          <Image source={Icons.Down} style={styles.downIcon} />
        </View>
      </ModalDropdown>
    );
  } else {
    return (
      <ModalDropdown testID={'tags'} options={[]}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.secondDate}>Tags</Text>
          <Image source={Icons.Down} style={styles.downIcon} />
        </View>
      </ModalDropdown>
    );
  }
};

export default Tags;
const styles = StyleSheet.create({
  secondDate: {
    color: COLORS.best,
    fontFamily: 'Roboto-Medium',
    fontSize: SIZES.h4,
    lineHeight: 22,
  },
  downIcon: {
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5,
    width: 15,
    height: 15,
    tintColor: COLORS.best,
  },
});
