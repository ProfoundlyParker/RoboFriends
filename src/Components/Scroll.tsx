import React, { ReactNode } from "react";

// ReactNode represents any node that could be rendered in React (ex. JSX, strings, numbers)
type ScrollProps = {
    children: ReactNode;
}

//Scroll component that handles Y overflow
const Scroll: React.FC<ScrollProps> = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: 'none', height: '500px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;