import { RefreshControlBase } from "react-native";
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from "../styles/styles";
import colors from "../utils/colors";

export default function Separator() {

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 1, backgroundColor: colors.PRIMARY_COLOR }} />
            <View>
                <Text style={{ width: 50, margin: 'auto', textAlign: 'center', color: colors.PRIMARY_COLOR }}>Or</Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: colors.PRIMARY_COLOR, }} />
        </View>
    );
}
