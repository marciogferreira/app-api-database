import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import Cards from '../components/Cards';
import Api from '../config/Api';
import { AuthContext } from '../contexts/AuthContext';

function HomePage(props) { 

    const { logout } = useContext(AuthContext);
    const [list, setList] = useState([]);
    
    async function getList() {
        const response = await Api.get('usuarios');
        setList(response.data)
    }

    useEffect(function() {
        getList();
    }, []);
    
    const[lista, setLista] = React.useState([
        { id: 1, nome: "Wilber" },
        { id: 2, nome: "Elson" },
        { id: 3, nome: "Ellson" },
        { id: 4, nome: "Stefane" },
        { id: 5, nome: "Samuel" },
        { id: 6, nome: "Cris" }
    ]);

    function goLogin() {
        props.navigation.navigate("Login");
    }

    function excluir(indice, id) {
        let listaTemp = lista;
        // listaTemp.splice(indice, 1);
        
        const lis = listaTemp.filter((item) => {
            if(item.id !== id) {
                return item;
            }
        })

        setLista([...lis]);
    }
    
    return (
        <View style={{ flex: 1, backgroundColor: '#CCC', padding: 10 }}>
            <Text>Olá, Admin</Text>
            
            <Button title='Sair' onPress={logout} />
            {list.map((item, indice) => (
                <Cards key={item.id} nome={item.nome}>
                    <Button 
                        title='Ver Detalhes' 
                        onPress={() => props.navigation.navigate("Detalhe", {
                            id: item.id,
                            nome: item.nome
                        })} 
                    />
                    <Button 
                        title='Excluir' 
                        onPress={() => excluir(indice, item.id)} 
                    />
                </Cards>
            ))}
        </View>
    );
}

export default HomePage;