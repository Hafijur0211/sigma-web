import React, { useContext } from "react";
import { counterContext } from "../context/context";
import Component1 from "./Component1";

const Button = () => {
    const value = useContext(counterContext);
    return (
        <div>
            <button onClick={() => value.setCount((count) => count + 1)} >
                {" "}
                <span>
                    <Component1 />
                </span>{" "}
                I am button
            </button>
        </div>
    );
};

export default Button;
