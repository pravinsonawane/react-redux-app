import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetails extends Component{

    render() {
        console.log(this.props);
        if(!this.props.user) {
            return <h4>Select User..</h4>;
        }
        return (
            <div>
                <h2>{this.props.user.fName}</h2>
                <h2>{this.props.user.lName}</h2>
                <h4>{this.props.user.age}</h4>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetails);