import React from "react";
type AccordionBodyPropsType = {
    isCollapsed: boolean;
}
const AccordionBody = (props: AccordionBodyPropsType) => {
    return (
        <div>
            {props.isCollapsed && <div>
                <div key={Math.random()}>1</div>
                <div key={Math.random()}>2</div>
                <div key={Math.random()}>3</div>
                <div key={Math.random()}>4</div>
                <div key={Math.random()}>5</div>
            </div>  }
        </div>
    );
}
export default AccordionBody;