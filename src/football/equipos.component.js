import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import axios from 'axios';

const renderButton = (index) => (
    <TouchableOpacity onPress={() => handleButtonPress(index)}>
        <View style={{ padding: 10, backgroundColor: '#2196F3' }}>
            <Text style={{ color: '#fff' }}>Eliminar</Text>
        </View>
    </TouchableOpacity>
);

const handleButtonPress = (index) => {
    // Handle button press for the row at the given index
    console.log(`Button pressed for row ${index}`);
    eliminar(index);
    // Add your logic here
};

const eliminar = async (id) => {

    console.log('http://10.0.2.2:3000/equipos/' + id);
    await axios.delete('http://10.0.2.2:3000/equipos/' + id
    )
        .then(response => {
            console.log('Response:', response.data);
        })
        .catch(error => {
            console.log(error);
            console.error('Error:', error.message);
        });
};


export const HomeEquipos = ({ navigation: { goBack, navigate } }) => {
    const [datosEquipos, setDatosEquipos] = useState(null);

    useEffect(() => {
        getAll()
    }, [])

    const getAll = async () => {
        await axios.get('http://10.0.2.2:3000/equipos')
            .then(response => {
                console.log('Response:', response.data);
                setDatosEquipos(response.data)
            })
            .catch(error => {
                console.error('Error:', error.message);
            });
    };

    // Cabeceras de la tabla
    const headers = [
        'Equipo',
        'Facultad',
        'Año y Ciclo',
        'Torneo',
        'Integrantes',
        'Eliminar',
    ];

    // Datos para la tabla
    const tableData = datosEquipos != null ? datosEquipos.map((equipo) => [
        equipo.nombreEquipo,
        equipo.facultad,
        equipo.anioCiclo,
        equipo.torneo,
        equipo.jugadores.length, // Mostrar la cantidad de integrantes,
        renderButton(equipo._id)
    ]) : [];

    return (
        <View style={styles.container}>
            <View>
                <Button onPress={() => goBack()} title="Regresar" />
            </View>
            <Text style={styles.titulo}>Inscripciones al Torneo</Text>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                <Row data={headers} style={styles.head} textStyle={styles.textoHeader} />
            </Table>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                {tableData.map((rowData, index) => (
                    <Row
                        key={index}
                        data={rowData}
                        style={[styles.row, index % 2 && { backgroundColor: '#F7F6E7' }]}
                        textStyle={styles.textoFila}
                    />
                ))}
            </Table>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    titulo: { fontSize: 20, marginBottom: 10, fontWeight: 'bold' },
    head: { height: 50, backgroundColor: '#f1f8ff' },
    row: { height: 40, backgroundColor: '#E7E6E1' },
    textoHeader: { textAlign: 'center', fontWeight: 'bold' },
    textoFila: { textAlign: 'center' },
});

