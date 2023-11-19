import React, { Component } from "react";

class Header extends Component {
    // Will never re-render header
    shouldComponentUpdate(nextProps: any, nextState: any): boolean {
        return false;
    }
    render(): JSX.Element {
        return <h1 className="f1">RoboFriends</h1>
    }
    
}

export default Header;