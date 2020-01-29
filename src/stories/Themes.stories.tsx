import React from 'react';
import Toggle from "../components/NeuUI/Toggle/Toggle";
import {ThemeProvider} from "../components/NeuUI/Theme/ThemeProvider";
import {createTheme} from "../components/NeuUI/Theme/ThemeFactory";
import Box from "../components/NeuUI/Box/Box";
import Button from "../components/NeuUI/Button/Button";
import LinearProgressBar from "../components/NeuUI/LinearProgressBar/LinearProgressBar";

export default {
    title: 'Themes',
};

const theme1 = createTheme({
    primaryColor: '#009999',
    linearProgressBar:{
        color:"baseline"
    }
});

export const ToStorybook = () => {
    return (
        <ThemeProvider theme={theme1}>
            <Box>
                <Button >
                    Themed button
                </Button>
                <Toggle/>
                <LinearProgressBar value={75}/>
            </Box>
        </ThemeProvider>
    );};

ToStorybook.story = {
    name: 'Default',
};
