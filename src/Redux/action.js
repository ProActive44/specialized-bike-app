import axios from 'axios'
import { DELETE_CART_PRODUCT, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, GET_CURRENT_USER, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_USERS_SUCCESS, POST_CART_PRODUCT, POST_NEW_USER } from "./actionTypes"


// Product page actionObj  ------------------------------------------------------
const getProductsRequestAction = ()=>{
    return {
        type: GET_PRODUCT_REQUEST,
    }
}
const getProductsSuccessAction = (payload)=>{
    return {
        type: GET_PRODUCT_SUCCESS,
        payload
    }
}
const getProductsFailureAction = (payload)=>{
    return {
        type: GET_PRODUCT_FAILURE
    }
}


// Products page dispatch functions
export const getProducts = (dispatch)=>{
    dispatch(getProductsRequestAction())
    axios.get(`https://specialized-bike-json-server.onrender.com/products`)
    .then((res)=>dispatch(getProductsSuccessAction(res.data)))
    .catch(()=>dispatch(getProductsFailureAction()))
}

export const getSingleProduct =(id)=> (dispatch)=>{
    dispatch(getProductsRequestAction())
    axios.get(`https://specialized-bike-json-server.onrender.com/products/${id}`)
    .catch(()=>getProductsFailureAction())
}

// -------------------------------------------------------------------------------------- //


// Cart page actionObj  --------------------------------------------------------------------
const getCartDataRequestAction = ()=>{
    return {
        type:GET_CART_REQUEST
    }
}
const getCartDataSuccessAction = (payload)=>{
   return {
    type : GET_CART_SUCCESS,
    payload
   }
}
const getCartDataFailureAction = (payload)=>{
    return {
        type: GET_CART_FAILURE
    }
}
const postCartDataAction = (payload)=>{
    return {
        type : POST_CART_PRODUCT
    }
}
const deleteCartDataAction = (payload)=>{
    return {
        type : DELETE_CART_PRODUCT,
        payload
    }
}

// Cart page dispatch functions

export const getCartProducts = (dispatch)=>{
    dispatch(getCartDataRequestAction())
    axios.get(`https://specialized-bike-json-server.onrender.com/cart`)
    .then((res)=>dispatch(getCartDataSuccessAction(res.data)))
    .then(()=>dispatch(getCartDataFailureAction()))
}

export const postCartProduct =(newProduct)=> (dispatch) =>{
    dispatch(getCartDataRequestAction())
    axios.post(`https://specialized-bike-json-server.onrender.com/cart`, newProduct)
    .then((res)=>dispatch(postCartDataAction(res.data)))
    .then(()=> dispatch(getCartDataFailureAction()))
}

export const deleteCartProduct = (id) => (dispatch) =>{
    axios.delete(`https://specialized-bike-json-server.onrender.com/cart${id}`)
    .then((res)=>dispatch(deleteCartDataAction(res.data)))
}

// --------------------------------------------------------------------------------------------



// Account page actionObj -----------------------------------------------------------------

const postUserAction = (payload)=>{
    return {
        type : POST_NEW_USER,
        payload
    }
}
const loginUserAction = (payload)=>{
    return {
        type : GET_CURRENT_USER,
        payload
    }
}

// Account page dispatch functions
export const postNewUser =(newUser)=> (dispatch)=>{
    dispatch(postUserAction(newUser))
}

export const getCurrentUser = (currUser)=> (dispatch) => {
    dispatch(loginUserAction(currUser))
}

// --------------------------------------------------------------------------------------------