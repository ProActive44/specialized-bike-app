import {
    DELETE_CART_PRODUCT,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  POST_CART_PRODUCT,
} from "./actionTypes";

const initState = {
  cartProducts: [],
  isLoading: false,
  isError: false,
};

const cartReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CART_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case GET_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        cartProducts: payload,
      };

    case GET_CART_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case POST_CART_PRODUCT:
        return {...state, cartProducts:[...state.cartProducts, payload]}           // update cart
                
    case DELETE_CART_PRODUCT:
        const newProducts = state.cartProducts.filter((ele)=> ele.id !== payload.id)    
        return {...state, cartProducts: newProducts}                                  // Delete from cart

    default:
      return state;
  }
};

export { cartReducer };
