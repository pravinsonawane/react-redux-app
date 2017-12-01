import React, {Component} from 'react';
import {connect} from 'react-redux';

class componentForTest extends Component{

    render() {
        return (
            <div>
                <h2>{this.props.user.fName}</h2>
            </div>
        );
    }
}

export default componentForTest;