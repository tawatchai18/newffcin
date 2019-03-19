import React from 'react';
import ReactDOM from 'react-dom';
import Export from './export';

it('Export renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Export />, div);
});