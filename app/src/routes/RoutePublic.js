import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from '../pages/LoginPage';

const Stack = createNativeStackNavigator();

export default function RoutePublic() {
    return (
        <NavigationContainer initialRouteName="Login">
            <Stack.Navigator>
                <Stack.Screen name='Login' component={LoginPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}