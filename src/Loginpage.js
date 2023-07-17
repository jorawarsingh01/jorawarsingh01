import React from "react";
import {useState} from 'react';
import './style.css'
import axios from "axios";

function Login(){

    const[input_id ,setid ]=useState('');
    const[password , setpass]=useState('');

    const changeid=(event)=>{
        setid(event.target.value)
    }

    const changepass=(event)=>{
        setpass(event.target.value)
    }

    const post_data=()=>{
        axios.post('https://64ae6dd4c85640541d4d0c21.mockapi.io/user',{input_id,password})
        //window.location.reload()
}

    

    
    return(
        <div className="loginpage">
            <h1><b>WELCOME TO MY LOGIN PAGE</b></h1>
            <div className="loginform">
            <div className="text">
                <div className="textb">
            <p>The login page is an essential component of any online 
                platform, providing access to authorized users. 
                A well-designed login page ensures security and convenience. 
                With intuitive interface and robust authentication measures, 
                users can enter their credentials confidently, knowing their 
                information is protected. Streamlining the login process 
                enhances user experience, encouraging engagement and 
                fostering trust. A seamless login page experience sets 
                the foundation for a successful online platform.</p>
                </div>
                </div>

        <div className="login">
            
            
            
            <div className="loginbox">
            <h2>LOGIN PAGE SAMPLE</h2>
            

            <div className="fieldrow">


              <label>EMAIL ID:  </label>
                <input value={input_id}  type="text" placeholder= "EMAIL" onChange={changeid}></input>
                 </div>
                 <div className="fieldrow">
                    <label>PASSWORD:  </label>
                    <input value={password} type="password" placeholder="PASSWORD" onChange={changepass}></input>
                 </div>
                 <div className="button">
                 <button className="buttons" onClick={post_data}>Login</button>
                 
                 
                 </div>
                 </div>
                 </div>
  
                 </div>
</div>
    )
}

export default Login
