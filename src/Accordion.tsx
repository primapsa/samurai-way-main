import React, {useState} from "react";
import AccordionHeader from "./AccordionHeader";
import AccordionBody from "./AccordionBody";

const Accordion = (props: any) => {
    const [isCollapsed, setToogle] = useState(false);
    return (
        <div style={{display: 'flex', padding: '100px'}}>
            <AccordionHeader setToggle={ () => {setToogle(!isCollapsed)}}/>
            <AccordionBody isCollapsed={isCollapsed}/>

        </div>
    )
}
export default Accordion;