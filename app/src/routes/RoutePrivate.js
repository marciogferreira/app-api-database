import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../pages/HomePage';
import DetalhePage from '../pages/DetalhePage';

const Stack = createNativeStackNavigator();

export default function RoutePrivate() {
    return (
        <NavigationContainer initialRouteName="Home">
            <Stack.Navigator>
            <Stack.Screen 
                name='Home' 
                component={HomePage} 
                options={{ 
                // headerShown: false 
                title: "Principal",
                }}
            />
            <Stack.Screen name='Detalhe' component={DetalhePage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}