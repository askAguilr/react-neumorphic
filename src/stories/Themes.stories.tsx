import React, {useState} from 'react';
import {
    Input, Layout, Circle, Select, RoundProgressBar, LinearProgressBar, Button, Box,
    createTheme, ThemeProvider, Toggle
} from "../";

export default {
    title: 'Themes',
};

const theme1 = createTheme({
    primaryColor: '#009999',
    linearProgressBar: {
        color: "baseline"
    }
});

const theme2 = createTheme({
    primaryColor: '#000099',
    linearProgressBar: {
        color: "primary"
    }
});

export const ToStorybook = () => {
    const [checked, setChecked] = useState(false);
    const [selection, setSelection] = useState('React');
    const [text, setText] = useState('Sample input');

    return (
        <ThemeProvider theme={theme1}>
            <Layout>
                <Box style={{maxWidth: 300, height: 500, marginLeft: 'auto', marginRight: 'auto'}}>
                    <Button onClick={() => {
                        console.log("clicked");
                    }}>
                        Themed button
                    </Button>
                    <Toggle onChange={() => setChecked(!checked)} value={checked}/>
                    <LinearProgressBar value={Math.round(Math.random()*100)}/>
                    <RoundProgressBar value={Math.round(Math.random()*100)}>
                        <Circle radius={90}/>
                    </RoundProgressBar>
                    <Select options={["React", "Angular", "Vue", "Vanilla"]} value={selection}
                            onChange={(e: string) => {
                                setSelection(e);

                            }}/>
                    <Input value={text} onChange={(e: string) => {
                        setText(e)
                    }}/>
                </Box>
            </Layout>
        </ThemeProvider>
    );
};

ToStorybook.story = {
    name: 'Default',
};
