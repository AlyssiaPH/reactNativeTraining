/**
 * Sample React Native Form
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {useState, useEffect, useMemo, useCallback} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
  Alert,
} from 'react-native';

const Form = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [pwd, setPwd] = useState('');
  const [checkPwd, setCheckPwd] = useState('');
  const [pwdCorrect, setPwdCorrect] = useState(true);

  const pwdMatch = useMemo(() => {
    return pwd === checkPwd;
  }, [pwd, checkPwd]);

  useEffect(() => {
    if (pwd.length >= 3) {
      setPwdCorrect(true);
    } else {
      setPwdCorrect(false);
    }
  }, [pwd]);

  const onFormSend = useCallback(() => {
    if (pwdCorrect && pwdMatch) {
      Alert.alert(
        'Hello!',
        'Bonjour ' +
          firstName +
          ' ' +
          lastName +
          ', votre mot de passe est ' +
          pwd,
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ],
      );
    } else {
      Alert.alert(
        'Nop!',
        "Le formulaure n'est pas valide"[
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          }
        ],
      );
    }
  }, [firstName, lastName, pwd, pwdCorrect, pwdMatch]);

  return (
    <SafeAreaView style={styles.background}>
      <Text style={styles.title}>Inscription</Text>
      <Image
        style={styles.profileImg}
        source={{
          uri: 'https://www.handiclubnimois.fr/wp-content/uploads/2020/10/blank-profile-picture-973460_1280.png',
        }}
      />
      <TextInput
        style={styles.input}
        placeholder={'Prénom'}
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder={'Nom'}
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={[styles.input, pwdCorrect ? styles.input : styles.wrongInput]}
        placeholder={'Mot de passe'}
        value={pwd}
        onChangeText={setPwd}
        secureTextEntry={true}
      />
      <TextInput
        style={[styles.input, pwdMatch ? styles.input : styles.wrongInput]}
        placeholder={'Confirmer le mot de passe'}
        value={checkPwd}
        onChangeText={setCheckPwd}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={onFormSend}>
        <Text style={styles.title}>Envoyer</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    //justifyContent: 'space-around',
  },
  title: {
    fontSize: 28,
  },
  profileImg: {
    //flex: 1,
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    //resizeMode: 'contain',
  },
  input: {
    fontSize: 20,
    backgroundColor: '#E6E6E6',
    margin: 3,
    padding: 3,
    width: 300,
    borderRadius: 50,
  },
  wrongInput: {
    borderColor: '#FF0000',
    borderWidth: 2,
  },
  button: {
    backgroundColor: '#E6E6E6',
    margin: 3,
    padding: 3,
    width: 200,
    borderRadius: 50,
  },
});

export default Form;
