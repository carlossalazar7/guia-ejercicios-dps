import React, { useEffect, useState } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { View } from 'react-native';
import variables from './src/utils/variables';
import { styles } from './src/styles/styles';
import FormComponent from './src/login/form.component';
import { auth } from './src/utils/firebase';
import MyTabs from './src/components/tab.component';

export default function App() {
  const [usuario, setUsuario] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {

    GoogleSignin.configure({
      webClientId: variables.WEBCLIENTID,
      offlineAccess: false
    })
  }, [usuario, isLoggedIn])

  async function signOut() {
    try {
      setIsLoggedIn(false)
      await GoogleSignin.revokeAccess()
      await GoogleSignin.signOut()

    } catch (error) {
      console.log('Something else went wrong... ', error.toString())
    }
  }

  async function logInBase() {
    try {
      console.log("LOGIN BASE, usuario " + username + " pass " + password);
      auth.signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
          console.log(userCredential);
          setUsuario(userCredential);
          setIsLoggedIn(true);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (error) {
      console.log('Something else went wrong... ', error.toString())
    }
  }



  if (isLoggedIn === false) {
    return (
      <View style={styles.container}>
        <FormComponent
          setUsername={setUsername}
          setPassword={setPassword}
          logInBase={logInBase}
        />
      </View>
    )

  } else if (isLoggedIn === true) {
    return (
      <MyTabs />
    );
  }

}