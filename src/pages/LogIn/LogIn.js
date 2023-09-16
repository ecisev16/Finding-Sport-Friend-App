import React from 'react';
import {auth} from '../../firebase/firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {useState} from "react";
import { Form, Link, Navigate, useSearchParams} from 'react-router-dom';
import classes from './AuthForm.module.css';
import {useAuth} from './Authentication';
import { useNavigate } from "react-router-dom";
import './LogIn.css';

function LogInPage(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [searchParams, setSearchParams] = useSearchParams(); // şu an sadece searchParams lazım
    const isLogin = searchParams.get('mode')==='login'
    const [validEmail, setValidEmail] = useState(false);
    const navigate = useNavigate();
    console.log(auth?.currentUser); 
    const ctx = useAuth();
    //console.log(login,'login')
    const signInHandler = async () =>{
        try{
            const res = await signInWithEmailAndPassword(auth, email, password)
            console.log(res);

            ctx.login(res);

        } catch (err){
            console.error(err); //incase something happend we will know cause we console.log
        }
        setEmail("");
        setPassword("");
        navigate("../root");
        
    };
    
    const signUpHandler = async () =>{
        try{
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (err){
            console.error(err); //incase something happend we will know cause we console.log
        }
        setValidEmail(true);
        setEmail("");
        setPassword("");
    }
    return (
        <>
        <div className="container-Login">
          <div className="card">
            <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
            <p>
              <label className='EmailWord' htmlFor="email">Email</label> <br />
              <input 
                className="EmailButton"
                type="email"
                value={email}
                placeholder="Email.."
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>
            <p>
              <label className='PasswordWord' htmlFor="password">Password</label> <br />
              <input
                className="PasswordButton"
                type="password"
                value={password}
                placeholder="Password.."
                onChange={(e) => setPassword(e.target.value)}
              />
            </p>
            <div className="LoginSave">
              <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
                {isLogin ? "Create new user" : "Login"}
              </Link>
              <button className='SaveButton' onClick={isLogin ? signInHandler : signUpHandler}>
                Save
              </button>
            </div>
          </div>
          </div>
          
           
            
            
        
      </>
    ); 
}


export default LogInPage;
