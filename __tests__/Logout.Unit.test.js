import 'react-native';
import React from 'react';
import Logout from '../screens/logout';
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

it('find Element of logout ', () => {
  let tree = renderer.create(<Logout />).toJSON();

  expect(findElement(tree, 'logout')).toBeDefined();
});
