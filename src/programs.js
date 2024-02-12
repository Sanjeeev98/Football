import React from 'react'
import './programs.css';
import programsimg from "./programsimg.jpg"
import logo from "./MFC LOGO.jpeg"
import c1 from "./c1.jpg"
import c2 from "./c2.jpg"
import c3 from "./c3.jpg"
import c4 from "./c4.png"
import c5 from "./c5.png"
import c6 from "./c6.png"
import c7 from "./c7.png"
import { Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const Programs = () => {
  return (
    <>
     <div className="container-fluid maincon"  style={{  background: `url(${programsimg}) center/cover no-repeat`,}}>


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


<div className="container text-center  san san3 mt-5 " >
  <p > <span className='linear san4'><br/><br/>PROGRAMS</span> 
    </p>
</div>
</div>


<div className='container-fluid programscon mt-5'>
    <h1 className='text-center proh1'>Our Community Programmes</h1>
    <div className='row '>
      
      <div className='col-lg-4 mt-5'>
      <img src={c2} alt="Logo" class=" img-fluid "/>
      <h3 className='text-center proh3 mt-3'>Goalkeeper Centre</h3>
      <p className='prop mt-3'>Our Goalkeeper Centre is a great way to work on your individual skill development. Our team of qualified goalkeeper coaches have designed GK-specific sessions  to develop and enhance your goalkeeping technique and improve decision making. </p>
      </div>
      <div className='col-lg-4 mt-5'>
      <img src={c1} alt="Logo" class=" img-fluid " />
      <h3 className='text-center proh3 mt-3'>Skills Centre</h3>
      <p className='prop mt-3'>Our Skills Centre is a great way to fall in love with football while working on individual skills and development. Our qualified coaches have designed skill acquisition sessions based on a long-term curriculum to enhance individual technique and decision making in Junior players.</p>
      </div>

      <div className='col-lg-4 mt-5'>
      <img src={c3} alt="Logo" class=" img-fluid " />
      <h3 className='text-center proh3 mt-3'> Holiday Programme</h3>
      <p className='prop mt-3'>AUFC’s holiday programme is widely respected and recognised as a great activity for kids to partake in. The programme consists of fun activities and sessions for players to develop skills, play alongside others, and most importantly, have fun.</p>
     </div>
    </div>
</div>



<div className='container-fluid bgblack text-center p-5 mt-5'>
<div className='row'>
<div className='col-lg-3'>
<img src={c4} alt="Logo" class=" img-fluid img1" />
<h5 className='mt-3'>RESIDENTIAL ACADEMY <br/>
(Age Group: 6-13 years)
</h5>
</div>
<div className='col-lg-3'>
<img src={c5} alt="Logo" class=" img-fluid img1" />
<h5 className='mt-3'>NON-RESIDENTIAL
FACILITIES <br/>
(Age Group: 6-13 years)</h5>
</div>
<div className='col-lg-3'>
<img src={c6} alt="Logo" class=" img-fluid img1" />
<h5 className='mt-3'>NON-RESIDENTIAL <br/>(Age Group: 5-17 years)
</h5>
</div>
<div className='col-lg-3'>
<img src={c7} alt="Logo" class=" img-fluid img1" />
<h5 className='mt-3'>RESIDENTIAL <br/>(Age Group: 21 onwards)</h5>
</div>

</div>
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


    
    </>
  )
}

export default Programs;