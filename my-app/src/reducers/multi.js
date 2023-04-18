const initialState = 5;

const multiNumber =(state=initialState, action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case "MULTI" :
            return state * action.payload;
        case "DIVISION" :
             return state / 5;
        default : return state
    }
}
export default multiNumber;