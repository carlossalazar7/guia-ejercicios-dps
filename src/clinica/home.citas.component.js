import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { styles } from './styles';

const CitasHomeComponent = (props) => {
    navigator = props;
    const { navigate } = props;

    const [citas, setCitas] = useState([
        { usuario: 'Juan', correo: 'juan@example.com' },
        { usuario: 'María', correo: 'maria@example.com' },
        // Agrega más citas según sea necesario
    ]);

    const handleNuevaCita = () => {

        // Agrega lógica para crear una nueva cita y actualizar el estado
        const nuevaCita = { usuario: 'Nuevo Usuario', correo: 'nuevo@example.com' };
        setCitas([...citas, nuevaCita]);
        natigation.navigate('addcita')
    };

    const tableHead = ['Cliente', 'Correo'];
    const tableData = citas.map((cita) => [cita.usuario, cita.correo]);

    return (
        <View style={styles.container}>
            { /*   <Button title="Crear Nueva Cita" style={{ margin: 5 }} onPress={handleNuevaCita} /> */}
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

export default CitasHomeComponent;
