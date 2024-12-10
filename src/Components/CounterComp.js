import React, { useDebugValue, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/Action/Action";


const CounterComp = ()=> {
    let dispatch = useDispatch();
    const counter = useSelector((state)=> state.count);


    return (
        <div>
            <h3>{`counter:${counter}`}</h3>
            <button onClick={()=>dispatch(increment())}>increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    )
};

export default CounterComp;