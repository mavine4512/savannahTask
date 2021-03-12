import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/react-hooks';
import Client from './constants/client';
import {Login, Logout, Registration, Issues, Home} from './screens';
import Tabs from './navigation/tabs';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <ApolloProvider client={Client}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Login'}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen
            name="Issues"
            component={Issues}
            options={{headerShown: true}}
          />
          <Stack.Screen name="Logout" component={Logout} options={{headerShown: true}}/>
        </Stack.Navigator>
      </ApolloProvider>
    </NavigationContainer>
  );
};

export default App;
