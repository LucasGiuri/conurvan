import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('Header', () => {
  it('Header basic render snapshoot', () => {
    const component = renderer.create(<Header children={<h2>1111</h2>}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})
