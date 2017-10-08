import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
    state = {
        selectedIndex: null,
    };

    select = (index) => this.setState({selectedIndex: index});

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Link to="/first">
                        <RaisedButton
                            label="Page 1"
                            secondary = {(this.state.selectedIndex === 0) ? true : false }
                            onClick={() => this.select(0)}
                        />
                    </Link>
                    <Link to="/second">
                        <RaisedButton
                            label="Page 2"
                            secondary = {(this.state.selectedIndex === 1) ? true : false }
                            onClick={() => this.select(1)}
                        />
                    </Link>
                </header>
                <div className="App-main">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
