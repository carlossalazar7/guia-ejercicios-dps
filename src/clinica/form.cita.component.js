import { FormCita } from './FormularioCita.component';
import { FormularioCita } from './FormularioCita.component';
import { View, Button } from 'react-native';
import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    nombre: yup.string().required('Campo obligatorio'),
    apellido: yup.string().required('Campo obligatorio'),
    /*
    genero: yup.string().required('Campo obligatorio'),
    dui: yup.string().matches(/^\d{8}-\d{1}$/, 'Formato inválido').required('Campo obligatorio'),
    nit: yup.string().matches(/^\d{4}-\d{6}-\d{3}-\d{1}$/, 'Formato inválido').required('Campo obligatorio'),
    direccion: yup.string().required('Campo obligatorio'),
    fechaNacimiento: yup.string().required('Campo obligatorio'),
    telefono: yup.string().required('Campo obligatorio'),
    celular: yup.string().required('Campo obligatorio'),
    email: yup.string().email('Formato de correo inválido').required('Campo obligatorio'),
    */
});

export const FormAddNewPaciente = ({ navigation: { goBack , navigate} }) => {
    const onSubmit = (values) => {
        // Aquí puedes manejar la lógica para enviar los datos del formulario
        navigate('previewcita', values);
    };

    return (
        <>

            <View>
                <Button onPress={() => goBack()} title="Regresar" />
            </View>
            <FormularioCita
                onSubmit={onSubmit} />
        </>

    )
}
