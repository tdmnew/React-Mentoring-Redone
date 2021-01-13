import React from "react";

//Movie Details
const useDetailsState = (initialState) => {
    const [isOpen, setIsOpen] = React.useState(initialState.isOpen);
    const [detailsProps, setDetailsProps] = React.useState(
        initialState.detailsProps
    );

    const setDetailsState = ({ isOpen, detailsProps = {} }) => {
        setIsOpen(isOpen);
        setDetailsProps(detailsProps);
    };

    return [{ isOpen, detailsProps }, setDetailsState];
};

export const DetailsStateContext = React.createContext();
export const DetailsUpdaterContext = React.createContext();

export const DetailsContext = ({ children }) => {
    const [details, setDetails] = useDetailsState({
        isOpen: false,
        modalProps: {},
    });

    return (
        <DetailsUpdaterContext.Provider value={setDetails}>
            <DetailsStateContext.Provider value={details}>
                {children}
            </DetailsStateContext.Provider>
        </DetailsUpdaterContext.Provider>
    );
};
