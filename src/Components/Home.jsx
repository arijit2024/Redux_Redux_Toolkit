import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    const dispatch = useDispatch();

    const {value} = useSelector(state => state.custom)

    const addBtn = () => {
        dispatch({
            type: "increment"
        })
    }
    const subBtn = () => {
        dispatch({
            type: "decrement"
        })
    }
    return(
        <>
            <button onClick={addBtn}>Increment</button>
            <button>{value}</button>
            <button onClick={subBtn}>Decrement</button>
        </>
    )
}
export default Home;