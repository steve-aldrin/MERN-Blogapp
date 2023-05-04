import { useState } from "react";

const Registerpage = () => {
    const[username,setUsername]=useState('');
    const [password,setPassword]=useState('');
   async function register(ev){
            ev.preventDefault();
            const response=await fetch('http://localhost:4000/register',{
                method:'POST',
                body: JSON.stringify({username,password}),
                headers:{'Content-Type':'application/json'},
            });
            if(response.ok){
                alert('Registration Sucessfull');
            }
            else{
               
                console.log(response.status);
            }
        
      
    }
    return (
        <>
        <div className="registercard">
            <h1>Register</h1>
            <p>Enter your Email ID and password</p>
            <form action="" className="form" onSubmit={register}>
                <input type="email" placeholder="Enter Email" value={username} onChange={ev=>setUsername(ev.target.value)}></input>
                <input type="text" placeholder="Password" value={password} onChange={ev=>setPassword(ev.target.value)}></input>
                <button className="buttonsign">Sign up</button>
            </form>
        </div>




</>
      );
}
 
export default Registerpage;