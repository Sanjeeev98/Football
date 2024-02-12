import React from 'react'
import './about.css';
import about2 from "./about2.jpg"
import logo from "./MFC LOGO.jpeg"
import { Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const About = () => {
  return (
    <>
    <div className="container-fluid maincon"  style={{  background: `url(${about2}) center/cover no-repeat`,}}>


<nav class="navbar navbar-expand-lg   san2 ">
  <div class="container san">

  <button class="navbar-toggler  btn btn-outline-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" style={{backgroundColor: 'rgba(194, 99, 55, 0.952)'}} >
      <span class="navbar-toggler-icon "></span>
    </button>

    <img src={logo} alt="Logo" class="rounded-pill navbar-brand img-fluid me-5 " style={{ width: "150px" }} />

    

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav d-flex  w-100">
        <li class="nav-item  mb-3 flex-fill ">
         <Link style={{ textDecoration: 'none' }}  className='text-white' to="/">HOME</Link>
        </li>
        <li class="nav-item   mb-3 flex-fill">
        <Link style={{ textDecoration: 'none' }}  className='text-white ' to="/about" > ABOUT</Link>
        </li>
        <li class="nav-item   mb-3 flex-fill">
        <Link style={{ textDecoration: 'none' }}  className='text-white ' to="/programs">PROGRAMS</Link>
        </li>
        {/* <li class="nav-item    mb-3 flex-fill">
        <Link style={{ textDecoration: 'none' }}  className='text-white'>STAFF</Link> 
        </li>
        <li class="nav-item   mb-3 flex-fill">
        <Link style={{ textDecoration: 'none' }}  className='text-white'>BLOG</Link>
        </li> */}
        <li class="nav-item  mb-3 flex-fill">
        <Link style={{ textDecoration: 'none' }}  className='text-white'>CONTACT US</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


<div className="container san san3 mt-5  " >
  <p> <br/>
    <span className="san4 "> About The Club</span><br/>
    </p>
</div>
</div>


<div className='container seventhcon text-center mt-5'>
  <h1 className='mt-3'>Creating the Total Footballer</h1>
  <p className='mt-5'>MOOVEDAR Football Club (MFC) aims to provide a professional player-focused approach. First-class player development is combined with the Dutch “total football” approach where each player is trained to move freely around the field, while still maintaining team structure. With European teaching methods, we are creating total football players who have the opportunity to excel individually and yet be part of a high-performing team. Whether you are just starting out or are a seasoned player, then BCFC is the place for you. </p>

  <h3 className='mt-5'>technique . tactics .fitness . nutition</h3>

  <p className='mt-5'>In order for our players to reach the next level, we believe that good nutrition and proper fitness are important.  Nutritional advice and help will be given to ensure that our players stay in top shape, physically and mentally. </p>
  <p>Cutting-edge fitness programs will be part of the weekly routine for strengthening and agility—all with the mindset of creating a total footballer.</p>
  <p>Besides focusing on technical skills for the field, we also strive to help our players learn the tactical side of football through field classes and seminars; both are necessary to become a total football player and to better understand the game.  </p>
  <p>At MFC we are committed to helping our players reach their top potential. With our approach to the beautiful game of football—and with connections inside India and around the globe—we are well-positioned to have our players take the next step and to assist them along their journey.</p>
</div>

<div className='container-fluid text-center about2 mt-5 p-5'>
<h1>Are You Ready For <br/> Total Football</h1>
<button type="button" className="btn  btn-lg btn1 mt-3">Join MOOVENDAR FC NOW</button>
</div>




<div className='container-fluid sixthcon text-center p-5 san'>
  <div className='row'>

<div className='col-lg-2 san'>
<img src={logo} alt="Logo" class="rounded-pill navbar-brand img-fluid " style={{ maxWidth: "150px" }} />

</div>

<div className='col-lg-6 align-self-center san'>
<h1>MOOVENDAR FOOTBALL CLUB</h1>
<p>(Affiliated by Tamilnadu Football Association)</p>
<p>58/A.Palanipuram 4th Street, BHAVANI - 638301. Eode District. </p>

</div>

<div className='col-lg-4 san align-self-center'>
<p> Phone : 04256 - 231153</p>
<p> Mobile : 98431 24255</p>
<p> Email : moovendarfc@gmail.com</p>

</div>

  </div>

</div>
</> )
}

export default About;