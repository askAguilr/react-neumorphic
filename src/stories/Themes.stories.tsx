import React, {useState} from 'react';
import Toggle from "../components/Toggle/Toggle";
import {ThemeProvider} from "../components/Theme/ThemeProvider";
import {createTheme} from "../components/Theme/ThemeFactory";
import Box from "../components/Box/Box";
import Button from "../components/Button/Button";
import LinearProgressBar from "../components/LinearProgressBar/LinearProgressBar";
import RoundProgressBar from "../components/RoundProgressBar/RoundProgressBar";
import Select from "../components/Select/Select";
import Circle from "../components/Circle/Circle";
import {Layout} from "../components/Layout/Layout";

export default {
    title: 'Themes',
};

const theme1 = createTheme({
    primaryColor: '#009999',
    linearProgressBar:{
        color:"baseline"
    }
});

const theme2 = createTheme({
    primaryColor: '#000099',
    linearProgressBar:{
        color:"primary"
    }
});

export const ToStorybook = () => {
    const [checked, setChecked] = useState(false);
    const [selection, setSelection] = useState('React');

    return (
        <ThemeProvider theme={[theme1, theme2][Math.round(Math.random())]}>
            <Layout>
                <Box style={{maxWidth: 300, height: 500, marginLeft: 'auto', marginRight: 'auto'}}>
                    <Button onClick={() => {
                        console.log("clicked");
                    }}>
                        Themed button
                    </Button>
                    <Toggle onChange={()=>setChecked(!checked)} value={checked}/>
                    <LinearProgressBar value={75}/>
                    <RoundProgressBar value={75}/>
                    <Select options={["React", "Angular", "Vue", "Vanilla"]} value={selection} onChange={(e:string)=>{setSelection(e)}} />
                    <Circle/>
                </Box>
            </Layout>
        </ThemeProvider>
    );
};

ToStorybook.story = {
    name: 'Default',
};
