import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/react-hooks';
import Client from './constants/client';
import {Login, Registration, Issues, Home} from './screens';
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
          <Stack.Screen name="Issues" component={Issues} />
        </Stack.Navigator>
      </ApolloProvider>
    </NavigationContainer>
  );
};

export default App;
