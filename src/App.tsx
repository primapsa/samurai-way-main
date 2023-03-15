import React from 'react';
import './App.css';
import Raiting from "./Raiting";
import Accordion from "./Accordion";
import {UncontroledOnOff} from "./UncontroledOnOff";
import {OnOff} from "./components/OnOff/OnOff";
import { Select } from "./components/Select/Select";
const dats = [
    {name: 'user1', value: '1'},
    {name: 'user2', value: '2'},
    {name: 'user3', value: '3'}
]

function App() {
  return (
    <div className="App">
     {/*<Raiting/>*/}
     {/*   <Accordion />*/}
     {/*   <UncontroledOnOff />*/}
        {/*<OnOff/>*/}

        <Select name={'Its select'} list={dats} onChange={(x) => console.log(x) }/>
    </div>
  );
}

export default App;
