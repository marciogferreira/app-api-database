import { Text } from 'react-native';

function DetalhePage(props) {

    console.log(props.route.params.nome);
    const params = props.route.params;

    return (
        <>
            <Text>
                Detalhes: 
                {params.id} - 
                {params.nome}
            </Text>
        </> 
    )
}

export default DetalhePage;