import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';


export class Header extends Component{
    render()
    {
        return <div className="App-header">{this.props.title}</div>
    }
}