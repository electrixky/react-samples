import React from 'react';
import './App.css';
import {OnOff} from "./OnOff";
import {Accordion} from "./Accordion";
import {Rating} from "./Rating";

function App() {
    return (
        <div className="App">
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            <Accordion titleValue={"My Accordion"}/>
            {/*<Rating/>*/}
        </div>
    );
}

export default App;
