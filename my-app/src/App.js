import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import { increamentNum,deccreamentNum,multiNum,divNum } from './actions';

const App = () => {
  const myStore= useSelector((state)=>state.changeNumber);
  const myStore1= useSelector((state)=>state.multiNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className='container' style={{marginBottom:"5rem"}}>
        <div className="innerDiv">
          <h1>Welcome to react redux</h1>
          <h4>Increament and decrement app</h4>
          <div className="quantity">
            <button onClick={()=>dispatch(deccreamentNum(1))}>-</button>
            <input type="text" value={myStore}/>
            <button onClick={()=>dispatch(increamentNum(1))}>+</button>
          </div>
        </div>
        <div className="innerDiv" style={{marginTop:"5rem"}}>
          <h1>Welcome to react redux</h1>
          <h4>Multiplication and Division app</h4>
          <div className="quantity">
            <button onClick={()=>dispatch(divNum())}>/</button>
            <input type="text" value={myStore1}/>
            <button onClick={()=>dispatch(multiNum(5))}>*</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default App

