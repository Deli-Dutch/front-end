import menudata from '../menudata';
import exdata from '../exdata';
import React, {useState, useEffect} from 'react';
import styles from '../styles';
import AlertDialog from './AlertDialog';
import {
  ScrollView,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';
const MenuList = ({navigation}) => {
  const [filteredDataSource, setFilteredDataSource] = useState([]);

  useEffect(() => {
    getMemberInfo();
  }, []);

  const getMemberInfo = async () => {
    setFilteredDataSource(menudata);
    // api.getMember().then(function (data) {
    //   setFilteredDataSource(data);
    //   setMasterDataSource(data);
    // });
  };
  const ItemView = (item, key) => {
    //const imgUrl = `https://www.assembly.go.kr/static/portal/img/openassm/${item.MONA_CD}.jpg`;
    return (
      <TouchableOpacity
        key={key}>
        <View
          style={{
            flex: 2,
            backgroundColor: '#AAAAAA',
          }}></View>
        <View
          style={{
            flex: 5,
            flexDirection: 'column',
            backgroundColor: '#BBFF',
          }}>
          <View style={{flex: 2}}>
            <Text
              style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
              {item.name}
            </Text>
          </View>
          <View
            style={{flex: 2, justifyContent: 'center', flexDirection: 'row'}}>
            <Text>음식점:</Text>
            <Text>{item.restaurant_id}</Text>
          </View>
          <View style={{flex: 3, flexDirection: 'row'}}>
            <View
              style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
              <Text style={{marginBottom: 10}}>픽업 장소</Text>
              <Text>{item.name}</Text>
            </View>
            <View
              style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
              <Text style={{marginBottom: 10}}>주문 예정 시간</Text>
              <Text>{item.name}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#ffffff',
        height: '100%',
      }}>
      <ScrollView style={{margin: 20}}>
        <View style={styles.assemblyListBar}>
          {filteredDataSource.map((e, i) => ItemView(e, i))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuList;