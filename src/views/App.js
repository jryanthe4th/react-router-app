import React, { Component } from 'react';
import '../css/App.css';
import HeaderContainer from '../components/Header/HeaderContainer';

class App extends Component {
    render() {
        return (
            <div className="template-wrapper">
                <HeaderContainer />
                <div className="page-content container-fluid">

                </div>
            </div>
        )
    }
}

export default App;
