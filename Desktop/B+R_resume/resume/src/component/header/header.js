import React, { Component } from 'react';
// import { } from 'react-bootstrap';
import { Link } from 'react-router';


export class Header extends Component {
    render(){
        return (
        <div id='header'>
            <div className='links'>
                <a><Link to="/about">Home</Link></a>
                <a><Link to='../about'>About</Link></a>
                <a><Link to='../resume'>Resume</Link></a>
                <a><Link to='../portfolio'>Works</Link></a>
                <a><Link to='../portfolio'>Contact</Link></a>
            </div>
            <div className='title'>
                <title>Who is RJ? This is RJ.</title>
            </div>
        </div>
        );
    }
}

export default Header;