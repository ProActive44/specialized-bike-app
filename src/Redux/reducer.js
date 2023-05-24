import { GET_DATA_REQUEST,GET_DATA_SUCCESS,GET_DATA_FAILURE } from "./actionTypes";

const initState = {
    Data: [],
    isLoading: false,
    isError: false
}

const reducer = (state=initState, action)=>{
   const {type, payload} = action;

   switch(type){
    case GET_DATA_REQUEST :{
      return{...state,Data: [],isLoading:true  };
   }
   case GET_DATA_SUCCESS:{
    return{...state,Data:payload,isLoading:fale,isError:false};
  }
  case GET_DATA_ERROR:{
    return{...state,Data: [],isError:true   };
  }
    default: return state
   }
}

export { reducer };