"use client";
import { ThemeProviderProps, ThemeProvider as NextThemesProvider } from "next-themes";

const Provider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default Provider;
