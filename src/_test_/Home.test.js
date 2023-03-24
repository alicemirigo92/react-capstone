import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Home from '../Components/Home';
import store from '../Redux/configurestore';

describe('Home component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
