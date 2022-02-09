import { EMAIL_INPUT, CLEAR_DATA } from '../Actions';

const initialState = '';

function mailReducer(state = initialState, action) {
  switch (action.type) {
    case EMAIL_INPUT:
      return action.payload.mail;
    case CLEAR_DATA:
      return '';
    default:
      return state;
  }
}

export default mailReducer;
