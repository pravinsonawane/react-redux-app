import {combineReducers} from 'redux';
import userReducer from './reducer-users';
import activeUserReducer from './reducer-active-user';

const allReducers = combineReducers({
    users: userReducer,
    activeUser: activeUserReducer
});

export default allReducers
