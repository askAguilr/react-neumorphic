import React, { Component } from 'react';
import './App.css';
import Button from "./components/NeuUI/Button/Button";
import {FiLogIn} from "react-icons/all";
import Toggle from "./components/NeuUI/Toggle/Toggle";
import Progress from "./components/NeuUI/RoundProgressBar/RoundProgressBar";
import Select from "./components/NeuUI/Select/Select";
import LinearProgressBar from "./components/NeuUI/LinearProgressBar/LinearProgressBar";
import Circle from "./components/NeuUI/Circle/Circle";
import NuBox from "./components/NeuUI/Box/Box";

class App extends Component {
  render() {
      return (
          <div className="App">
              <NuBox style={{padding: 24,
                  minHeight: 380,
                  display: 'flex',
                  flexDirection: "column",
                  marginTop:20,
                  marginLeft:'auto',
                  marginRight:'auto',
                  maxWidth:530}}
              >Content
                  <Button><FiLogIn/>Buy now</Button>
                  <Toggle/>
                  <Progress value={25}>demo</Progress>
                  <Select value={"Sunday"} options={[
                      'Sunday',
                      'Monday',
                      'Tuesday',
                      'Wednesday',
                      'Thursday',
                      'Friday',
                      'Saturday'
                  ]} label="Days:" onChange={(e: any) => console.log(e)}/>
                  <LinearProgressBar value={25}/>
                  <Circle><img src="https://picsum.photos/200" alt=""/></Circle>
              </NuBox>
          </div>
      );
  }
}

export default App;


