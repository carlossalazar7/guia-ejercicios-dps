import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import { Formik } from 'formik';
import { Picker } from '@react-native-picker/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { styles } from './styles';
import { validationSchema } from './form.cita.component';




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



export const FormularioCita = ({ onSubmit }) => {


    //   useEffect({},[genero])
    const [genero, setGenero] = useState('Masculino');

    const pickerItems = [
        { label: 'Masculino', value: 'Masculino' },
        { label: 'Femenino', value: 'Femenino' },
    ];

    const handleGeneroChange = (value) => {
        setGenero(value);
        validationSchema.genero = genero;
    };

    const [isDatePicketVisible, setIsDatePicketVisible] = useState(true);

    const hideDatePicker = () => {
        setIsDatePicketVisible(false);
    };
    const showDatePicker = () => {
        setIsDatePicketVisible(true);
    };

    const handlerConfirm = (date) => {
        validationSchema.fechaNacimiento = date;
        const dateBirth = date;
        dateBirth.setHours(0);
        dateBirth.setMinutes(0);
        dateBirth.setSeconds(0);
        setFormData({ ...formData, dateBirth });
        hideDatePicker();
    };

    return (
        <>
            <View style={{ width: 350, margin: 'auto', flex: 1, marginLeft: 20 }}>

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
                                        value={values.nombre} />
                                    {touched.nombre && errors.nombre && <Text style={{ color: 'red' }}>{errors.nombre}</Text>}
                                </View>
                                <View>
                                    <Text>Apellido:</Text>
                                    <TextInput
                                        style={{ backgroundColor: '#fff', margin: 5 }}
                                        onChangeText={handleChange('apellido')}
                                        onBlur={handleBlur('apellido')}
                                        value={values.apellido} />
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
                                        value={values.dui} />
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
                                        value={values.nit} />
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
                                        value={values.direccion} />
                                    {touched.direccion && errors.direccion && <Text style={{ color: 'red' }}>
                                        {errors.direccion}
                                    </Text>}
                                </View>
                                <View>
                                    <Text>celular:</Text>
                                    <TextInput
                                        style={{ backgroundColor: '#fff', margin: 5 }}
                                        onChangeText={handleChange('celular')}
                                        onBlur={handleBlur('celular')}
                                        value={values.celular} />
                                    {touched.celular && errors.celular && <Text style={{ color: 'red' }}>
                                        {errors.celular}
                                    </Text>}
                                </View>
                                <View>
                                    <Text>telefono:</Text>
                                    <TextInput
                                        style={{ backgroundColor: '#fff', margin: 5 }}
                                        onChangeText={handleChange('telefono')}
                                        onBlur={handleBlur('telefono')}
                                        value={values.telefono} />
                                    {touched.telefono && errors.telefono && <Text style={{ color: 'red' }}>
                                        {errors.telefono}
                                    </Text>}
                                </View>
                                <View>
                                    <Text>correo:</Text>
                                    <TextInput
                                        style={{ backgroundColor: '#fff', margin: 5 }}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email} />
                                    {touched.email && errors.email && <Text style={{ color: 'red' }}>
                                        {errors.email}
                                    </Text>}
                                </View>
                                <View>
                                    <Text>fecha nacimiento:</Text>
                                    <TextInput
                                        style={{ backgroundColor: '#fff', margin: 5 }}
                                        onChangeText={handleChange('fechaNacimiento')}
                                        onBlur={handleBlur('fechaNacimiento')}
                                        value={values.fechaNacimiento} />
                                    {touched.fechaNacimiento && errors.fechaNacimiento && <Text style={{ color: 'red' }}>
                                        {errors.fechaNacimiento}
                                    </Text>}
                                </View>

                                <DateTimePickerModal
                                    isVisible={isDatePicketVisible}
                                    mode="date"
                                    onConfirm={handlerConfirm}
                                    onCancel={hideDatePicker} />

                                <View style={{ marginBottom: 50 }}>
                                    <Text>genero:</Text>
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
