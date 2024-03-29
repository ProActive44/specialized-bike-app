// for Product page REDUCER
export const GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAILURE = "GET_PRODUCT_FAILURE";

export const GET_SINGLE_PRODUCT_SUCCESS = "GET_SINGLE_PRODUCT_SUCCESS";

// for cart page REDUCER
export const GET_CART_REQUEST = "GET_CART_REQUEST";
export const GET_CART_SUCCESS = "GET_CART_SUCCESS";
export const GET_CART_FAILURE = "GET_CART_FAILURE";
export const POST_CART_PRODUCT = "POST_CART_PRODUCT";
export const DELETE_CART_PRODUCT = "DELETE_CART_PRODUCT";
export const INC_CART_QUANTITY = "INC_CART_QUANTITY";
export const DEC_CART_QUANTITY = "DEC_CART_QUANTITY";
export const EMPTY_CART = "EMPTY_CART";

// for Account page REDUCER
export const POST_NEW_USER = "POST_NEW_USER";
export const GET_CURRENT_USER = "GET_CURRENT_USER";
export const LOG_OUT_USER = "LOG_OUT_USER";

// for Wishlist page REDUCER
export const GET_WISHLIST_REQUEST = "GET_WISHLIST_REQUEST";
export const GET_WISHLIST_SUCCESS = "GET_WISHLIST_SUCCESS";
export const GET_WISHLIST_FAILURE = "GET_WISHLIST_FAILURE";
export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";
export const EMPTY_WISHLIST = "EMPTY_WISHLIST";

// for Debouncing
export const GET_DEBOUNCING_SUCCESS = "GET_DEBOUNCING_SUCCESS";
export const SET_DEBOUNCING_RESET = "SET_DEBOUNCING_RESET";

// for Payment page
// export const GET_ADDRESS_DATA = 'GET_ADDRESS_DATA'
// export const GET_CARDS_DATA = 'GET_CARDS_DATA'
export const POST_NEW_ADDRESS = "POST_NEW_ADDRESS";
export const POST_NEW_CARD = "POST_NEW_CARD";
export const SELECT_CURR_ADDRESS = "SELECT_CURR_ADDRESS";
export const SELECT_CURR_CARD = "SELECT_CURR_CARD";
export const DELETE_ADDRESS = "DELETE_ADDRESS";
export const DELETE_CARD = "DELETE_CARD";
