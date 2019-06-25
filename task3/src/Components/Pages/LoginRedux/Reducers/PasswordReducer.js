import { PASSWORD_INPUT, CLEAR_DATA } from '../Actions';

const initialState = '';

function passwordReducer(state = initialState, action) {
  switch (action.type) {
    case PASSWORD_INPUT:
      return action.payload.password;
    case CLEAR_DATA:
      return '';
    default:
      return state;
  }
}

export default passwordReducer;
