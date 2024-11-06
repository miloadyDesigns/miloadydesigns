"use client"
import React, { createContext, useContext, useState } from 'react';

const HeaderVisibilityContext = createContext();

export const useHeaderVisibility = () => {
    return useContext(HeaderVisibilityContext);
};

export const HeaderVisibilityProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <HeaderVisibilityContext.Provider value={{ isVisible, setIsVisible }}>
            {children}
        </HeaderVisibilityContext.Provider>
    );
};
