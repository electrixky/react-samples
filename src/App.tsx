import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./OnOff";
import {Accordion} from "./Accordion";
import {Rating} from "./Rating";
import {RatingControlled, RatingValueType} from "./RatingControlled";
import {AccordionControlled} from "./AccordionControlled";
import {OnOffControlled} from "./OnOffControlled";

function App() {

    //let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    //let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className="App">
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            <OnOffControlled on={switchOn} onChange={setSwitchOn}/>
            {/*<Accordion titleValue={"My Accordion"}/>*/}
            {/*<AccordionControlled titleValue={"My Accordion"}*/}
            {/*                     collapsed={accordionCollapsed}*/}
            {/*                     onChange={() => {*/}
            {/*                         setAccordionCollapsed(!accordionCollapsed)*/}
            {/*                     }}/>*/}
            {/*<Rating/>*/}
            {/*<RatingControlled value={ratingValue} onClick={setRatingValue}/>*/}
        </div>
    );
}

export default App;
