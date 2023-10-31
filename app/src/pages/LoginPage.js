import React, { useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';

import Api from '../config/Api';

function LoginPage() {

    const { setIsLogged } = useContext(AuthContext);

    const[cor, setCor] = React.useState('green');
    const[login, setLogin] = React.useState('');
    const[senha, setSenha] = React.useState('');

    async function acessar() {
        const response = await Api.post('login', {
            login: login,
            senha: senha
        });
        
        if(response && response.data) {
            if(response.data.token) {
                // await AsyncStorage.setItem('token', response.data.token);
                localStorage.setItem('token', response.data.token);
                setTimeout(function() {
                    setIsLogged(true);
                }, 1000);
                
            }
        } else {
            alert("Login ou senha incorreto");
        }
    }
    
    return (
        <View style={styles.page}>
            <Text style={{ color: cor }}>Login</Text>
            <Text>{login}</Text>
            <TextInput 
                style={styles.input}
                onChangeText={(valor) => setLogin(valor)}
            />
            <Text>Senha</Text>
             <TextInput 
                style={styles.input}
                onChangeText={(valor) => setSenha(valor)}
            />
            <Button style={styles.btn} onPress={acessar} title="Acessar" />
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        height: '300px',
        width: '90%',
        borderRadius: '10px',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        width: '30%',
        padding: '10px',
        marginTop: 30
    },
    input: {
        padding: '10px',
        width: '90%',
        borderWidth: '2px',
        borderColor: 'gray'
    }
});

export default LoginPage;