import React from 'react';

import Footer from '../../Components/Footer/Footer.js';
import ErrorBoundary from '../../Components/ErrorBoundary/ErrorBoundary.js';

import Modal from '../../Components/Modals/RootModal.js';
import { ModalContext } from '../Context/ModalContext.js';

export default function Layout({ children }) {
    return (
        <>
            <ModalContext>
                <ErrorBoundary>
                    {children}
                    <Modal />
                </ErrorBoundary>
                <Footer />
            </ModalContext>
        </>
    );
}
