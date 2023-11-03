import { RefreshControlBase } from "react-native";
import React from 'react';
import { Text, View, TouchableOpacity, Pressable } from 'react-native';
import style from '../styles/styles'
import { Button, SocialIcon } from 'react-native-elements'

export default function SocialNetworks(props) {
  const { googleLogin } = props;
  return (
    <>
      <View style={{ margin: 'auto', margin: 5, padding: 5, width: '100%', height: '100%', alignItems: 'center' }}>
        <Text style={{
          fontWeight: 'bold',
        }}>LOGIN</Text>
        <Pressable onPress={googleLogin} style={{ marginTop: 125 }}>
          <View>
            <SocialIcon
              style={{ marginTop: 15 }}
              title='Sign In With Google'
              button
              light
              type='google'
            />
          </View>
        </Pressable>
      </View>

    </>

  );
}
