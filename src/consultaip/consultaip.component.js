import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, Image } from 'react-native';
import axios from 'axios';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Table, Row } from 'react-native-table-component';

const IpInfoComponent = () => {
    const [consultas, setConsultas] = useState([]);
    const [ipAddress, setIpAddress] = useState('');
    const [ipInfo, setIpInfo] = useState(null);
    const [error, setError] = useState(null);

    const handleInputChange = (text) => {
        setIpAddress(text);
    };

    useEffect(() => {
        findAll();

    }, [consultas])

    // Función para eliminar un elemento de AsyncStorage
    const eliminarItemAsyncStorage = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys();
            for (const key of keys) {
                await AsyncStorage.removeItem(key);
            }
            console.log(`Elementos eliminados de AsyncStorage.`);
        } catch (error) {
            console.error('Error al intentar eliminar el elemento:', error);
        }
    };


    // Función para almacenar datos en AsyncStorage
    const guardarDatos = async (clave, valor) => {
        try {
            await AsyncStorage.setItem(clave, valor);
            console.log(`Datos guardados exitosamente para la clave: ${clave}`);
        } catch (error) {
            console.error('Error al guardar datos:', error);
        }
    };

    const findAll = async () => {

        try {
            const keys = await AsyncStorage.getAllKeys();
            let tmp = []

            for (const key of keys) {
                const datos = await AsyncStorage.getItem(key);
                tmp.push(JSON.parse(datos))
            }
            setConsultas(tmp);

        } catch (error) {
            console.error(error)
        }
    }


    const fetchIpInfo = async () => {
        try {
            const response = await axios.get(`https://ipwhois.app/json/${ipAddress}`);
            console.log(response.data);
            setIpInfo(response.data);
            guardarDatos(response.data.asn, JSON.stringify(response.data))
            setError(null);
        } catch (error) {
            setIpInfo(null);
            setError('Error al obtener información de la dirección IP.');
        }
    };

    const tableHead = ['Tipo de IP', 'País', 'Cuidad'];
    const tableData = consultas.length != 0 ? consultas.map((e) => [e.type, e.country, e.city]) : [];

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Ingrese una dirección IP:</Text>
            <TextInput
                style={styles.input}
                placeholder="Ejemplo: 8.8.8.8"
                value={ipAddress}
                onChangeText={handleInputChange}
            />
            <Button title="Obtener Información" onPress={fetchIpInfo} />

            {ipInfo && (
                <View style={styles.infoContainer}>
                    <Text>Tipo de IP: {ipInfo.type}</Text>
                    <Text>Continente: {ipInfo.continent}</Text>
                    <Text>País: {ipInfo.country}</Text>
                    <Text>Código de País: {ipInfo.country_code}</Text>
                    <Text>Región: {ipInfo.region}</Text>
                    <Text>Ciudad: {ipInfo.country_capital}</Text>
                    <Text>Capital: {ipInfo.city}</Text>
                    <Text>Hora actual: {ipInfo.timezone_gmt}</Text>
                    <Text>Datos de conecion: {ipInfo.isp}</Text>
                    <Image
                        style={styles.image}
                        source={{ uri: ipInfo.country_flag }}
                        resizeMode="cover" // Puedes ajustar el modo de redimensionamiento según tus necesidades
                    />

                </View>
            )}

            {error && (
                <Text style={styles.errorText}>{error}</Text>
            )}

            <Text style={styles.label}>Consultas realizadas: </Text>

            <Button title="Eliminar consultas realizadas"
                onPress={eliminarItemAsyncStorage} />

            <Table borderStyle={{ borderWidth: 1, flex: 3, borderColor: '#C1C0B9' }}>
                <Row
                    data={tableHead}
                    style={styles.head}
                    textStyle={styles.text}
                />
                {tableData.map((rowData, index) => (
                    <Row
                        key={index}
                        data={rowData}
                        style={index % 2 === 0 ? styles.evenRow : styles.oddRow}
                        textStyle={styles.text}
                    />
                ))}
            </Table>


        </View>
    );
};

export default IpInfoComponent;
