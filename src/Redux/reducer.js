const initState = {
    Data: [],
    isLoading: false,
    isError: false
}

const reducer = (state=initState, action)=>{
   const {type, payload} = action;

   switch(type){

    default: return state
   }
}

export { reducer }