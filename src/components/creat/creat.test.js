import React from 'react';
import ReactDOM from 'react-dom';
import Creat from './creat';

it('Creat renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Creat />, div);
});