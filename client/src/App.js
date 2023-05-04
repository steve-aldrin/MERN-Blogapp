
import './App.css';
import Post from './Post.js';
import Header from './Header';
import Inital from './Inital';
import {Route,Routes} from "react-router-dom"
import Layout from './Layout';
import Homepage from './Pages/Homepage';
import Loginpage from './Pages/Loginpage';
import Registerpage from './Pages/Registerpage';
function App() {
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <>
            <Inital />

            <Homepage />

          </>
        }
        />
        <Route path={"/login"} element={

          <Loginpage />

        } />
         <Route path={"/register"} element={
        <Registerpage/>
       }/>


      </Route>

    </Routes>

 
   
  );
}

export default App;

//

//
