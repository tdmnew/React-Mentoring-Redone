import React from 'react';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import App from './App';
import store from './Store/index.js';

it('Renders matching snapshot', () => {
    const tree = render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    expect(tree).toMatchSnapshot();
});
