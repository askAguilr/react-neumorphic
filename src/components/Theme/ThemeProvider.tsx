import React, {createContext} from 'react'
import {Theme} from "./ITheme";
import {createTheme} from "./ThemeFactory";

interface ThemeProps {
    theme: Theme
    children:any
}

export const ThemeContext = createContext<Theme>(createTheme())

export const ThemeProvider: React.FC<ThemeProps> = (props: ThemeProps) => {
    const {theme} = props;

    return (
        <ThemeContext.Provider value={theme}>
            {props.children}
        </ThemeContext.Provider>
    )
}