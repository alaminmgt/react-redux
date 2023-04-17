const initialState = 0;

const changeNumber =(state=initialState, action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case "INCREAMENT" :
            return state + action.payload;
        case "DECREMENT" :
             return state - action.payload;
        default : return state
    }
}
export default changeNumber;