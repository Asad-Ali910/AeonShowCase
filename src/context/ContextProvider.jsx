"use client";
import { ThemeProvider } from "next-themes";

const ContextProvider = ({ children }) => {
	return <ThemeProvider>{children}</ThemeProvider>;
};

export default ContextProvider;
