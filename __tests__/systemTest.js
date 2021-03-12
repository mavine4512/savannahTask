import {fireEvent, render} from '@testing-library/react-native';
import Login from '../screens/login';
import {TextInput, View} from 'react-native';
import React from 'react';

test('fire changeText event', () => {
  const onEventMock = jest.fn();
  const {getByPlaceholderText} = render(
    // MyComponent renders TextInput which has a placeholder 'Enter details'
    // and with `onChangeText` bound to handleChangeText
    <Login>
      <TextInput
        placeholder={('Your Email', 'Your Password')}
        onChangeText={onEventMock('test@gmail.com', 'password123')}
      />
    </Login>,
  );

  fireEvent(
    getByPlaceholderText('Your Email'),
    'onChangeText',
    'test@gmail.com',
  );
  fireEvent(
    getByPlaceholderText('Your Password'),
    'onChangeText',
    'password123',
  );
  expect(onEventMock).toHaveBeenCalledWith('test@gmail.com', 'password123');
});
