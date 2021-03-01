import React from 'react';
import userEvent from '@testing-library/user-event';
import { i18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { getByDisplayValue, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { ModalStateContext } from '../../../HOCs/Context/ModalContext';
import i18n from '../../../i18n';
import store from '../../../Store';

import Nav from '../Nav.js';

describe('Nav', () => {
    it('Renders the nav bar and default properties', () => {
        const modalOptions = {
            isOpen: false,
        };

        const tree = render(
            <Provider store={store}>
                <i18nextProvider i18n={i18n}>
                    <MemoryRouter>
                        <ModalStateContext.Provider value={modalOptions}>
                            <Nav />
                        </ModalStateContext.Provider>
                    </MemoryRouter>
                </i18nextProvider>
            </Provider>
        );

        expect(tree).toMatchSnapshot();

        expect(screen.getByText(/ALL/i)).toBeInTheDocument();
        expect(screen.getByText(/RELEASE DATE/i)).toBeInTheDocument();
        expect(screen.getByText(/TITLE/i)).toBeInTheDocument();
        expect(screen.getByText(/GENRE/i)).toBeInTheDocument();
        expect(screen.getByText(/RATING/i)).toBeInTheDocument();
    });
});
