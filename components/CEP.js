import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Cep extends Component{

    render(){
        return(
        <>
            <Text style={styles.fonte}>CEP: {this.props.data.cep}</Text>
            <Text style={styles.fonte}>CIDADE: {this.props.data.localidade}</Text>
            <Text style={styles.fonte}>UF: {this.props.data.uf}</Text>
        </>
        )
    }
}

const styles = StyleSheet.create({
    fonte:{
        fontSize: 20
    }
});

export default Cep;