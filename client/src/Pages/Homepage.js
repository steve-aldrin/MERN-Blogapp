import { useEffect, useState } from "react";
import Post from "../Post";
const Homepage = () => {
  const [posts,setPosts]=useState([]);
   useEffect(()=>{
    fetch('http://localhost:4000/getpost').then(response=>{
      response.json().then(posts=>{
        setPosts(posts);
      });
    });
   },[]);
    console.log(posts);

  return (
  
  <div className="posts">
    {posts.length > 0 && posts.map(post => (
      <Post {...post} />


    ))
    
    
    }
 
 
  </div>
  
  );
}
 
export default Homepage;