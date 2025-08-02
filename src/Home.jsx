import React from "react";
import { useState } from "react";
import './Home.css'
function Home() {
    const[value,setValue]=useState('')
    return (
        <div>
            <div>blogVlog</div>
            <div className="navbar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div>
                <p id="op">Welcome to my blog page!!</p>
                <p id="op">Explore,Read and create</p>


            </div>

        </div>
    )

}
export default Home
