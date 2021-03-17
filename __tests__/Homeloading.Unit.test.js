import 'react-native';
import React from 'react';
import Home from '../screens/Home';
import renderer from 'react-test-renderer';

// beforeEach((){
//   state=
// });


let findElement = function (tree, element) {
  let result;

  for (node in tree.children) {
    if ((tree.children[node].props.testID = element)) {
      result = true;
    }
  }
  return result;
};

it('find Element of indicator loading ', () => {
  let tree = renderer.create(<Home />).toJSON();

  expect(findElement(tree, 'loading')).toBeDefined();
});
