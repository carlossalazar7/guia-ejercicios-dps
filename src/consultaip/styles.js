import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    label: {
        paddingTop: 15,
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 8,
    },
    infoContainer: {
        marginTop: 20,
    },
    errorText: {
        color: 'red',
        marginTop: 10,
    },
    head: { height: 40, backgroundColor: '#f1f8ff', textAlign: 'center' },
    text: { margin: 6, textAlign: 'left', padding: 1, },
    evenRow: { height: 30, backgroundColor: '#f9f9f9' },
    oddRow: { height: 30, backgroundColor: 'white' },
   
});
