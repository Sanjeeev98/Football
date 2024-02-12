import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Programs from './programs';
import Contactus from './Contactus';


function App() {



  return (<>
{/* <div class="container-fluid" style={{  background: `url(${pic}) center/cover no-repeat`, backgroundSize: 'cover',  height: '500px',  color: '#fff',textAlign: 'center',}}>
    <div  style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: "20px", borderRadius: '10px',}}>
        <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
</div> */}


<Router>

<Routes>
<Route  path='/' element={<Home/>}></Route>
<Route  path="/about" element={<About/>} ></Route>
<Route  path="/programs" element={<Programs/>} ></Route>
<Route  path="/contactus" element={<Contactus/>} ></Route>
</Routes>

</Router>
    </>
  );
}

export default App;
