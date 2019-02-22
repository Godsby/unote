import { LOG_IN, LOG_OUT, SIGN_UP } from "./actionTypes";

const loginUser = user => {
  return { type: LOG_IN, payload: user };
};

const logoutUser = () => {
  return { type: LOG_OUT, payload: {} };
};

const signupUser = user => {
  return { type: SIGN_UP, payload: user };
};

export { loginUser, logoutUser, signupUser };