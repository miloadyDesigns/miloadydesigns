'use client';

import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react";

const ProviderChakra = ({ children }) => {

    // 3. extend the theme

    return (
        <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
    )
}
export default ProviderChakra