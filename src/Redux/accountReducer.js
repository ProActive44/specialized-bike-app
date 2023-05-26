import {
  GET_CURRENT_USER,
  GET_USERS_SUCCESS,
  POST_NEW_USER,
} from "./actionTypes";

const initState = {
  AllUsers: [],
  currUser: {},
};

const accountReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    // case GET_USERS_SUCCESS:
    //   return { ...state, AllUsers: payload };

    case POST_NEW_USER:
      return { ...state, AllUsers: [...state.AllUsers, payload] };

    case GET_CURRENT_USER:
      return { ...state, currUser: payload };

    default:
      return state;
  }
};

export { accountReducer };
