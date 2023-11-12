import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Picker } from '@react-native-picker/picker';


import { styles } from './styles';

const validationSchema = yup.object().shape({
    nombre: yup.string().required('Campo obligatorio'),
    apellido: yup.string().required('Campo obligatorio'),
    genero: yup.string().required('Campo obligatorio'),
    dui: yup.string().matches(/^\d{8}-\d{1}$/, 'Formato inválido').required('Campo obligatorio'),
    nit: yup.string().matches(/^\d{4}-\d{6}-\d{3}-\d{1}$/, 'Formato inválido').required('Campo obligatorio'),
    direccion: yup.string().required('Campo obligatorio'),
    fechaNacimiento: yup.string().required('Campo obligatorio'),
    telefono: yup.string().required('Campo obligatorio'),
    celular: yup.string().required('Campo obligatorio'),
    email: yup.string().email('Formato de correo inválido').required('Campo obligatorio'),
});


function calcularEdad(fechaNacimiento) {
    const fechaActual = new Date();
    const fechaNac = new Date(fechaNacimiento);

    let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
    const mesActual = fechaActual.getMonth();
    const mesNacimiento = fechaNac.getMonth();

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && fechaActual.getDate() < fechaNac.getDate())) {
        edad--;
    }

    return edad;
}

// Ejemplo de uso:
/*
    const fechaNacimiento = '1990-01-15'; // Formato: YYYY-MM-DD
    const edad = calcularEdad(fechaNacimiento);
    console.log(`La edad es ${edad} años.`);
*/

const FormularioCita = ({ onSubmit, navigation: { goBack } }) => {

    const [genero, setGenero] = useState('Masculino');

    const pickerItems = [
        { label: 'Masculino', value: 'Masculino' },
        { label: 'Femenino', value: 'Femenino' },
    ];

    const handleGeneroChange = (value) => {
        setGenero(value);
        validationSchema.genero = genero;
    };


    return (
        <>
            <View style={{ width: 350, margin: 'auto', flex: 1, marginLeft: 20 }}>
                <View >
                    <Button onPress={() => goBack()} title="Regresar" />
                </View>
                <ScrollView scrollEventThrottle={16}>
                    <Formik
                        initialValues={{
                            nombre: '',
                            apellido: '',
                            genero: '',
                            dui: '',
                            nit: '',
                            direccion: '',
                            fechaNacimiento: '',
                            telefono: '',
                            celular: '',
                            email: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => onSubmit(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <View>
                                <View>
                                    <Text>Nombre:</Text>
                                    <TextInput
                                        style={{ backgroundColor: '#fff', margin: 5 }}
                                        onChangeText={handleChange('nombre')}
                                        onBlur={handleBlur('nombre')}
                                        value={values.nombre}
                                    />
                                    {touched.nombre && errors.nombre && <Text style={{ color: 'red' }}>{errors.nombre}</Text>}
                                </View>
                                <View>
                                    <Text>Apellido:</Text>
                                    <TextInput
                                        style={{ backgroundColor: '#fff', margin: 5 }}
                                        onChangeText={handleChange('apellido')}
                                        onBlur={handleBlur('apellido')}
                                        value={values.apellido}
                                    />
                                    {touched.apellido && errors.apellido && <Text style={{ color: 'red' }}>
                                        {errors.apellido}
                                    </Text>}
                                </View>
                                <View>
                                    <Text>dui:</Text>
                                    <TextInput
                                        style={{ backgroundColor: '#fff', margin: 5 }}
                                        onChangeText={handleChange('dui')}
                                        onBlur={handleBlur('dui')}
                                        value={values.dui}
                                    />
                                    {touched.dui && errors.dui && <Text style={{ color: 'red' }}>
                                        {errors.dui}
                                    </Text>}
                                </View>
                                <View>
                                    <Text>nit:</Text>
                                    <TextInput
                                        style={{ backgroundColor: '#fff', margin: 5 }}
                                        onChangeText={handleChange('nit')}
                                        onBlur={handleBlur('nit')}
                                        value={values.nit}
                                    />
                                    {touched.nit && errors.nit && <Text style={{ color: 'red' }}>
                                        {errors.nit}
                                    </Text>}
                                </View>
                                <View>
                                    <Text>direccion:</Text>
                                    <TextInput
                                        style={{ backgroundColor: '#fff', margin: 5 }}
                                        onChangeText={handleChange('direccion')}
                                        onBlur={handleBlur('direccion')}
                                        value={values.direccion}
                                    />
                                    {touched.direccion && errors.direccion && <Text style={{ color: 'red' }}>
                                        {errors.direccion}
                                    </Text>}
                                </View>
                                <View style={styles.container2}>
                                    <Text style={styles.label}>Selecciona el Género:</Text>
                                    <Picker
                                        selectedValue={genero}
                                        onValueChange={(itemValue) => handleGeneroChange(itemValue)}
                                        style={styles.picker}
                                    >
                                        <Picker.Item label="Masculino" value="Masculino" />
                                        <Picker.Item label="Femenino" value="Femenino" />
                                    </Picker>
                                </View>

                                <Button onPress={handleSubmit} title="Enviar" />
                            </View>
                        )}
                    </Formik>
                </ScrollView>
            </View>

        </>

    );
};


export default FormularioCita;
