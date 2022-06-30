import React, { useReducer, useContext } from 'react';
import { MyContext } from '../component/MyContext';


function reduce(state,action){
        switch(action.type){
            case "INCREASE":
            return state+1;
            case "DECREASE":
            return state-1;
            default:
            return state;
        }
}
const Counter2 = (promps) => {
    const contextText = useContext(MyContext);
    console.log(contextText)
    let [ number, dispatch ] = useReducer(reduce,0);
    function Increase(){
        dispatch({type:"INCREASE"});
    }
    function Decrease(){
        dispatch({type:"DECREASE"});
    }
    
    return (
        <div>
            <h2>{number}</h2>
            <button onClick={Decrease}>-1</button>
            <button onClick={Increase}>+1</button>
        </div>
    );
};

export default Counter2;