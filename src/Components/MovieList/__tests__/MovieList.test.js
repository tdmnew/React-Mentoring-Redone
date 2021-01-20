import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { ModalStateContext } from '../../../HOCs/Context/ModalContext';
import store from '../../../Store/index.js';

import MovieList from '../MovieList.js';

describe('Movie List', () => {
    it('Renders the movie list', () => {
        const modalOptions = {
            isOpen: false,
        };

    const tree = render(
      <Provider store={store}>
        <MemoryRouter>
          <ModalStateContext.Provider value={modalOptions}>
            <MovieList />
          </ModalStateContext.Provider>
        </MemoryRouter>
      </Provider>
    );

    expect(tree).toMatchSnapshot();
  });
});
