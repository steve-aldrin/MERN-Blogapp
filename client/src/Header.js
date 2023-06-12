import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./Usercontext";

const Header = () => {
const {setUserInfo,userInfo}=useContext(UserContext);

  useEffect(()=>{
    fetch('http://localhost:4000/profile',{
      credentials:'include',
    }).then(response=>{
      response.json().then(userInfo=>{
           setUserInfo(userInfo);
      })
    })
  },[])
  function logout(){
    fetch('http://localhost:4000/logout',{
      credentials:'include',
      method:'POST',
    })
    setUserInfo(null);
  }
  const username=userInfo?.username;
    return (  
        
      <nav className="nav">
      
      <Link to="/" className="title">My Blog</Link>
      {username &&(
        <>
           
            <Link to="/create" className="Register">Create new Post</Link>
            <a onClick={logout}>Logout</a>
        </>
      )}
      {!username &&(
        <>
      <Link to="/login" className="Login">Login</Link>
      <Link to="/register" className="Register">Register</Link>
        </>
      )}
    
    </nav>
    );
}
 

export default Header;