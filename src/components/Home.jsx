import React from 'react';
import logo from "../components/images/title.jpg";
import "./Home.css";
import "./responsive.css";
import loc from "../components/images/google-maps.png";
import { Container } from 'react-bootstrap';
import time from "../components/images/time.png";
import Nav from 'react-bootstrap/Nav';
import facebook from "../components/images/facebook.png";
import instagram from "../components/images/instagram.png";
import youtube from "../components/images/youtube.png";
import twitter from "../components/images/twitter.png";
import kids from "../components/images/kids.jpg";
import python from "../components/images/python.png";
import pygame from "../components/images/pygame.png";
import websites from "../components/images/websites.png";
import house from "../components/images/house.png";
import contact from "../components/images/contact.png";
import settings from "../components/images/settings.png";

// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Home() {
  return (
    <div>
      {/* first container */}

      <div className="container-top">
        <Container>
          <div className="row pt-3">
            <div className="col-lg-6">
              <img src={logo} alt="" />
            </div>
            <div className="col-lg-3 pt-4">
              <ul className='location'>
                <li>
                  <img src={loc} alt="" />
                  <p className='mythri' >Mythri Buildings, Arangath Road,<br />Cochin- 18</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 pt-4">
              <ul className='location' >
                <li>
                  <img src={time} alt="" />
                  <p className='mythri' >Monday - Saturday 9:00AM - 6:00PM<br />Sunday CLOSED </p>


                </li>
              </ul>
            </div>
          </div>
        </Container>



        {/* sec container */}

        <div className="container-sec pt-3">
          <Container>
            <div className="maindiv ">
              <div className="row ">
                <div className="col-lg-6">
                  <Nav className='nav-item' >
                    <Nav.Link href="#" className='colors'>Home</Nav.Link>
                    <Nav.Link href="#" className='colors'>About</Nav.Link>
                    <Nav.Link href="#" className='colors'>Courses</Nav.Link>
                    <Nav.Link href="#" className='colors'>Contact</Nav.Link>
                    <div className="col-lg-6 logs" >
                      <div className='images'>
                        <Nav.Link href="#home"><img src={facebook} alt="" /></Nav.Link>
                        <Nav.Link href="#link"><img src={instagram} alt="" /></Nav.Link>
                        <Nav.Link href="#home"><img src={youtube} alt="" /></Nav.Link>
                        <Nav.Link href="#link"><img src={twitter} alt="" /></Nav.Link>
                      </div>
                    </div>
                  </Nav>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* third container */}

        <div className='container-third pt-4'>
          <Container>
            <div className='secdiv'>
              <div className='row'>
                <div className="col-lg-6">
                  <h6 className='home' >Home</h6>
                  <h1 className='size'>CamerinKids</h1>

                  <p className='styles'>EXPLORE YOUR KID'S LOGICAL SKILLS<br />
                    & LET THEM CREATE OUR DIGITAL INDIA<br />
                    LIVE ONLINE COMPUTER CODING CLASSES FOR KIDS<br />
                    FROM GRADE 4-12</p>
                </div>
              </div>
            </div>
          </Container>

        </div>
      </div>

      {/* fourth container */}

      <div className='container-four pt-7'>
        <Container>
          <div className="thirddiv">
            <div className="row">
              <div className="col-lg-4">
                <div className='block1'>
                  <span className='wrap-icon'>
                    <div className='icon'>
                      <center> <img src={house} alt="" className='imgstyle' /></center>
                    </div>
                  </span>
                  <h5 className='fblock' ><center> IMPROVES IQ & LOGICAL<br /> REASONING</center></h5>
                  <p className='fblockclr' ><center>Learning to code can improve problem-solving abilities and computational thinking skills and give them more career opportunities in the future. Computational thinking teaches you how to tackle large problems by breaking them down into a sequence of smaller, more manageable problems.</center></p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className='block2'>
                  <span className='wrap-icon'>
                    <div className='icon' style={{ backgroundColor: 'orange' }}>
                      <center> <img src={contact} alt="" className='sblock' /></center>
                    </div>
                  </span>
                  <h5 className='sblockclr'><center>BEST SKILL TO REFINE A CHILD'S <br />CREATIVITY</center></h5>
                  <p className='blockclr' ><center>The first aspect of creativity in code is solving puzzles with a limited set of instructions that a computer can understand at a given particular constraints. Research shows coding to be the best skill for enhancing creativity by ~90% more than others activities.</center></p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className='block3'>
                  <span className='wrap-icon'>
                    <div className='icon' style={{ backgroundColor: 'rgb(0, 128, 122)' }}>
                      <img src={settings} alt="" className='sblock' />
                    </div>
                  </span>
                  <center>  <h5 className='fblock' ><center>GIVE YOUR CHILD THE BEST<br /> MENTORS</center></h5>

                    <p className='tblock' ><center>Camerinkids online teachers are experienced computer software developers, designers, and educators who double as mentors make coding fun and engaging for kids. Teachers who love teaching teach children to love learning.</center></p>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </Container>

      </div>

      {/* fifth container */}

      <div className='container-four' style={{ backgroundColor: 'rgb(235, 235, 243)' }}>
        <Container >
          <div className="fourdiv">
            <div className="row" >
              <div className="col-lg-6">
                <img className='child' src={kids} alt="" />
              </div>
              <div className='col-lg-6'>
                <h6 className='home'>About Us</h6>
                <h4>Bring Fun Life To Your Kids</h4>
                <p className='kidsabout' >
                  Camerinkids is a user-friendly web-based learning platform that offers computer programming courses to the kids and lets them explore logical skills and create websites. Camerinkids offers self-paced online courses for children to learn coding at home. With the help of the Camerinkids, kids can easily conquer the basics of Game development,programming and creating websites.
                  CamerinKids provides everything needed to learn computer programming in a fun way. The uniqueness of Camerinkids stems from the fact because everyone should have the chance to learn the magic of programming. The courses are user-friendly and inbuilt so children can quickly get involved in them without needing an opening course or previous coding background.
                </p>
                <button className=" btn btn-warning btn-custom-1">More About Us</button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* sixth container */}

      <div className='container-five' style={{ backgroundColor: 'rgb(52, 181, 233)' }}>
        <Container>
          <div className="divfive pt-5">
            <div className="row pt-5">
              <h5 className='home' ><center>Courses You Like</center></h5>
              <h3 className='course'><center >Our Courses</center></h3>
              <div className="col-lg-4">
                <div className='python1'>
                  <center><img src={python} alt=""className='pythonn'  /></center>
                  <h6 className='pyth' ><center>Python</center></h6>
                  <p style={{ color: 'gray' }}><center>Jumpstart your kid's career & ensure future success by helping them master the BEST coding language! Start your child's journey to master Python. You will get a brief idea of what Python is and touch on the basics.</center></p>
                  <center> <button className='btn btn-danger red' >Learn More</button></center>
                </div>
              </div>
              <div className="col-lg-4">
                <div className='pygame1'>
                  <center><img src={pygame} alt=""className='pygam' /></center>
                  <h6 className='pygameclr' ><center>Pygame</center></h6>
                  <p style={{ color: 'gray' }}><center>Make something extraordinary with Camerinkids for kids. Get introduced to the amazing world of coding and create your own apps and games. This course will empower them to transform from a being dreamer to an inventor.</center></p>
                  <center><button className='btn btn-success pyg' >Learn More</button></center>
                </div>
              </div>
              <div className="col-lg-4">
                <div className='website1'>
                  <center><img src={websites} alt=""className='websites' /></center>
                  <h6 className='web' ><center>websites</center></h6>
                  <p style={{ color: 'gray' }}><center>Mastering programming to create your own Websites. You can select templates from the list and design with simple language and you can create your own website. This will Unleash their Potential with Real Coding Instructions.</center></p>
                  <center><button className='btn btn-warning orange' >Learn More</button></center>
                </div>
              </div>
            </div>
            <div className="col-lg-4 pt-4">
              <div className='website1'>
                <center><img src={pygame} alt=""className='websit'  /></center>
                <h6 className='last'><center>Basic Computer Skills</center></h6>
                <p style={{ color: 'gray' }}><center>You can get any computer basic solution from camerinkids. This basic computer skills course will provide you Operating System(Windows), Office suites(Microsoft Office, Microsoft Word,Microsoft Excel), Presentation Software(Power point), Spreadsheets(Excel, Google Spreadsheets).</center></p>
                <center><button className='btn btn-success green' >Learn More</button></center>
              </div>
            </div>
          </div>
        </Container>

        {/* seventh container */}

        <div className='container-six ' >
          <Container>
            <div className="divsix pb-5 ">
              <div className="row pt-5">
                <div className="col-lg-6 ">
                  <h2 style={{ color: 'white' }}><center>Bring Fun Life To Your Kids</center></h2>
                </div>
                <div className="col-lg-6">
                  <button className='btn btn-danger startbtn' >GET STARTED</button>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="container-seven">
          <Container>
            <div className="divseven">
              <div className="row">
                <div className="col-lg-4">
                  <h5 className='aboutsev'>About Us</h5>
                  <p className='camerin'>A sister concern of CAMERINFOLKS PVT. LTD</p>
                  <h5 className='aboutsev'>Social Media</h5>
                  <span className='social-media'>
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={youtube} alt="" />
                    <img src={twitter} alt="" />
                  </span>
                </div>
                <div className="col-lg-4">
                  <h5 className='navigate'>Navigation</h5><br />
                  <ul className='design'>
                    <li >Home</li><br />
                    <li>About Us</li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <h5 className='navigate'>Navigation</h5><br />
                  <ul className='design'>
                    <li >Courses</li><br />
                    <li>Contact Us</li>
                  </ul>
                </div>
                <div className='row pt-5'>
                  <div className='col-md-12'>
                    <div className='border-top'>
                      <p className='bottom'><center>©2023 All rights reserved by Camerinfolks Pvt. Ltd.  Designed by Camerinfolks Pvt. Ltd.</center></p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Container>
        </div>
      </div>



    </div>

  )
}

export default Home;