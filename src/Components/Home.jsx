import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {add, sub, add50} from '../reducers'

const Home = () => {
    const dispatch = useDispatch();

    const value = useSelector((state) => state.counter.value)

   
    return(
        <>
            <button onClick={()=> dispatch(add())}>Increment</button>
            <button>{value}</button>
            <button onClick={()=> dispatch(sub())}>Decrement</button>
            <button onClick={()=> dispatch(add50(50))}>Decrement 50</button>

        </>
    )
}
export default Home;