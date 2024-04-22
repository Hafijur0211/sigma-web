import React, { useEffect } from "react";

const Navbar = ({ color }) => {
    // Case 1: Run on every render
    useEffect(() => {
        alert("Hey I will run on every render");
    });

    // Case 2: Run only on first render
    useEffect(() => {
        alert("Hey Welcome to My Page. This is the first render");
    }, []);

    // Case 3: Run only when certain value change
    useEffect(() => {
        alert("Hey I am running because color was changed");
    }, [color]);

    // Example of cleanup function
    useEffect(() => {
        alert("Hey Welcome to My Page. This is the first render of app.jsx");
        return () => {
            alert("component was unmounted");
        };
    }, []);

    return <div>I am Navbar of {color} color</div>;
};

export default Navbar;
