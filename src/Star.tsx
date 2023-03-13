import React from "react";

const Star = (props: any) => {
    return (
      <div style={{padding: '10px'}}
      onClick={() => props.setACtiveStar(props.value)}>{props.isActive ? <b>star</b> : 'star' }</div>
    );
}
export default Star;