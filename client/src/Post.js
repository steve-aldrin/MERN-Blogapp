import "./App.css"
import  {formatISO9075} from "date-fns";
const Post = ({title,summary,cover,text,createdAt,author}) => {
    return (  
        <div className="postcard">
          <div className="img">
            <img className="postimg" src={'http://localhost:4000/'+cover} alt="img" />
          </div>

          <div className="mega">
          <div className="text">
            <h2 className="titlep">{title}</h2>
            <time className="time">{formatISO9075(new Date(createdAt))}</time>
          
          </div>

          <div className="container">
          <p>{text}</p>
            <p>{author.username}</p>
            
                
          </div>

          </div>
        
         
        </div>
    );
}
 
export default Post;