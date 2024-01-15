import React, { Component } from "react";

class Header extends Component {
    // Will never re-render header
    shouldComponentUpdate(nextProps: any, nextState: any): boolean {
        return false;
    }
    render(): JSX.Element {
        return <h1 className="text-5xl mb-9 mt-9">RoboFriends</h1>
    }
    
}

export default Header;