import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./OnOff";
import {Accordion} from "./Accordion";
import {Rating} from "./Rating";
import {RatingControlled, RatingValueType} from "./RatingControlled";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div className="App">
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<Accordion titleValue={"My Accordion"}/>*/}
            {/*<Rating/>*/}
            <RatingControlled value={ratingValue} onClick={setRatingValue}/>
        </div>
    );
}

export default App;
