import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import ApiList from '../screens/ApiList';
import Form from '../screens/Form';

export default function Router() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="ApiList" 
                component={ApiList} 
                options={{
                    headerTitle: "Eventos",
                }}
            />

            <Stack.Screen 
                name="Form" 
                component={Form} 
                options={{
                    headerTitle: "Adicionar eventos",
                }}
            />
        </Stack.Navigator>
    )
}