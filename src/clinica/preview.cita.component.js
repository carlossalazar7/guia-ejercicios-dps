// PantallaB.js

import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

function formatDateToYYYYMMDD(inputDateString) {
    console.log("fecha original: "+inputDateString);
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const inputDate = new Date(inputDateString);

    if (isNaN(inputDate.getTime())) {
        // Invalid date string
        return null;
    }

    const year = inputDate.getFullYear();
    const month = String(months.indexOf(inputDateString.split(' ')[1]) + 1).padStart(2, '0');
    const day = String(inputDateString.split(' ')[2]).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

function calcularEdad(fechaNacimiento, fechaActual) {
    const fechaNac = new Date(fechaNacimiento);
    const fechaActualDate = fechaActual ? new Date(fechaActual) : new Date();

    if (isNaN(fechaNac.getTime())) {
        return 'Fecha de nacimiento no válida';
    }

    const edadMilisegundos = fechaActualDate - fechaNac;
    const edadFecha = new Date(edadMilisegundos);

    return Math.abs(edadFecha.getUTCFullYear() - 1970);
}


function obtenerFechaActual() {
    const fechaActual = new Date();

    const año = fechaActual.getFullYear();
    const mes = String(fechaActual.getMonth() + 1).padStart(2, '0');
    const dia = String(fechaActual.getDate()).padStart(2, '0');

    const fechaFormateada = `${año}-${mes}-${dia}`;

    return fechaFormateada;
}


function determinarEtapa(edad) {
    if (edad >= 0 && edad <= 5) {
        return 'Primera infancia';
    } else if (edad >= 6 && edad <= 11) {
        return 'Infancia';
    } else if (edad >= 12 && edad <= 18) {
        return 'Adolescencia';
    } else if (edad >= 19 && edad <= 26) {
        return 'Juventud';
    } else if (edad >= 27 && edad <= 59) {
        return 'Adultez';
    } else if (edad >= 60) {
        return 'Persona mayor';
    } else {
        return 'Edad no válida';
    }
}
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
    const edad = calcularEdad(fechaNacimiento, obtenerFechaActual())
    const {etapa} = determinarEtapa(edad)

    return (
        <View>
            <View>
                <Button onPress={() => goBack()} title="Regresar" />
            </View>
            <Text style={{ padding: 5 }}>Nombre: {nombre} </Text>
            <Text style={{ padding: 5 }}>Apellido: {apellido} </Text>
            <Text style={{ padding: 5 }}>Genero: {genero} </Text>
            <Text style={{ padding: 5 }}>DUI: {dui} </Text>
            <Text style={{ padding: 5 }}>NIT: {nit} </Text>
            <Text style={{ padding: 5 }}>Direccion: {direccion} </Text>
            <Text style={{ padding: 5 }}>Fecha nacimiento: {fechaNacimiento} </Text>
            <Text style={{ padding: 5 }}>Telefono: {telefono} </Text>
            <Text style={{ padding: 5 }}>Celular: {celular} </Text>
            <Text style={{ padding: 5 }}>Email: {email} </Text>
            <Text style={{ padding: 5 }}>Edad: {edad} </Text>
            <Text style={{ padding: 5 }}>Etapa: {determinarEtapa(edad)} </Text>
            
        </View>

    );
};

export default PantallaB;
