export const EMAIL_INPUT = 'EMAIL_INPUT';
export const PASSWORD_INPUT = 'PASSWORD_INPUT';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const CLEAR_DATA = 'CLEAR_DATA';

export function emailEnter(Email) {
  return {
    type: EMAIL_INPUT,
    payload: { Email },
  };
}
export function passwordEnter(password) {
  return {
    type: PASSWORD_INPUT,
    payload: { password },
  };
}

export function loginFail(validationMessage) {
  return {
    type: LOGIN_FAIL,
    payload: { validationMessage },
  };
}

export function clearData() {
  return {
    type: CLEAR_DATA,
  };
}
