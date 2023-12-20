import React, { createRef, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Modal,
  SafeAreaView,
  View,
  Platform,
  KeyboardAvoidingView,
  height,
} from 'react-native';

const MyInput = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const inputRef = createRef();

  function setFocus() {
    if (Platform.OS === 'android') {
      inputRef.current.focus();
    }
  }

  function setVisibility(value) {
    setModalVisible(value);
    props.overlay(value);
  }

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.item}
      onPress={() => setVisibility(true)}
    >
      <Text style={styles.textInput}>{props.value || props.placeholder}</Text>
      <Modal
        visible={modalVisible}
        onRequestClose={() => {
          setVisibility(false);
        }}
        onShow={setFocus}
        animationType="slide"
      >
        <SafeAreaView style={styles.outside}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
          >
            <TouchableOpacity
              style={styles.outside}
              onPress={() => {
                setVisibility(false);
              }}
            />
            <View style={styles.inputWrapper}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                {props.title}
              </Text>
              <TextInput
                {...props}
                ref={inputRef}
                style={[
                  styles.item,
                  Platform.OS === 'ios' ? styles.iosInput : {},
                ]}
                autoFocus={Platform.OS === 'ios'}
                onBlur={() => setVisibility(false)}
                onSubmitEditing={() => setVisibility(false)}
              />
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </Modal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    backgroundColor: '#fff',
    elevation: 5,
    textAlign: 'center',
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    fontSize: 17,
    fontWeight: 'medium',
    textAlign: 'center',
    width: '100%',
  },
  outside: {
    flex: 1,
    paddingBottom: 10,
    backgroundColor: '#282A36',
  },
  inputWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    elevation: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iosInput: {
    height: 50,
    color: 'black',
  },
});

export default MyInput;
