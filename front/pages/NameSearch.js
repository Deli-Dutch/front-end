import exdata from '../exdata';
import React, {useState, useEffect} from 'react';
import {Button, Modal} from 'react-native';
import styles from '../styles';
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
} from 'react-native';

const NameSearch = () => {
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
      <TouchableOpacity key={key} style={styles.flatListItem}>
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
              {item.content}
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
              <Text>{item.pick_up}</Text>
            </View>
            <View
              style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
              <Text style={{marginBottom: 10}}>주문 예정 시간</Text>
              <Text>{item.end_time}</Text>
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

export default NameSearch;
