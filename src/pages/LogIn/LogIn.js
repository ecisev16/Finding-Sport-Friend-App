import {Link, useNavigate} from 'react-router-dom';
import {auth, googleProvider} from "./Config/firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import {useState} from "react";

  

function LogInPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log(auth?.currentUser); 

    const signInHandler = async () =>{
        try{
            await signInWithEmailAndPassword(auth, email, password)
        } catch (err){
            console.error(err); //incase something happend we will know cause we console.log
        }
        setEmail("");
        setPassword("");
        
    };
    return(
        <>
            <form>
                <input
                type = "email"   // input type. bu önemli çünkü ona göre bir görüntü oluşturuyor react
                value = {email}  // bu işlem yaptıktan sonra girdi yerini temizlemek için kullanılacak
                placeholder = "Email.."  //bu input yerindeki arkadaki silinik yazı olacak
                onChange = {(e)=>setEmail(e.target.value)}
                >
                </input>

                <input
                type = "password"
                value = {password}
                placeholder = "Password.."
                onChange = {(e)=>setPassword(e.target.value)}
                >
                </input>

                <button onClick={signInHandler}>Sign In</button>
            </form>
        </>
        
        
    ) 
}

export default LogInPage;
