import React, { Component } from "react";

class Header extends Component {
    // Will never re-render header
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    render() {
        return <h1 className="f1">RoboFriends</h1>
    }
    
}

export default Header;