import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>    <div>

      {/* --------------Home---------------*/}


      <div id="home" className="home-container">
        <div class="title-inner">
          
          <div>
            <h2>Hi, I am Royston</h2>
          </div>
          <br></br>
          <div>Connect with Me</div>
         

          <div className="contact-img-container">

            <div>
              <a href="mailto:roylouis17@gmail.com">
                <img
                  src={require("../../Assets/Icons1/gmail.png")}
                  className="contact-img"
                  alt=""
                ></img>
              </a>
            </div>
            <div>
              <a href="https://github.com/Roylouis123">
                <img
                  src={require("../../Assets/Icons1/github.png")}
                  className="contact-img"
                  alt=""
                ></img>
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/royston-louis-5454881b4/">
                <img
                  src={require("../../Assets/Icons1/linkedin.png")}
                  className="contact-img"
                  alt=""
                ></img>
              </a>
            </div>
            <div>
              <a href="https://wa.me/9535941283">
                <img
                  src={require("../../Assets/Icons1/whatsapp.png")}
                  className="contact-img"
                  alt=""
                ></img>
              </a>
           
            </div>
            <div>
              <a href="https://t.me/Roylouis">
                <img
                  src={require("../../Assets/Icons1/telegram.png")}
                  className="contact-img"
                  alt=""
                ></img>
              </a>
           
            </div>

          </div>
        </div>

        <div className="imgcontainer">
          <img
            className="Imgdisplay"
            src={require("../../Assets/Images/Hello.png")}
            alt=""
          ></img>
        </div>
      </div>


{/* --------------About me---------------*/}


      <div id="aboutme" className="aboutme">
        <h1 className="aboutme-heading">About Me</h1>
        <div class="timeline at-timeline">
          <div className="vline">
            <div class="timeline ">
              <h1 class="heading">
                <span className="aboutme-sub-heading">
                &emsp;Experience
                     <span className='education-gap'>Education</span>
                </span>
              </h1>

              <div class="aboutme-card ">
                <div class="card-body ">
                  <h1 class="card-title">2016-2020</h1>
                  <p class="card-detail"> AITM</p>
                  <br></br>
                  <p class="card-detail">Bachelor of Engineering</p>
                </div>
              </div>
              <div class="aboutme-card">
                <div class="card-body">
                  <h1 class="card-title">2021-2022</h1>
                  <p class="card-detail"> CYIENT</p>
                  <br></br>
                  <p class="card-detail"> Technical Developer</p>
                </div>
              </div>
              <div class="aboutme-card">
                <div class="card-body">
                  <h1 class="card-title">2016</h1>
                  <p class="card-detail">PUC</p>
                  <br></br>
                  <p class="card-detail">PCM,Computer science</p>
                </div>
              </div>
              <div class="aboutme-card">
                <div class="card-body">
                  <h1 class="card-title">2018-2020</h1>
                  <p class="card-detail"> Freelancer</p>
                  <br></br>
                  <p class="card-detail"> Web Developer</p>
                </div>
              </div>
              <div class="aboutme-card">
                <div class="card-body">
                  <h1 class="card-title">2014</h1>
                  <p class="card-detail">SSLC</p>
                  <br></br>
                  <p class="card-detail">General</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    {/* --------------skills---------------*/}



       <div id='skills' className="skills">
        <h1 className="skills-heading">Skills</h1>

        <div className="cards1">
          <div className="card">
            <img
              className="skills-img"
              src={require("../../Assets/Icons2/react.png")}
              alt=""
            ></img>
            <p className="skill-img-heading">React</p>
          </div>

          <div className="card">
            <img
              className="skills-img"
              src={require("../../Assets/Icons2/javascript.png")}
              alt=""
            ></img>
            <p className="skill-img-heading">JavaScript</p>
          </div>

          <div className="card">
            <img
              className="skills-img"
              src={require("../../Assets/Icons2/python.png")}
              alt=""
            ></img>
            <p className="skill-img-heading">Python</p>
          </div>

          <div className="card">
            <img
              className="skills-img"
              src={require("../../Assets/Icons2/bootstrap.png")}
              alt=""
            ></img>
            <p className="skill-img-heading">Bootstrap</p>
          </div>

          <div className="card">
            <img
              className="skills-img"
              src={require("../../Assets/Icons2/github.png")}
              alt=""
            ></img>
            <p className="skill-img-heading">Github</p>
          </div>
          <div className="card">
            <img
              className="skills-img"
              src={require("../../Assets/Icons2/html.png")}
              alt=""
            ></img>
            <p className="skill-img-heading">HTML</p>
          </div>
          <div className="card">
            <img
              className="skills-img"
              src={require("../../Assets/Icons2/css3.png")}
              alt=""
            ></img>
            <p className="skill-img-heading">CSS</p>
          </div>
          <div className="card">
            <img
              className="skills-img"
              src={require("../../Assets/Icons2/office.png")}
              alt=""
            ></img>
            <p className="skill-img-heading">MS-Office</p>
          </div>
        </div>
      </div>



   <div id="project" className="project">
        <h1 className="skills-heading">Project</h1>

        <div className="cardsboy">
          <div className="cardboy">
            <img
              className="project-img"
              src={require("../../Assets/Images/imbd.png")}
              alt=""
            ></img>

          </div>

          <div className="cardboy">
            <img
              className="project-img"
              src={require("../../Assets/Images/hackernews.png")}
              alt=""
            ></img>
          </div>

          <div className="cardboy">
            <img
              className="project-img"
              src={require("../../Assets/Images/corona.png")}
              alt=""
            ></img>
          </div>
          <div className="cardboy">
            <img
              className="project-img"
              src={require("../../Assets/Images/event.png")}
              alt=""
            ></img>
          </div>
          <div className="cardboy">
            <img
              className="project-img"
              src={require("../../Assets/Images/countries.png")}
              alt=""
            ></img>
          </div>
          <div className="cardboy">
            <img
              className="project-img"
              src={require("../../Assets/Images/nature.png")}
              alt=""
            ></img>
          </div>
        </div>
        
      </div>

     
    

 
    </div>
    
   
    </>
  );
};

export default Home;
