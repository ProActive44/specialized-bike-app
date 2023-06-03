import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_SUCCESS,
} from "./actionTypes";

const initState = {
  AllProducts: [],
  isLoading: false,
  isError: false,
  currProduct: {},
};

const productsReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCT_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        AllProducts: payload,
      };

    case GET_PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        currProduct: payload,
      };

    default:
      return state;
  }
};

export { productsReducer };
