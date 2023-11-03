import { StyleSheet } from 'react-native';
import colors from '../utils/colors'

export const styles = StyleSheet.create({

  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
  },
  createAccountText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginTop: 70,
  },
  forgot: {
    fontSize: 14,
    color: '#2098F4',
    margin: 3,
    textAlign: 'center',
  },
  sincuenta: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  container: {
    paddingTop: 50,
    justifyContent: 'center',
  },
  container2: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',  
},
  form_input: {
    width: 100,
    fontSize: 12,
  },
  viewForm: {
    width: '95%',
    paddingHorizontal: 0,
    borderRadius: 20,
    height: 300,
    justifyContent: 'center',
    margin: 'auto'
  },
  createAccount: {
    width: '95%',
    marginTop: 150,
    paddingHorizontal: 0,
    borderRadius: 20,
    height: 300,
    justifyContent: 'center',
    margin: 'auto'
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 6,
    width: '80%',
    marginRight: 10,
    marginLeft: 50,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
  input2: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 6,
    marginLeft: 50,
    width: '80%',
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
  icon: { 

},
  inputReset: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 6,
    width: '80%',
    margin: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    padding: 16,
    borderRadius: 20,
    width: '75%',
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    margin: 5,
    padding: 2,
    textAlign: 'center',
  },
});
