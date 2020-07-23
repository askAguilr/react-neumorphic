import React, {useState} from 'react'

import { createTheme,Circle, Select, Button, Input, ThemeProvider, Layout, Box, Toggle, LinearProgressBar, RoundProgressBar } from 'react-neumorphic'
import 'react-neumorphic/dist/index.css'


const theme1 = createTheme({
  primaryColor: '#009999',
  linearProgressBar: {
      color: "baseline"
  }
});

const App = () => {
  const [checked, setChecked] = useState(false);
    const [selection, setSelection] = useState('React');
    const [text, setText] = useState('Sample input');
  return <ThemeProvider theme={theme1}>
  <Layout>
      <Box style={{maxWidth: 300, height: 500, marginLeft: 'auto', marginRight: 'auto'}}>
          <Button onClick={() => {
              console.log("clicked");
          }}>
              Themed button
          </Button>
          <Toggle onChange={() => setChecked(!checked)} value={checked}/>
          <LinearProgressBar value={Math.round(Math.random() * 100)}/>
          <RoundProgressBar value={Math.round(Math.random() * 100)}>
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
}

export default App
