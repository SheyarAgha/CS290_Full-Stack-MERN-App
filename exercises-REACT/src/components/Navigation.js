import React from "react";
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="App-nav">
            <Link to="/">Home</Link>
            <span>&nbsp;&nbsp;</span>
            <Link to="/CreateExercise">Add an Exercise</Link>
        </nav>
    );
}

export default Navigation;
