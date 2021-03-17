import {fireEvent, render} from '@testing-library/react-native';
import Registration from '../screens/registration';
import {TextInput, View} from 'react-native';
import React from 'react';
test('fire changeText event registration', () => {
  const onEventMock = jest.fn();
  const {getByPlaceholderText} = render(
    <Registration>
      <TextInput
        placeholder={('Your Email', 'Your Password', ' Confirm Your Password')}
        onChangeText={onEventMock(
          'test@gmail.com',
          'password123',
          'password123',
        )}
      />
    </Registration>,
  );

  fireEvent(
    getByPlaceholderText('Your email'),
    'onChangeText',
    'test@gmail.com',
  );
  fireEvent(
    getByPlaceholderText('Your Password'),
    'onChangeText',
    'password123',
  );
  fireEvent(
    getByPlaceholderText('Confirm Your Password'),
    'onChangeText',
    'password123',
  );
  expect(onEventMock).toHaveBeenCalledWith(
    'test@gmail.com',
    'password123',
    'password123',
  );
});
