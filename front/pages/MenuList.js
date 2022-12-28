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
      <TouchableOpacity key={key}>
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
      <ScrollView style={{margin: 20}}>
        <View style={styles.assemblyListBar}>
          {filteredDataSource.map((e, i) => ItemView(e, i))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuList;