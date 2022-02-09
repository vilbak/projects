import { combineReducers } from 'redux';
import Email from './EmailReducer';
import Password from './PasswordReducer';

const rootReducer = combineReducers({
  Email,
  Password,

});

export default rootReducer;
