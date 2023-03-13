import React from "react";
type  AccordionHeaderPropsType = {
    setToggle: () => void;
}
const AccordionHeader = (props: AccordionHeaderPropsType) => {
    return (
      <div style={{padding: '10px'}} onClick={props.setToggle}>
          +++++ Menu ++++++
      </div>
    );
}
export default AccordionHeader;