import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import { increamentNum,deccreamentNum } from './actions';

const App = () => {
  const myStore= useSelector((state)=>state.changeNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className='container'>
        <div className="innerDiv">
          <h1>Welcome to react redux</h1>
          <h4>Increament and decrement app</h4>
          <div className="quantity">
            <button onClick={()=>dispatch(deccreamentNum(1))}>-</button>
            <input type="text" value={myStore}/>
            <button onClick={()=>dispatch(increamentNum(1))}>+</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default App

