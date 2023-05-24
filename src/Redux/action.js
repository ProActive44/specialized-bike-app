import { GET_DATA_REQUEST,GET_DATA_SUCCESS,GET_DATA_FAILURE } from "./actionTypes";


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
    dispatch(handleGetDataRequest());
    try {
        const res = await axios.get("https://specialized-bike-json-server.onrender.com/products");
        dispatch(handleGetDataSuccess(res.data.data));
    } catch (err) {
        dispatch(handleGetDataFailure());
    }
}

export {handleGetDataRequest,handleGetDataSuccess,handleGetDataFailure,handleGetData};


