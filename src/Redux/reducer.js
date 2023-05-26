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
      console.log("came");

      return{...state,isLoading:true  };
   }
   case GET_DATA_SUCCESS:{
    return{Data:payload,isLoading:false,isError:false};
  }
  case GET_DATA_FAILURE:{
    return{...state,Data: [],isError:true   };
  }
    default: return state
   }
}

export { reducer };