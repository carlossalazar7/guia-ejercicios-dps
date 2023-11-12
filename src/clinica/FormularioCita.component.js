import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView, Platform, DatePickerIOS } from 'react-native';
import { Formik } from 'formik';
import { Picker } from '@react-native-picker/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { styles } from './styles';
import { validationSchema } from './form.cita.component';
import DateTimePicker from '@react-native-community/datetimepicker';


export const FormularioCita = ({ onSubmit , setFechaN}) => {

    function formatDateToYYYYMMDD() {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
    
        return `${year}-${month}-${day}`;
    }

    useEffect(() => {
        setFechaN(date)
    }, [genero, date])


    const [genero, setGenero] = useState('Masculino');
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [isDatePicketVisible, setIsDatePicketVisible] = useState(false);

    const handleGeneroChange = (value) => {
        setGenero(value);
        validationSchema.genero = genero;
    };


    const handleDateChange = (event, selectedDate) => {
        console.log(selectedDate);
        setShowDatePicker(Platform.OS === 'ios');
        if (selectedDate !== undefined) {
            setDate(selectedDate);
            setIsDatePicketVisible(false);
        }
    };

    const hideDatePicker = () => {
        setIsDatePicketVisible(false);
    };



    const showDatePickerModal = () => {
        setIsDatePicketVisible(true);
        setShowDatePicker(true)
    };



    return (
        <>
            <View style={{ width: 350, margin: 'auto', flex: 1, marginLeft: 20 }}>

                <ScrollView scrollEventThrottle={16}>
                    <Formik
                        initialValues={{
                            nombre: '',
                            apellido: '',
                            genero: genero,
                            dui: '',
                            nit: '',
                            direccion: '',
                            fechaNacimiento: formatDateToYYYYMMDD(),
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

                                    <Button title="Select Date" onPress={showDatePickerModal} />
                                    {Platform.OS === 'ios' && (
                                        <DateTimePicker
                                            value={date}
                                            mode="date"
                                            display="spinner"
                                            onChange={handleDateChange}
                                        />
                                    )}
                                    {Platform.OS === 'android' && showDatePicker && (
                                        <DateTimePicker
                                            value={date}
                                            mode="date"
                                            display="default"
                                            onChange={handleDateChange}
                                        />
                                    )}

                                </View>



                                <View style={{ marginBottom: 50 }}>
                                    <Text>genero:</Text>
                                    <Picker
                                        selectedValue={genero}
                                        onValueChange={(itemValue) => handleGeneroChange(itemValue)}
                                        onChangeText={handleChange('genero')}
                                        onBlur={handleBlur('genero')}
                                        value={values.genero}
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
