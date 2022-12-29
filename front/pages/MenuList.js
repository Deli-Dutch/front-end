import menudata from '../menudata';
import exdata from '../exdata';
import React, {useState, useEffect} from 'react';
import styles from '../styles';
import Modal from '../components/Modal';
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
  Linking,
} from 'react-native';
const MenuList = ({ navigation }) => {
  const [select, setSelect] = useState({id: 0, name: ''});
  const [modal, setModal] = useState(false);
  const [sayYes, setSayYes] = useState(false);
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
      <TouchableOpacity key={key} onPress={() => { setSelect({ id: item.id, name: item.name }); setModal(true); }}>
        <View
          style={[
            styles.flatListProfile,
            {borderColor: '#C8C8C8', borderTopWidth: 0.5},
          ]}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/kyochon_honeycombo.png')}
              style={styles.profile}
            />
            <View style={{flexDirection: 'row', margin: 4}}>
              <View style={styles.flatListTextProfile_Left}>
                <Text style={styles.textName}>{item.name}</Text>
                <View style={styles.row}>
                  <Text style={{fontSize: 20}}>{item.price}</Text>
                </View>
              </View>
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
        <Modal title={sayYes?'':'장바구니에 담기'} modalVisible={modal} setModalVisible={setModal}
          onComplete={() => { sayYes ? setModal(!modal): setSayYes(true); }}>
          {!sayYes && <Text style={{lineHeight: 25, color: '#000'}}>{select.name}가(이){'\n'}메뉴에 추가됩니다.</Text>}
          {sayYes && <><Text style={{lineHeight: 25, color: '#000'}}>아래의 채팅방에 참여하세요.</Text>
            <Text style={{ color: 'darkblue' }} onPress={() => { Linking.openURL('http://google.com'); setModal(!modal); }}>
            http://google.com</Text></>}
        </Modal>
      <ScrollView style={{margin: 20}}>
        <View style={styles.assemblyListBar}>
          {filteredDataSource.map((e, i) => ItemView(e, i))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuList;