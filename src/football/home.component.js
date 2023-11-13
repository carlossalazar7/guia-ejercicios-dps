import React, { useState } from 'react';
import { View, TextInput, Button, ScrollView, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './styles';
import axios from 'axios';

const RegistroEquipos = () => {
    const [equipo, setEquipo] = useState({
        nombre: '',
        facultad: '',
        anoCiclo: '',
        torneo: '',
        integrantes: [],
    });

    const [integrante, setIntegrante] = useState({
        carnet: '',
        nombres: '',
        apellidos: '',
        fechaNacimiento: '',
        genero: 'masculino',
        posicion: 'Portero',
        numeroCamisa: '',
    });

    const guardarEquipoEnMongoDB = async (equipo) => {

        await axios.post('http://10.0.2.2:3000/equipos', {
            "nombreEquipo": equipo.nombre,
            "facultad": equipo.facultad,
            "anioCiclo": equipo.anoCiclo,
            "torneo": equipo.torneo,
            "jugadores": equipo.integrantes
        }
        )
            .then(response => {
                console.log('Response:', response.data);
            })
            .catch(error => {
                console.error('Error:', error.message);
            });
    };


    const handleEquipoChange = (campo, valor) => {
        setEquipo({ ...equipo, [campo]: valor });
    };

    const handleIntegranteChange = (campo, valor) => {
        setIntegrante({ ...integrante, [campo]: valor });
    };

    const agregarIntegrante = () => {
        setEquipo({ ...equipo, integrantes: [...equipo.integrantes, integrante] });
        // Puedes realizar validaciones adicionales antes de agregar el integrante
        // También puedes limpiar los campos después de agregar un integrante si es necesario
    };

    const registrarEquipo = () => {
        console.log('Equipo registrado:', equipo);
        guardarEquipoEnMongoDB(equipo);
    };

    return (
        <>
            <ScrollView scrollEventThrottle={16}>
                <View style={styles.container}>
                    <Text>Datos Generales del Equipo</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre del equipo"
                        value={equipo.nombre}
                        onChangeText={(valor) => handleEquipoChange('nombre', valor)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Facultad"
                        value={equipo.facultad}
                        onChangeText={(valor) => handleEquipoChange('facultad', valor)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Año y Ciclo de inscripción"
                        value={equipo.anoCiclo}
                        onChangeText={(valor) => handleEquipoChange('anoCiclo', valor)}
                    />
                    <Picker
                        selectedValue={equipo.torneo}
                        style={styles.inputSelect}
                        onValueChange={(valor) => handleEquipoChange('torneo', valor)}
                    >
                        <Picker.Item label="Masculino" value="masculino" />
                        <Picker.Item label="Femenino" value="femenino" />
                    </Picker>

                    <Text>Datos del Integrante</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Carnet del estudiante"
                        value={integrante.carnet}
                        onChangeText={(valor) => handleIntegranteChange('carnet', valor)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Nombres"
                        value={integrante.nombres}
                        onChangeText={(valor) => handleIntegranteChange('nombres', valor)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Apellidos"
                        value={integrante.apellidos}
                        onChangeText={(valor) => handleIntegranteChange('apellidos', valor)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Fecha de nacimiento"
                        value={integrante.fechaNacimiento}
                        onChangeText={(valor) => handleIntegranteChange('fechaNacimiento', valor)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Número de camisa"
                        value={integrante.numeroCamisa}
                        onChangeText={(valor) => handleIntegranteChange('numeroCamisa', valor)}
                    />
                    <Picker
                        selectedValue={integrante.genero}
                        style={styles.input}
                        onValueChange={(valor) => handleIntegranteChange('genero', valor)}
                    >
                        <Picker.Item label="Masculino" value="masculino" />
                        <Picker.Item label="Femenino" value="femenino" />
                    </Picker>
                    <TextInput
                        style={styles.input}
                        placeholder="Posicion"
                        value={equipo.posicion}
                        onChangeText={(valor) => handleIntegranteChange('posicion', valor)}
                    />

                    <Button title="Agregar Integrante" onPress={agregarIntegrante} />
                    <Button title="Registrar Equipo" onPress={registrarEquipo} />
                </View>
            </ScrollView>
        </>

    );
};


export default RegistroEquipos;
