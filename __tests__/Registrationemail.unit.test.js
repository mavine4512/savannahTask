import 'react-native';
import React from 'react';
import Registration from '../screens/registration';
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

it('find Element of Registration Email ', () => {
  let tree = renderer.create(<Registration />).toJSON();

  expect(findElement(tree, 'email')).toBeDefined();
});
