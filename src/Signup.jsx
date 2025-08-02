
import './Signup.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
// import{useNavigate}from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import {BrowserRouter,Routes,Route,BrowserRouter}from'react-router-dom'
function Signup() {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    useEffect(() => {
        setEmail('');
        setPassword('');
        setName('');
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result)
                navigate('/login')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="main">
            <div className="head">Register</div>

            <div className="compo">
                <form onSubmit={handleSubmit}>
                    <label>Name:<br /><input type="text" placeholder="Enter Name:" onChange={(e) => setName(e.target.value)} /></label>
                    <label>Email:<br /><input type="text" placeholder="Enter Email:" onChange={(e) => setEmail(e.target.value)} /></label>
                    <label>Password:<br /><input type="password" placeholder="Enter Password:" onChange={(e) => setPassword(e.target.value)} /></label>
                    <button id="op" type='submit'>Register</button>
                </form>
                <div id="hmm">Already Have an Account!!</div>
                <Link to="/login"><button id="po">Login</button></Link>
            </div>

        </div>
    )
}
export default Signup