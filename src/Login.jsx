import React,{useState}from 'react'
import './Login.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
// import{useNavigate}from 'react-router-dom'


function Login() {
    const navigate = useNavigate();

    // const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(result=>{console.log(result)
            if(result.data ==="success"){
                 navigate('/home');
            }
           
    })
        .catch(err=>console.log(err));
    }
    return(
        <div className="main">
            <div className="head">Login</div>

            <div className="compo">
                <form onSubmit={handleSubmit}>
                {/* <label>Name:<br/><input type="text" placeholder="Enter Name:" onChange={(e)=>setName(e.target.value)}/></label> */}
                <label>Email:<br/><input type="text" placeholder="Enter Email:" onChange={(e)=>setEmail(e.target.value)}/></label>
                <label>Password:<br/><input type="password" placeholder="Enter Password:" onChange={(e)=>setPassword(e.target.value)}/></label>
                <button id="op" type='submit'>Login</button>
                </form>
                <div id="hmm">Already Have an Account!!</div>
                <Link to="/login"><button id="po" type='button'>Sign Up</button></Link>
            </div>
            
        </div>
    )
}
export default Login