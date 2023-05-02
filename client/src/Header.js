import { Link } from "react-router-dom";

const Header = () => {
    return (  
        
      <nav className="nav">
      <Link to="/" className="title">My Blog</Link>
      <Link to="/login" className="Login">Login</Link>
      <Link to="/register" className="Register">Register</Link>
    </nav>
    );
}
 

export default Header;