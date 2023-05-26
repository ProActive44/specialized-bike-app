import { GET_DATA_REQUEST,GET_DATA_SUCCESS,GET_DATA_FAILURE } from "./actionTypes";
import axios from 'axios';

const handleGetDataRequest = () => {
    return {
        type: GET_DATA_REQUEST
    }
};

const handleGetDataSuccess = (data) => {
    return {
        type: GET_DATA_SUCCESS,
        payload: data
    }
};

const handleGetDataFailure = () => {
    return {
        type: GET_DATA_FAILURE
    }
};

const handleGetData = async (dispatch) => {
    console.log("hey")
    dispatch(handleGetDataRequest());
    try {
        const res = await axios.get("https://specialized-bike-json-server.onrender.com/products");
        console.log("hh",res.data)

        dispatch(handleGetDataSuccess(res.data));
    } catch (err) {
        dispatch(handleGetDataFailure());
    }
}

export {handleGetDataRequest,handleGetDataSuccess,handleGetDataFailure,handleGetData};


