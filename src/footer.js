import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';


export class Footer extends Component{
    render()
    {
        return <div className="App-footer">{this.props.title}</div>
    }
}