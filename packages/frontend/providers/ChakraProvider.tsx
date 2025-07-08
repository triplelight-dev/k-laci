'use client';

import { ChakraProvider as Provider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";

export default function ChakraProvider({ children }: { children: React.ReactNode }) {
  return <Provider value={defaultSystem}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  </Provider>;
}