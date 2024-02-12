import React from "react"
import "./contactus.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./MFC LOGO.jpeg"
import { Link} from 'react-router-dom';
import ss from "./Screenshot (9).png"

import alex from "./alex.jpg"

function Contactus() {

    const address = 'Palanipuram 4th Street, BHAVANI';
  const encodedAddress = encodeURIComponent(address);


    return(
    <>


<div className="container-fluid maincon"  style={{  background: `url(${alex}) center/cover no-repeat`,}}>


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
        <Link style={{ textDecoration: 'none' }}  className='text-white' to="/programs">PROGRAMS</Link>
        </li>
        {/* <li class="nav-item    mb-3 flex-fill">
        <Link style={{ textDecoration: 'none' }}  className='text-white'>STAFF</Link> 
        </li>
        <li class="nav-item   mb-3 flex-fill">
        <Link style={{ textDecoration: 'none' }}  className='text-white'>BLOG</Link>
        </li> */}
        <li class="nav-item  mb-3 flex-fill">
        <Link style={{ textDecoration: 'none' }}  className='text-white' to="/contactus">CONTACT US</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>



<div className="container  mt-5">
  <h1 className="text-center conh1">Contact us</h1>

  <div className="row">
    <div className="col-lg-3">

    </div>

    <div className="col-lg-6 input1 p-3 mt-3">
    <form >
    <div className="form-group mt-3 mb-3">
      <label className="form-label" htmlFor="name">Name:</label>
      <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" />
    </div>
    <div className="form-group mb-3">
      <label className="form-label" htmlFor="email">Email:</label>
      <input type="text" className="form-control" id="email" name="email" placeholder="Enter Email" />
    </div>
    <div className="form-group mb-3">
      <label className="form-label" htmlFor="subject">Subject:</label>
      <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter Subject" />
    </div>
    <div className="form-group mb-3">
      <label className="form-label" htmlFor="phone">Phone:</label>
      <input type="text" className="form-control" id="phone" name="phone" placeholder="Enter Phone" />
    </div>
    <div className="form-group mb-3">
      <label className="form-label" htmlFor="comments">Comments:</label>
      <textarea className="form-control" id="comments" name="comments" rows="4" placeholder="Enter your comments"></textarea>
    </div>
    <button type="submit" className="btn btn-primary ">Send</button>
  </form>

    </div>

    <div className="col-lg-3">

    </div>
  </div>
  
  </div>


<div className="container mt-5 map">
<a
      href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={ss} alt="Logo" className="img-fluid" />
    </a>
</div>


<div className='container-fluid sixthcon text-center p-5 san mt-5'>
  <div className='row'>

<div className='col-lg-2 san'>
<img src={logo} alt="Logo" class="rounded-pill navbar-brand img-fluid " style={{ maxWidth: "150px" }} />

</div>

<div className='col-lg-6 align-self-center san '>
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




    </>)
     
}
 export default Contactus;