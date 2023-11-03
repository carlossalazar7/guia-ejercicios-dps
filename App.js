import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { StyleSheet, Text, View } from 'react-native';
import variables from './src/utils/variables';
import { styles } from './src/styles/styles';
import SocialNetworks from './src/login/social.networks.component';
import HomePage from './src/components/home.component';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [usuario, setUsuario] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  const googleLogin = async () => {
    try {
      console.log("TRYING CONNECTION TO GOOGLE!!")
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      setUsuario(userInfo.user);
      console.log("userinfo", usuario);
      setIsLoggedIn(true);

    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error)
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error)
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error)
      } else {
        console.log(error);
      }
    }
  };


  function MyTabs() {
    return (
      <Tab.Navigator>

        <Tab.Screen name="Home"
          options={{
            title: 'Home',
            activeTintColor: 'white',
            inactiveTintColor: '#d9d9d9',
            tabBarIcon: () => {
              return (
                <Image style={{ width: 25, height: 25 }}
                  source={require('./src/img/home.png')} />
              );
            },
          }}
          component={HomePage} />
      </Tab.Navigator>
    );
  }


  if (isLoggedIn === false) {
    return (
      <View style={styles.container}>
        <SocialNetworks
          googleLogin={googleLogin} />
      </View>
    )

  }  else if (isLoggedIn === true) {
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>);
  }

}