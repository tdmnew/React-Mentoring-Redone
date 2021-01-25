import React from "react";

import Footer from "../Footer/Footer.js";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary.js";

//Modals
import Modal from "../Modals/RootModal";
import { ModalContext } from "../../Context/ModalContext.js";

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
