import { signInWithEmailAndPassword } from "firebase/auth";
import {useDebugValue, useState} from "react";
import { auth } from "../firebase";
import 'firebase/database';
import { useNavigate } from "react-router-dom";
// import ModerateContent from "./AdminPanel/ModerateContent";
// import PlatformOperations from "./AdminPanel/PlatformOperations";

const Login = () => {
    const navigate= useNavigate();
    const [email,setEmail] =useState('');
    const [password, setPassword] =useState('');
    const Signin=()=>{
        try{
            signInWithEmailAndPassword(auth, email,password);
            console.log('User logged in successfully!');
            if(email==='admin@gmail.com'){
                navigate('/adminpanel')
            }
            else{
                navigate('/dashboard')
            }
            setEmail('');
            setPassword('');
        }
        catch(error){
            console.error('Error logging in:', error.message);
    } 
}
  return (
    <div className="mt-[100px] ml-[250px]">
        <div className="m-[120px]">
            <div className="ml-36 bg-[#82C047] w-[100px]"><h2>Login User</h2></div>
      
      <form className="flex mb-4 p-9 w-[530px]">
        <div>
        <label>Email: </label>
        <input type="email " value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full border p-2 mt-4 shadow rounded w-30"/>
       <div className="mt-4"><label>Password: </label></div>
        
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full border p-2 mt-4 shadow rounded w-30"/>
        <div className="ml-24 mt-4"><button onClick={Signin} className="w-[100px] items-center border solid bg-[#000000] text-white">Login</button></div>
        
        </div>
       
      </form>
    </div>
    </div>
  );
};
export default Login;
