
import './App.css';

function App() {
  return (
    <div className="App">

      <nav className="nav">
        <a href="" className="title">My Blog</a>
        <a href="" className="Login">Login</a>
        <a href="" className="Register">Register</a>
      </nav>

      <div className='intro'>
        <div className='introtext'>
          A sample Blog website
        </div>
       <h2 className="main">Welcome Reader</h2>
      </div>
     
      <div className="initial">
        <div className="initialtext">
          <div className="initaltitle"> 
          Elon exposes his burner, Tile embraces the cat life, and Elizabeth Holmes avoids prison
          </div>
          <div className="initaldesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quia praesentium saepe, porro ipsam amet non cumque laborum magnam repudiandae nam ullam doloribus similique, rerum nesciunt ad! Nisi, a facere?</div>
        </div>

      </div>

      <div className="posts">
        <div className="postcard">
          <div className="img">
            <img src="https://techcrunch.com/wp-content/uploads/2023/04/GettyImages-1087705674.jpg?w=430&h=230&crop=1" alt="img" />
          </div>
          <div className="text">
            <h2>Buy American shouldnt block our progress toward Internet for All</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quisquam nulla vero ut suscipit! Est quod natus ab iusto ipsam, illum esse nulla dolores harum quae eius minima, neque deserunt.</p>
          </div>
        </div>

        <div className="postcard">
          <div className="img">
            <img src="https://techcrunch.com/wp-content/uploads/2022/01/GettyImages-1230258332.jpg?w=430&h=230&crop=1" alt="img" />
          </div>
          <div className="text">
            <h2>The cultivated meat industry’s known struggles will take time to sort out, and maybe that’s OK</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quisquam nulla vero ut suscipit! Est quod natus ab iusto ipsam, illum esse nulla dolores harum quae eius minima, neque deserunt.</p>
          </div>
        </div>

        <div className="postcard">
          <div className="img">
            <img src="https://techcrunch.com/wp-content/uploads/2022/06/GettyImages-129355018.jpg?w=430&h=230&crop=1" alt="img" />
          </div>
          <div className="text">
            <h2>Pitch for the check you want</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quisquam nulla vero ut suscipit! Est quod natus ab iusto ipsam, illum esse nulla dolores harum quae eius minima, neque deserunt.</p>
          </div>
        </div>

      </div>


    </div>
   
  );
}

export default App;
