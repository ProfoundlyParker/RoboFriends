import React, { ReactNode } from "react";

// ReactNode represents any node that could be rendered in React (ex. JSX, strings, numbers)
type ScrollProps = {
    children: ReactNode;
}

//Scroll component that handles Y overflow
const Scroll: React.FC<ScrollProps> = (props) => {
    return (
        <div className='overflow-y-scroll border-none h-scroll-h'>
            {props.children}
        </div>
    );
};

export default Scroll;