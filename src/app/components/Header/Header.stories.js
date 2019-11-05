import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './Header';

storiesOf('Header')
  .add('Header default', () => (
    <Header children={<h2>1111</h2>}/>
  ))
