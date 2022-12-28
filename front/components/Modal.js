import React from "react";
import {  Modal as OriginModal, StyleSheet, Text, Pressable, View } from "react-native";

const Modal = ({ title='', showButton=true, modalVisible, setModalVisible, children}) => {
  return (
    <View style={styles.centeredView}>
      <OriginModal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          console.warn("취소되었습니다.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {title.length!==0&&<View style={styles.modalHeader}>
              <Text style={styles.modalText, styles.modalTitle}>{title}</Text>
            </View>}
            <View style={styles.modalContent}>
              {children}
            </View>
            {showButton && <View style={styles.buttonSet}>
              <Pressable
                style={styles.button}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>취소</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>확인</Text>
              </Pressable>
            </View>}
          </View>
        </View>
      </OriginModal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 30,
    paddingBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalHeader: {
    aligtnItems: 'left',
  },
  buttonSet: {
    flexDirection: 'row',
    paddingLeft: 230,
  },
  button: {
    padding: 10,
    elevation: 2
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalContent: {
    alignItems: 'center',
  }
});

export default Modal;