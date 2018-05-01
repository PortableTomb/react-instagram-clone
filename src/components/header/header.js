import React, { Component } from 'react';
import "./header.css"

class Header extends React.Component {
    render() {
        return (
            <nav className="nav">
                <div className="nav_menu">
                    <div className="nav_menu_brand">
                        <a className="nav_menu_brand-logo" href="/">Insta-Clone-A-Gram</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;