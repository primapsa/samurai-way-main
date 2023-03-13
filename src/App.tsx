import React from 'react';
import './App.css';
import Raiting from "./Raiting";
import Accordion from "./Accordion";
import {UncontroledOnOff} from "./UncontroledOnOff";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
  return (
    <div className="App">
     <Raiting/>
        <Accordion />
        <UncontroledOnOff />
        {/*<OnOff/>*/}
    </div>
  );
}

export default App;
