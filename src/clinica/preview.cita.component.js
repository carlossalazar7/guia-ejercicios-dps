// PantallaB.js

import React from 'react';
import { View, Text, Button } from 'react-native';

const PantallaB = ({ navigation: { goBack , navigate} }) => {

    const { apellido, nombre } = route.params;

    console.log(route.params);
    return (
        <View>
            <View>
                <Button onPress={() => goBack()} title="Regresar" />
            </View>
            <Text>Nombre: </Text>
            <Text>Edad: </Text>
        </View>
    );
};

export default PantallaB;
