// PantallaB.js

import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

const PantallaB = ({ route, navigation: { goBack, navigate } }) => {

    const { nombre } = route.params;
    const { apellido } = route.params;
    const { genero } = route.params;
    const { dui } = route.params;
    const { nit } = route.params;
    const { direccion } = route.params;
    const { fechaNacimiento } = route.params;
    const { telefono } = route.params;
    const { celular } = route.params;
    const { email } = route.params;

    return (
        <View>
            <View>
                <Button onPress={() => goBack()} title="Regresar" />
            </View>
            <Text style={{padding: 5}}>Nombre: {nombre} </Text>
            <Text style={{padding: 5}}>Apellido: {apellido} </Text>
            <Text style={{padding: 5}}>Genero: {genero} </Text>
            <Text style={{padding: 5}}>DUI: {dui} </Text>
            <Text style={{padding: 5}}>NIT: {nit} </Text>
            <Text style={{padding: 5}}>Direccion: {direccion} </Text>
            <Text style={{padding: 5}}>Fecha nacimiento: {fechaNacimiento} </Text>
            <Text style={{padding: 5}}>Telefono: {telefono} </Text>
            <Text style={{padding: 5}}>Celular: {celular} </Text>
            <Text style={{padding: 5}}>Email: {email} </Text>
        </View>
    );
};

export default PantallaB;
