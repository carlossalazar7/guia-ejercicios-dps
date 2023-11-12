import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    head: { height: 40, backgroundColor: '#f1f8ff', textAlign: 'center' },
    text: { margin: 6, textAlign: 'left', padding: 1, },
    evenRow: { height: 30, backgroundColor: '#f9f9f9' },
    oddRow: { height: 30, backgroundColor: 'white' },
    container: {
        width: 350, margin: 'auto', display: 'flex', marginLeft: 20 
    },
    container2: {
        margin: 10,
      },
      label: {
        fontSize: 16,
        marginBottom: 5,
      },
      picker: {
        height: 10,
        backgroundColor:'#fff',
        borderColor: 'gray',
      },
      selectedText: {
        marginTop: 10,
        fontSize: 18,
        height: 20,
      },
});
