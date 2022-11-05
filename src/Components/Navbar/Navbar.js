import React from "react";
import "./Navbar.css";
import Resume from "../../Assets/Resume.pdf";

function Navbar() {
  const onButtonClick = () => {
    fetch(Resume).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Royston_FrontEnd_CV.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="container-navbar">
      <nav className="navbar">
        <label className="navbar-toggle" id="js-navbar-toggle" for="chkToggle">
          <i className="fa fa-bars"></i>
        </label>
        <a href="#home">
          <h1 className="logo">ROY</h1>
        </a>
        <input type="checkbox" id="chkToggle"></input>
        <ul className="main-nav" id="js-menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#aboutme">About Me</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
          <li>
            <button className="navbar-btn" onClick={onButtonClick}>
              Resume
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
