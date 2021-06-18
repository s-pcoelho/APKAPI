import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import api from './components/API';
import Cep from './components/CEP';

class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      cep:[],
      cepDigitado: ''
    };
    this.carregar = this.carregar.bind(this);
  }

  async componentDidMount(){
    const response = await api.get('ws/01001000/json/');
    this.setState({
      cep: response.data
    })
  }

  async carregar(){
    const response = await api.get('ws/'+this.state.cepDigitado+'/json/');
    this.setState({
      cep: response.data
    })
  }

  render(){
    return (
      <View style={styles.container}>

       <View style={styles.div}> 
         <Text style={styles.texto}> API DE BUSCAR CEP </Text>
          <TextInput placeholder="DIGITE O CEP" style={
            styles.input
          } 
          onChangeText={
          (value) => this.setState({cepDigitado: value})
          }
          keyboardType='numeric'
          />
        </View>
        <View style={styles.botao}>
          <Button title="Buscar" onPress={this.carregar}/>
        </View>
        <View style={styles.resultado}>
          <View style={styles.texto}> RESULTADO:</View>
          <Cep data={
            this.state.cep
          }/>
        </View>
      </View>
      ); 
    }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8E78A7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  div: {
    marginTop: 50,
  },
  texto: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'arial'
  },
  resultado: {
    alignItems: 'center',
    marginTop: 20
  },
  input: {
    marginTop: 10, 
    width: 300,
    height: 40,
    fontSize: 20,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'white'
  },
  botao: {
    width: 300,
    fontSize: 30,
    color: 'white',
    backgroundColor: 'white'
  }
});

export default App;