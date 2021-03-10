import React from 'react';
import {Dots} from './Dots';
import CssBaseline from "@material-ui/core/CssBaseline";
import './Main.css';


export class App extends React.Component {
    render() {
        return (
            <div id="main">
                <CssBaseline/>
                <div id="background"/>
                <Dots/>
                <div id="center-text">It's time.</div>
                <div id="vinjette"/>
            </div>
        );
    }
}



