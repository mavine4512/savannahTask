import 'react-native';
import React from 'react';
import Login from '../screens/Login';
import renderer from 'react-test-renderer';

let findElement = function (tree, element) {
  let result;

  for (node in tree.children) {
    if ((tree.children[node].props.testID = element)) {
      result = true;
    }
  }
  return result;
};

it('find Element of login sign up ', () => {
  let tree = renderer.create(<Login />).toJSON();

  expect(findElement(tree, 'loginbtn')).toBeDefined();
});
