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

const PersonalSearch = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    getMemberInfo();
  }, []);

  const getMemberInfo = async () => {
    setFilteredDataSource(exdata);
    setMasterDataSource(exdata);
    // api.getMember().then(function (data) {
    //   setFilteredDataSource(data);
    //   setMasterDataSource(data);
    // });
  };

  const searchFilterFunction = text => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.content
          ? item.content.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = (item, key) => {
    //const imgUrl = `https://www.assembly.go.kr/static/portal/img/openassm/${item.MONA_CD}.jpg`;
    return (
      <TouchableOpacity
        key={key}
        style={styles.flatListItem}
        onPress={()=>AlertDialog(item)}>
        <View
          style={{
            flex: 5,
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#aaaaaa' //#005BAA
          }}>
          <View style={{flex: 1.5}}>
            <Text
              style={styles.title}>
              {item.content}
            </Text>
          </View>
          <View
            style={{flex: 1, flexDirection: 'row'}}>
            <Text>음식점:</Text>
            <Text>{item.restaurant_id}</Text>
          </View>
          <View
              style={{ flex: 1, flexDirection: 'row'}}>
              <Text style={styles.info}>픽업 장소:&nbsp;&nbsp;&nbsp;</Text>
              <Text style={{color: 'black'}}>{item.pick_up}</Text>
            </View>
            <View
              style={{ flex: 1, flexDirection: 'row'}}>
              <Text style={styles.info}>주문 시간:&nbsp;&nbsp;&nbsp;</Text>
              <Text style={{color: 'black'}}>{item.end_time}</Text>
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
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 20,
          marginBottom: 20,
          marginTop: 20,
        }}>
        국민대 기숙사
      </Text>
      <View style={{paddingHorizontal: 20}}>
        <View style={styles.textInputStyle}>
          <TextInput
            onChangeText={text => searchFilterFunction(text)}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="이름을 입력하세요"
          />
        </View>
      </View>
      <View style={{width: '100%', flexDirection: 'row', height: 20}}>
        <TouchableOpacity
          style={{
            flex: 1,
            height: 25,
            backgroundColor: '#70A0B0',
            marginTop: 8,
            marginLeft: 20,
            marginRight: 10,
          }}
          onPress={() => alert('hi')}>
          <Text style={{textAlign: 'center'}}>치킨</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            height: 25,
            backgroundColor: '#70A0B0',
            marginTop: 8,
            marginLeft: 10,
            marginRight: 10,
          }}
          onPress={() => alert('hi')}>
          <Text style={{textAlign: 'center'}}>피자</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            height: 25,
            backgroundColor: '#70A0B0',
            marginTop: 8,
            marginLeft: 10,
            marginRight: 10,
          }}
          onPress={() => alert('hi')}>
          <Text style={{textAlign: 'center'}}>떡볶이</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            height: 25,
            backgroundColor: '#70A0B0',
            marginTop: 8,
            marginLeft: 10,
            marginRight: 20,
          }}
          onPress={() => alert('hi')}>
          <Text style={{textAlign: 'center'}}>...etc</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{margin: 20}}>
        <View style={styles.assemblyListBar}>
          {filteredDataSource.map((e, i) => ItemView(e, i))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalSearch;
