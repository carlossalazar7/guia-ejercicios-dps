import React, { useState } from 'react';
import { styles } from '../styles/styles'
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements'
import { auth } from '../utils/firebase';
import { useEffect } from 'react';

function CreateeAccount() {

    const [username, setUsername] = useState('');
    const [id, setId] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  
    useEffect(() => {

      }, [username, id, email, password])

    async function createAccount() {
        console.log("CREATE ACCOUNT, usuario " + username + " email " + email + " pass " + password);

        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                createThreeButtonAlert('El usuario fue creado correctamente');
                console.log(userCredential);
                setUsername("")
                setId("")
                setEmail("")
                setPassword("")

            })
            .catch((error) => {
                createThreeButtonAlert(error.toString());
                console.log('Something else went wrong... ', error.toString())
            });

    }

    return (
        <>
            <Text style={styles.createAccountText}>Crear Cuenta</Text>

            <View style={styles.createAccount}>
                <TextInput
                    placeholder="Ingrese su usuario"
                    keyboardType="default"
                    style={styles.input}
                    onChange={(e) => setUsername(e.nativeEvent.text)}
                />
                <TextInput
                    placeholder="Ingrese su correo"
                    keyboardType="default"
                    style={styles.input}
                    onChange={(e) => setEmail(e.nativeEvent.text)}
                />
                <TextInput
                    placeholder="Digite su contraseña"
                    keyboardType="visible-password"
                    style={styles.input}
                    onChange={(e) => setPassword(e.nativeEvent.text)}
                />

                <SocialIcon
                    title='Crear'
                    button
                    onPress={createAccount}
                    style={{ backgroundColor: '#3b5998', marginTop: 20 }}
                    color="blue"
                />


            </View>
        </>
    );
}

export default CreateeAccount;