import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/counterSlice";
import "./Counter.css";
import { useNavigate } from "react-router-dom";

const Counter = () => {
  const dec = useRef();
  const inc = useRef();
  const home = useRef();
  const navigate = useNavigate();
  const navigationHandler = ()=>{
    navigate('/');
    home.current.style.backgroundColor="orange";
  }
  const dispatch = useDispatch();

  // useSelector gives the all the state of the application

  const handleIncrement = () => {
    dec.current.style.backgroundColor = "white";
    inc.current.style.backgroundColor = "green";
    dispatch(increment());
  };

  const handleDcrement = () => {
    dec.current.style.backgroundColor = "red";
    inc.current.style.backgroundColor = "white";

    dispatch(decrement());
  };
  const data = useSelector(state => state.counter);
  return (
    <div className="counter">
      <h2>welcome to counter App</h2>
      <div style={{ marginTop: "1rem" }}>
        <h1 style={{ color: "white" }}>{data.count}</h1>
        <button
          style={{ color: "#000" }}
          className="btn"
          onClick={handleIncrement}
          ref={inc}
        >
          Increment
        </button>
        <button
          style={{ color: "#000" }}
          className="btn"
          onClick={handleDcrement}
          ref={dec}
        >
          Decrement
        </button>
      </div>
        <button style={{color:"#000"}} onClick={navigationHandler} className="btn" ref={home}>Home page</button>
    </div>
  );
};

export default Counter;
