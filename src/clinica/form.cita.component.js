import { FormCita } from './FormularioCita.component';
import { useState } from 'react';
import { FormularioCita } from './FormularioCita.component';
import { View, Button } from 'react-native';
import * as yup from 'yup';

export const validationSchema = yup.object().shape({
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


function convertirAFechaYYYYMMDD(cadenaFecha) {
    const fecha = new Date(cadenaFecha);

    const año = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Meses son zero-based
    const dia = String(fecha.getDate()).padStart(2, '0');

    return `${año}-${mes}-${dia}`;
}


export const FormAddNewPaciente = ({ navigation: { goBack, navigate } }) => {
    
    const onSubmit = (values) => {
        let fechaNac = convertirAFechaYYYYMMDD(fechaN);
        console.log("fecha nacimiento -> " + convertirAFechaYYYYMMDD(fechaNac));
        console.log(values);
        navigate('previewcita', {
            form: values,
            fechaNac: fechaNac
        });
    };

    const [fechaN, setFechaN] = useState(null);
    const [fechaNacimientoFormated, setFechaNacimientoFormated] = useState(null);
    return (
        <>

            <View>
                <Button onPress={() => goBack()} title="Regresar" />
            </View>
            <FormularioCita
                onSubmit={onSubmit}
                setFechaN={setFechaN} />
        </>

    )
}
