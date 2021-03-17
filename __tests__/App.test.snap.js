import 'react-native';
import React from 'react';
import Login from '../screens/Login';
import renderer from 'react-test-renderer';
import Registration from '../screens/registration';
// import Home from '../screens/Home';
import Logout from '../screens/login';
// import Issues from '../screens/issues';
// import Tags from '../screens/Tags';

test('Login snapShort', () => {
  const snap = renderer.create(<Login />).toJSON();
  expect(snap).toMatchSnapshot();
});

test('Registration snapShort', () => {
  const snap = renderer.create(<Registration />).toJSON();
  expect(snap).toMatchSnapshot();
});

// test('Home snapShort', () => {
//   const snap = renderer.create(<Home />).toJSON();
//   expect(snap).toMatchSnapshot();
// })

// test('Tags snapShort', () => {
//   const snap = renderer.create(<Tags />).toJSON();
//   expect(snap).toMatchSnapshot();
// });

// test('Issues snapShort', () => {
//   const snap = renderer.create(<Issues />).toJSON();
//   expect(snap).toMatchSnapshot();
// });

test('Logout snapShort', () => {
  const snap = renderer.create(<Logout />).toJSON();
  expect(snap).toMatchSnapshot();
});
