// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link,Navigate } from "react-router-dom";
import { useState } from "react";



import Home from './components/home/home';
import Gallery from './components/gallery/gallery';
import About from './components/about/about';
import Login from './components/login page/login';
import Signup from './components/signup page/signup';



function App() {


  const [isLogin, SetIsLogin] = useState(false)


  return (


    <div>

      <button onClick={() => { SetIsLogin(!isLogin)}}>toggle login signup test</button>

      {(isLogin) ? <ul className='navbar-nav me-auto mb-2 mb-lg-0'>

        <li className='nav-item'> <Link to={`/`}>Home</Link> </li>
        <li className='nav-item'> <Link to={`/gallery`}>Gallery</Link> </li>
        <li className='nav-item'> <Link to={`/about`}>About</Link> </li>

      </ul>

        : <ul className='navbar-nav me-auto mb-2 mb-lg-0'>

          <li className='nav-item'> <Link to={`/`}>Login</Link> </li>
          <li className='nav-item'> <Link to={`/signup`}>Signup</Link> </li>

        </ul>}


      {(isLogin) ?<Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
      :
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>}
    </div>
  );
}

export default App;
