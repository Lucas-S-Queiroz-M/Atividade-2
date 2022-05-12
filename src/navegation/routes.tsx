import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Login from '../screens/Login';
import Home from '../screens/Home';
import Sobre from '../screens/Sobre';
import { NavegacaoTarefa } from './tarefa';

const Stack = createNativeStackNavigator();

function Routes() {
 return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Sobre" component={Sobre}/>
      <Stack.Screen name="tarefa" component={NavegacaoTarefa}/>
    </Stack.Navigator>
  );
}


export default Routes;