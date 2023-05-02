
import './App.css';
import Post from './Post.js';
import Header from './Header';
import Inital from './Inital';
import {Route,Routes} from "react-router-dom"
function App() {
  return (
    <Routes>
      <Route index element={
    <div className="App">
         <Header/>
         <Inital/>
    
     
      <div className="posts">
        <Post/>
        <Post/>
        <Post/>

      </div>
      </div>}
      />
     <Route path={"/login"} element={
      <div>Login</div>
     }/>
 
    </Routes>

  
   
  );
}

export default App;

