import React from "react";

//Scroll component that handles Y overflow
const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: 'none', height: '500px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;