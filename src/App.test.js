import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from './Store/index.js';

import App from './App';

it('Renders matching snapshot', () => {
    const tree = render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    expect(tree).toMatchSnapshot();
});
