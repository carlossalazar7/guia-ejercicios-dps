import * as React from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RegistroEquipos from '../football/home.component';
import CreateeAccount from '../login/create.user.component';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import CitasHomeComponent from '../clinica/home.citas.component';
import PantallaB from '../clinica/preview.cita.component';
import { FormAddNewPaciente } from '../clinica/form.cita.component';
import { FormularioCita } from '../clinica/FormularioCita.component';
import IpInfoComponent from '../consultaip/consultaip.component';


const Tab = createBottomTabNavigator();



function Clinica({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <CitasHomeComponent />
            <Button
                styles={{ margin: 5 }}
                title="Añadir Paciene"
                onPress={() => navigation.navigate('addcita')}
            />

        </View>
    );
}

function HomeTabs() {
    return (
        <Tab.Navigator screenOptions={{ tabBarStyle: { display: 'none' } }}>
            <Tab.Screen name="Control de clientes"
                options={{
                    tabBarLabel: 'Control de clientes',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="adduser" size={24} color="black" />
                    ),
                }}
                component={Clinica} />
            <Tab.Screen name="addcita"
                options={{
                    tabBarLabel: 'addcita',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="adduser" size={24} color="black" />
                    ),
                }}
                component={FormAddNewPaciente} />
            <Tab.Screen name="formcita"
                options={{
                    tabBarLabel: 'formcita',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="adduser" size={24} color="black" />
                    ),
                }}
                component={FormularioCita} />
            <Tab.Screen name="previewcita"
                options={{
                    tabBarLabel: 'previewcita',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="adduser" size={24} color="black" />
                    ),
                }}
                component={PantallaB} />

        </Tab.Navigator>
    );
}

export default function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="consultaip"
                    options={{
                        tabBarLabel: 'consultaip',
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name="paperclip" size={24} color="black" />    ),
                    }}
                    component={IpInfoComponent} />
                <Tab.Screen name="Clinica"
                    options={{
                        tabBarLabel: 'clinica',
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome5 name="user-nurse" size={24} color="black" />
                        ),
                    }}
                    component={HomeTabs} />

                <Tab.Screen name="adduser"
                    options={{
                        tabBarLabel: 'adduser',
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name="adduser" size={24} color="black" />
                        ),
                    }}
                    component={CreateeAccount} />
                <Tab.Screen name="Home"
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="football" size={24} color="black" />
                        ),
                    }}
                    component={RegistroEquipos} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}