import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
}

export const Accordion = (props: AccordionPropsType) => {
    let [collapsed, setCollapsed] = useState(false)

    const setCollapseHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={setCollapseHandler}>TOGGLE</button>
            {!collapsed && <AccordionBody/>}
        </div>
    );
};

type AccordionTitlePropsType = {
    title: string
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>-- {props.title} --</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}