import React from 'react';
import { View, Text, StyleSheet , Button} from 'react-native';
import { Table, Row } from 'react-native-table-component';

export const HomeEquipos = ({ navigation: { goBack, navigate } }) => {
  // Datos de ejemplo para los equipos y sus integrantes
  const datosEquipos = [
    {
      nombreEquipo: 'Equipo A',
      facultad: 'Facultad 1',
      añoCiclo: '2023 - Ciclo 1',
      torneo: 'Masculino',
      integrantes: [
        {
          carnet: '20230001',
          nombresApellidos: 'Juan Pérez',
          fechaNacimiento: '1995-05-15',
          genero: 'Masculino',
          posicion: 'Portero',
          numeroCamisa: '1',
        },
        // Otros integrantes...
      ],
    },
    // Otros equipos...
  ];

  // Cabeceras de la tabla
  const headers = [
    'Equipo',
    'Facultad',
    'Año y Ciclo',
    'Torneo',
    'Integrantes',
  ];

  // Datos para la tabla
  const tableData = datosEquipos.map((equipo) => [
    equipo.nombreEquipo,
    equipo.facultad,
    equipo.añoCiclo,
    equipo.torneo,
    equipo.integrantes.length.toString(), // Mostrar la cantidad de integrantes
  ]);

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

