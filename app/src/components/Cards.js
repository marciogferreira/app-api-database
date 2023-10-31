import { View, StyleSheet, Text } from 'react-native';

function Cards(props) {

    return (
        <View style={styles.card}>
            <Text>{props.nome} {props.sobrenome}</Text>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 10,
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 5,
        marginBottom: 3,
        marginTop: 3
    }
});

export default Cards;