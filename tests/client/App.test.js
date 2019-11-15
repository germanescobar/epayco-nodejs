import React from 'react';
import App from '../../client/App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<App />);
});
