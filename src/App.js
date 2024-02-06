import React, { useState } from 'react';
import './App.css';
import pic from "./bg.jpg"
import logo from "./MFC LOGO.jpeg"
import bed from "./bed.webp"
import audi from "./audi1.jpg"
import can from "./canteen.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown , faAngleUp } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isCollapsed1, setIsCollapsed1] = useState(true);
  const [isCollapsed2, setIsCollapsed2] = useState(true);
  const [isCollapsed3, setIsCollapsed3] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleToggle1 = () => {
    setIsCollapsed1(!isCollapsed1);
  };

  const handleToggle2 = () => {
    setIsCollapsed2(!isCollapsed2);
  };

  const handleToggle3 = () => {
    setIsCollapsed3(!isCollapsed3);
  };


  return (<>
{/* <div class="container-fluid" style={{  background: `url(${pic}) center/cover no-repeat`, backgroundSize: 'cover',  height: '500px',  color: '#fff',textAlign: 'center',}}>
    <div  style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: "20px", borderRadius: '10px',}}>
        <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
</div> */}

<div className="container-fluid maincon"  style={{  background: `url(${pic}) center/cover no-repeat`,}}>


<nav class="navbar navbar-expand-lg   san2 ">
  <div class="container san">

  <button class="navbar-toggler  btn btn-outline-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" style={{backgroundColor: 'rgba(194, 99, 55, 0.952)'}} >
      <span class="navbar-toggler-icon "></span>
    </button>

    <img src={logo} alt="Logo" class="rounded-pill navbar-brand img-fluid me-5 " style={{ width: "150px" }} />

    

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav d-flex  w-100">
        <li class="nav-item  text-white  mb-3 flex-fill ">
         HOME
        </li>
        <li class="nav-item  text-white  mb-3 flex-fill">
         ABOUT
        </li>
        <li class="nav-item text-white   mb-3 flex-fill">
          PROGRAMS
        </li>
        <li class="nav-item  text-white  mb-3 flex-fill">
          STAFF
        </li>
        <li class="nav-item text-white   mb-3 flex-fill">
         BLOG
        </li>
        <li class="nav-item  text-white  mb-3 flex-fill">
          CONTACT US
        </li>
      </ul>
    </div>
  </div>
</nav>


<div className="container text-center  san san3 mt-5 button" >
  <p className="text-white">Be a Part of <br/>
    <span className="san4"> MOOVEDAR FOOTBALL CLUB</span><br/>
    </p>
    <button type="button" className="btn btn1">JOIN NOW</button>
</div>

</div>

<div className="container-fluid san text-center button1 p-5">
      <p className="para1 ">Our focus is on European-style player<br/>
development using the total football approach.</p>
<p className="para2">MOOVEDAR FC strives to help players reach the maximal potential in their lives and in the higher levels of football—nationally and <br/>internationally—using proven methods often seen in Spain, Germany, and Holland. With so many talented players in India, we want to do our <br/> part in giving players a platform to showcase their skills and to perform at the highest level possible. We are open to all! </p>

<button type="button" className="btn  btn-lg btn1 mt-4">LEARN MORE</button>
</div>

<div className="container-fluid secondcon p-5">
  <div className="row pb-5">
    <div className="col-lg-6 san align-self-center san6">
     <h3>Student Accomodation</h3>
     <p className="mt-3"> MOOVEDAR FC  provides all residential student-athletes with accommodation. Depending on the age group, we provide twin/ triple sharing accommodation for the youth. The hostel rooms are extremely open, well ventilated, and provide them space to freely move around.</p>
    </div>
    <div className="col-lg-6 san">
    <img src={bed} alt="Logo" class=" img-fluid " />
    </div>
  </div>

  <div className="row mt-5 pb-5">
    
    <div className="col-lg-6 san">
    <img src={audi} alt="Logo" class=" img-fluid " />
    </div>

    <div className="col-lg-6 san align-self-center mt-2 ">
     <h3>Student Welfare & Entertainment</h3>
     <p className="mt-3">All work and no play makes jack indeed a dull boy. All the athletes are also provided to play games beyond football. We encourage the kids to play multiple sports for better teamwork, including strategy games. We take them through the journeys of other sportspersons for an added dose of inspiration. The upcoming facility will have a basketball court, indoor badminton courts, rubberised running tracks, and a swimming pool to cool off. Student well-being is a state of the mind, and to cater to that, we will have mandatory sessions in yoga & meditation, fun sessions of strength & conditioning, and field trips.</p>
    </div>

  </div>

  <div className="row mt-5">
    <div className="col-lg-6 san align-self-center san6">
     <h3>Sports Nutrition</h3>
     <p className="mt-3">A very carefully customised breakfast, which is prescribed for every athlete by our in-house nutritionist, is then served to the athletes. All the meals are planned and curated to ensure the athlete gets all the protein and the right amount of carbs for a strong and well-built physique that suits the position of the athlete.</p>
    </div>
    <div className="col-lg-6 san">
    <img src={can} alt="Logo" class=" img-fluid " />
    </div>
  </div>


</div>



<div className="container-fluid thirdcon san">
  <h1 className="text-center mt-5 pb-4">Admission Process</h1>
  <div className="row mt-5">
    <div className="col-lg-3 p-4">
     <h3 > <span className="bg1 p-3 me-3 ">1.</span>Announcement</h3>
     <p className="mt-4">Our trial dates for the U13, U15, & U17 age categories will be announced on our website and social media. For more information on the trial dates, kindly check our web & social media.</p>
    </div>

    <div className="col-lg-3 p-4">
     <h3 > <span className="bg1 p-3 me-3 ">2.</span>Registration</h3>
     <p className="mt-4">Once you find the trial dates, kindly pay attention to the eligibility criteria. For the players matching the eligibility criteria, it is mandatory to register online. The players can also use the link below to register (link will be live only when the trial dates are announced). Note: Moovendar FC  do not charge any money from the players for the trials.</p>
    </div>

    <div className="col-lg-3 p-4">
     <h3 > <span className="bg1 p-3 me-3 ">3.</span>Trial day</h3>
     <p className="mt-4">Our team will check and verify your data for any discrepancies and will make a call to the eligible players for the trials. On the day of the trials, it is mandatory for the players to bring the proof of identity that has been mentioned.</p>
    </div>

    <div className="col-lg-3 p-4">
     <h3 > <span className="bg1 p-3 me-3 ">4.</span>Admission</h3>
     <p className="mt-4">The players will be analysed by our expert team and based on their performance, the shortlisted players will be offered the admission. The shortlisted players will get full scholarship (zero cost to the player).</p>
    </div>
  </div>

</div>




<div className="container-fluid fourthcon text-center p-4">
  <h1 className="text-center">Board Members</h1>
  <div className="row mt-5">

  <div className="col-lg-6">
<h3>Er.K.Kumaraguruparan <span>B.E.,M.I.E.,</span></h3>
<p>(President)</p>

</div>

<div className="col-lg-6">
<h3>A.Kannaiyan <span>B.Sc.,</span></h3>
<h3>M.Velayuthan<span>B.Com.,</span></h3>
<p>(Vice President)</p>

</div>
</div>



<div className="row mt-5">
<div className="col-lg-6">

<h3>K.L.Rajaelangovan<span>D.E.C.E.,</span></h3>
<p>(Secretary)</p>
</div>

<div className="col-lg-6">
<h3>A.Srinivasan<span>D.Pharm.,M.A.,M.Phil</span></h3>
<p>(Treasurer)</p>

</div>
</div>

  </div>



<div className="container fifthcon p-5">
<h1 className='text-center'>Frequently Asked Questions</h1>
<p className='text-center mt-3'>To assist you in finding out about Moovendar FC some of the commonly <br/> asked questions are shown below. If the information you need is not <br/> available then please contact us to find out more</p>

<div className="row border border-dark border-start-0 border-end-0 d-flex mt-5 p-4">

  <div className="col-lg-10">
    <h4>How can a student athlete join the academy?</h4>
  </div>

  <div className="col-lg-2 d-flex justify-content-end">
    <FontAwesomeIcon data-bs-toggle="collapse" data-bs-target="#demo" className="font" icon={isCollapsed ? faAngleDown : faAngleUp} onClick={handleToggle} />
  </div>

  <div id="demo" className="collapse col-lg-12">
    <p>    An athlete can join Moovendar FC by attending a trial with us. Based on his performance, we will let you know if he has been selected. Please follow us on Instagram, Facebook, and Twitter for more announcements for trials, or Enroll for the program</p>
  </div>

</div>


<div className="row border border-dark border-start-0 border-top-0 border-end-0 d-flex  p-4">

  <div className="col-lg-10">
    <h4>When does the Full-Time course commence?</h4>
  </div>

  <div className="col-lg-2 d-flex justify-content-end">
    <FontAwesomeIcon data-bs-toggle="collapse" data-bs-target="#demo1" className="font" icon={isCollapsed1 ? faAngleDown : faAngleUp} onClick={handleToggle1} />
  </div>

  <div id="demo1" className="collapse col-lg-12">
    <p>   The full time course is temporarily suspended due to COVID-19. Once the Govt is supportive of full time programs, we will commence the Elite full time programs. Watch this space for more. In the meanwhile you can also follow our social handles for regular updates.</p>
  </div>

</div>


<div className="row border border-dark border-start-0 border-top-0 border-end-0 d-flex p-4">

  <div className="col-lg-10">
    <h4>At the end of the course am I guaranteed to be offered a contact at a professional club?</h4>
  </div>

  <div className="col-lg-2 d-flex justify-content-end">
    <FontAwesomeIcon data-bs-toggle="collapse" data-bs-target="#demo2" className="font" icon={isCollapsed2 ? faAngleDown : faAngleUp} onClick={handleToggle2} />
  </div>

  <div id="demo2" className="collapse col-lg-12">
    <p>   Unfortunately, the Academy cannot guarantee that a player will find a club, as all clubs are seeking different types of players at different times and we all know how difficult it can be. However, we have had success stories in the past, as students have signed a professional contract with various other academies like FC Bengaluru, etc upon his graduation from the Academy.</p>
  </div>

</div>


<div className="row border border-dark border-start-0 border-end-0 border-top-0 d-flex p-4">

  <div className="col-lg-10">
    <h4>What kind of education programs are offered at the Academy?</h4>
  </div>

  <div className="col-lg-2 d-flex justify-content-end">
    <FontAwesomeIcon data-bs-toggle="collapse" data-bs-target="#demo3" className="font" icon={isCollapsed3 ? faAngleDown : faAngleUp} onClick={handleToggle3} />
  </div>

  <div id="demo3" className="collapse col-lg-12">
    <p>   We offer Holistic education to the boys from the Elite Program (Residential).</p>
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
  );
}

export default App;
