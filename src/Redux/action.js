import axios from "axios";
import {
  DELETE_CART_PRODUCT,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CURRENT_USER,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_SUCCESS,
  LOG_OUT_USER,
  POST_CART_PRODUCT,
  POST_NEW_USER,
} from "./actionTypes";

// Product page actionObj  ------------------------------------------------------
const getProductsRequestAction = () => {
  return {
    type: GET_PRODUCT_REQUEST,
  };
};
const getProductsSuccessAction = (payload) => {
  return {
    type: GET_PRODUCT_SUCCESS,
    payload,
  };
};
const getProductsFailureAction = (payload) => {
  return {
    type: GET_PRODUCT_FAILURE,
  };
};
const getSingleProductAction = (payload)=>{
  return {
    type: GET_SINGLE_PRODUCT_SUCCESS,
    payload
  }
}

// Products page dispatch functions
export const getProducts = (dispatch) => {
  dispatch(getProductsRequestAction());
  axios
    .get(`https://specialized-bike-json-server.onrender.com/products`)
    .then((res) => dispatch(getProductsSuccessAction(res.data)))
    .catch(() => dispatch(getProductsFailureAction()));
};

export const getSingleProduct = (id) => (dispatch) => {
  dispatch(getProductsRequestAction());
  axios
    .get(`https://specialized-bike-json-server.onrender.com/products/${id}`)
    .then((res)=>dispatch(getSingleProductAction(res.data)))
    .catch(() => dispatch(getProductsFailureAction()));
};

// -------------------------------------------------------------------------------------- //

// Cart page actionObj  --------------------------------------------------------------------
const getCartDataRequestAction = () => {
  return {
    type: GET_CART_REQUEST,
  };
};
const getCartDataSuccessAction = (payload) => {
  return {
    type: GET_CART_SUCCESS,
    payload,
  };
};
const getCartDataFailureAction = () => {
  return {
    type: GET_CART_FAILURE,
  };
};
const postCartDataAction = (payload) => {
  return {
    type: POST_CART_PRODUCT,
    payload
  };
};
const deleteCartDataAction = (payload) => {
  return {
    type: DELETE_CART_PRODUCT,
    payload,
  };
};

// Cart page dispatch functions

export const getCartProducts = (dispatch) => {
  dispatch(getCartDataRequestAction());
  axios
    .get(`https://specialized-bike-json-server.onrender.com/cart`)
    .then((res) => dispatch(getCartDataSuccessAction(res.data)))
    .catch(() => dispatch(getCartDataFailureAction()));
};

export const postCartProduct = (newProduct) => (dispatch) => {
  dispatch(getCartDataRequestAction());
  axios
    .post(`https://specialized-bike-json-server.onrender.com/cart`, newProduct)
    .then((res) => dispatch(postCartDataAction(res.data)))
    .catch(() => dispatch(getCartDataFailureAction()));
};

export const deleteCartProduct = (id) => (dispatch) => {
  axios
    .delete(`https://specialized-bike-json-server.onrender.com/cart${id}`)
    .then((res) => dispatch(deleteCartDataAction(res.data)));
};

// --------------------------------------------------------------------------------------------

// Account page actionObj -----------------------------------------------------------------

const postUserAction = (payload) => {
  return {
    type: POST_NEW_USER,
    payload,
  };
};
const loginUserAction = (payload) => {
  return {
    type: GET_CURRENT_USER,
    payload,
  };
};
const logOutUserAction = ()=>{
  return {
    type: LOG_OUT_USER
  }
}

// Account page dispatch functions
export const postNewUser = (newUser) => (dispatch) => {
  dispatch(postUserAction(newUser));
};

export const getCurrentUser = (currUser) => (dispatch) => {
  dispatch(loginUserAction(currUser));
};

export const logOutUser = (dispatch)=>{
  dispatch(logOutUserAction());
}

// --------------------------------------------------------------------------------------------
