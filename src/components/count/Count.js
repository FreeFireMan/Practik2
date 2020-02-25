
//rcc - создание компоненты

import React, {Component} from 'react';
import './Count.css'

class Count extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="count">

                <h1 >{this.props.count}</h1>

            </div>
        );
    }
}

export default Count;