// PantallaB.js

import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

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


    const { form } = route.params;
    const {fechaNac} = route.params;
    const edad = calcularEdad(fechaNac, obtenerFechaActual())
    const {etapa} = determinarEtapa(edad)

    return (
        <View>
            <View>
                <Button onPress={() => goBack()} title="Regresar" />
            </View>
            <Text style={{ padding: 5 }}>Nombre: {form.nombre} </Text>
            <Text style={{ padding: 5 }}>Apellido: {form.apellido} </Text>
            <Text style={{ padding: 5 }}>Genero: {form.genero} </Text>
            <Text style={{ padding: 5 }}>DUI: {form.dui} </Text>
            <Text style={{ padding: 5 }}>NIT: {form.nit} </Text>
            <Text style={{ padding: 5 }}>Direccion: {form.direccion} </Text>
            <Text style={{ padding: 5 }}>Fecha nacimiento: {fechaNac} </Text>
            <Text style={{ padding: 5 }}>Telefono: {form.telefono} </Text>
            <Text style={{ padding: 5 }}>Celular: {form.celular} </Text>
            <Text style={{ padding: 5 }}>Email: {form.email} </Text>
            <Text style={{ padding: 5 }}>Edad: {edad} </Text>
            <Text style={{ padding: 5 }}>Etapa: {determinarEtapa(edad)} </Text>
            
        </View>

    );
};

export default PantallaB;
