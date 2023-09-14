import React from 'react';
import {auth} from '../../firebase/firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {useState} from "react";
import { Form, Link, Navigate, useSearchParams} from 'react-router-dom';
import classes from './AuthForm.module.css';
import {useAuth} from './Authentication';
import { useNavigate } from "react-router-dom";
  

function LogInPage(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [searchParams, setSearchParams] = useSearchParams(); // şu an sadece searchParams lazım
    const isLogin = searchParams.get('mode')==='login'
    const [validEmail, setValidEmail] = useState(false);
    const navigate = useNavigate();
    console.log(auth?.currentUser); 
    const {login} = useAuth();
    //console.log(login,'login')
    const signInHandler = async () =>{
        try{
            const res = await signInWithEmailAndPassword(auth, email, password)
            console.log(res);

            login(res);

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
        
        
    };
    return(
        <>
            <div>
                <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
                <p>
                <label htmlFor="email">Email</label>
                <input 
                    type = "email"   // input type. bu önemli çünkü ona göre bir görüntü oluşturuyor react
                    value = {email}  // bu işlem yaptıktan sonra girdi yerini temizlemek için kullanılacak
                    placeholder = "Email.."  //bu input yerindeki arkadaki silinik yazı olacak
                    onChange = {(e)=>setEmail(e.target.value)}
                />
                </p>
                <p>
                <label htmlFor="image">Password</label>
                <input 
                    type = "password"
                    value = {password}
                    placeholder = "Password.."
                    onChange = {(e)=>setPassword(e.target.value)}
                />
                </p>
                
                <div className={classes.actions}>
                <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
                    {isLogin ? 'Create new user' : 'Login'}
                </Link>
                
                {/* <Link to={validEmail ? "../root" : ""} style={{textDecoration: 'none'}}> */}
                    <button
                        onClick={isLogin ? signInHandler : signUpHandler}
                    >
                        Save
                    </button>
                {/* </Link> */}
                
                
               
                </div>
            </div>
            
        </>
        
        
    ) 
}

export default LogInPage;
