import exdata2 from '../exdata2';
import React, {useState, useEffect, useCallback} from 'react';
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
  Linking
} from 'react-native';

import Modal from '../components/Modal';

const TogetherSearch = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const [modal, setModal] = useState(false);
  const [sayYes, setSayYes] = useState(false);

  useEffect(() => {
    getMemberInfo();
  }, []);

  const getMemberInfo = async () => {
    setFilteredDataSource(exdata2);
    setMasterDataSource(exdata2);
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
      <TouchableOpacity key={key} style={styles.flatListItem}
        onPress={() => setModal(true)}>
        {modal&&<Modal showButton={true} modalVisible={modal} setModalVisible={setModal} onComplete={()=>sayYes?setModal(!modal):setSayYes(true)}>
          {!sayYes && <Text style={{ paddingVertical: 50, fontSize: 20, fontWeight: '900' }}>참여하시겠습니까?</Text>}
          {sayYes && <View style={{ alignItems: 'center' }}><Text>아래의 채팅방에 참여하세요.</Text><Text style={{ color: 'darkblue' }} onPress={() => { Linking.openURL('http://www.naver.com'); setModal(false)}}>http://www.naver.com</Text></View>}
        </Modal>}
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
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.info}>주문 메뉴:&nbsp;&nbsp;&nbsp;</Text>
            <Text style={{color: 'black'}}>{item.food_id}</Text>
          </View>
            <View
              style={{flex: 1, flexDirection: 'row'}}>
              <Text style={styles.info}>픽업 장소:&nbsp;&nbsp;&nbsp;</Text>
              <Text style={{color: 'black'}}>{item.pick_up}</Text>
            </View>
            <View
              style={{flex: 1, flexDirection: 'row'}}>
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
      <View>
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
      <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20, }} onPress={() => navigation.navigate('WriteTogetherBoard')}>
          <Image style={{ width: 25, height: 25 }} source={require('../assets/pencil.png')} />
      </TouchableOpacity>
      </View>
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

export default TogetherSearch;
