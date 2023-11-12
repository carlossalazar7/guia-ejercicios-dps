import React, { useState } from 'react';
import { View, TextInput, Button, ScrollView, Text } from 'react-native';
import { styles } from './styles';



const RegistroEquipos = () => {
    const [nombreEquipo, setNombreEquipo] = useState('');
    const [facultad, setFacultad] = useState('');
    const [anioCiclo, setAnioCiclo] = useState('');
    const [torneo, setTorneo] = useState('');
    const [jugadores, setJugadores] = useState([]);

    const agregarJugador = () => {
        // Agregar lógica para validar y agregar un jugador al equipo
        // Puedes incluir aquí la lógica para verificar el mínimo y máximo de jugadores
        const nuevoJugador = {
            carnet: '',
            nombres: '',
            apellidos: '',
            fechaNacimiento: '',
            genero: '',
            posicion: '',
            numeroCamisa: '',
        };
        setJugadores([...jugadores, nuevoJugador]);
    };

    const handleSubmit = () => {
        // Agregar lógica para enviar los datos del equipo y jugadores a la base de datos o realizar acciones necesarias
        console.log('Datos del equipo:', { nombreEquipo, facultad, anioCiclo, torneo });
        console.log('Jugadores:', jugadores);
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>Nombre del equipo:</Text>
                <TextInput
                    style={styles.input}
                    value={nombreEquipo}
                    onChangeText={(text) => setNombreEquipo(text)}
                />

                <Text style={styles.label}>Facultad:</Text>
                <TextInput
                    style={styles.input}
                    value={facultad}
                    onChangeText={(text) => setFacultad(text)}
                />

                <Text style={styles.label}>Año y ciclo de inscripción:</Text>
                <TextInput
                    style={styles.input}
                    value={anioCiclo}
                    onChangeText={(text) => setAnioCiclo(text)}
                />

                <Text style={styles.label}>Torneo (masculino o femenino):</Text>
                <TextInput
                    style={styles.input}
                    value={torneo}
                    onChangeText={(text) => setTorneo(text)}
                />

                <Text style={styles.label}>Jugadores:</Text>
                {jugadores.map((jugador, index) => (
                    <View key={index}>
                        {/* Componente para registrar datos del jugador */}
                        <Text>Jugador {index + 1}</Text>
                        {/* Agregar aquí campos para carnet, nombres, apellidos, fechaNacimiento, genero, posición, número de camisa */}
                    </View>
                ))}
                <View style={styles.botones}>
                    <Button title="Agregar Jugador" style={styles.boton} onPress={agregarJugador} />
                    <Button title="Registrar Equipo" onPress={handleSubmit} />
                </View>

            </View>
        </ScrollView>
    );
};

export default RegistroEquipos;
