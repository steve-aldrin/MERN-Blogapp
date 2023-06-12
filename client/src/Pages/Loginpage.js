import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Usercontext";

const Loginpage = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [redirect,setRedirect]=useState(false);
    const {setUserInfo}=useContext(UserContext)
    async function login(ev){
         ev.preventDefault()
        const response=await fetch('http://localhost:4000/login',{
            method:'POST',
            body: JSON.stringify({username,password}),
            headers:{'Content-Type':'application/json'},
            credentials:'include',      
        })
        if(response.ok){
            response.json().then(userInfo=>{
                setUserInfo(userInfo);
                setRedirect(true);
            })
            
        }
        else{
            alert('wrong credentials');
        }
       
    }

    if(redirect){
        return <Navigate to={'/'}/>;

    }

    return ( 
        <>
        <div className="registercard">
            <h1>Login</h1>
            <p>Enter your Email ID and password</p>
            <form action="" className="form" onSubmit={login}>
                <input type="mail" placeholder="Enter Email" value={username} onChange={ev=>{setUsername(ev.target.value)}}>

                </input>
                <input type="password" placeholder="Password" value={password} onChange={ev=>{setPassword(ev.target.value)}}></input>
                <button className="buttonsign">Sign in</button>
            </form>
        </div>




</>
     );
}
 
export default Loginpage;