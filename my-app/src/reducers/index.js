import changeNumber from "./upDown";
import multiNumber from "./multi";
import {combineReducers} from "redux"

const rootReducer = combineReducers({
    changeNumber:changeNumber,
    multiNumber:multiNumber,
})
export default rootReducer;