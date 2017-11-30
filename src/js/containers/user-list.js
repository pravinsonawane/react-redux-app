import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectUser} from '../actions'

class UserList extends Component{
    createList() {
        return this.props.users.map((user) => {
            return (
                <li 
                    key={user.id}
                    onClick={() => this.props.dispatch(selectUser(user))}
                >
                    {user.fName} {user.lName}
                </li>
            );
        });
    }
    render() {
        return (
            <ul>
                {this.createList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectUser:selectUser}, dispatch);
}


export default connect(mapStateToProps)(UserList);