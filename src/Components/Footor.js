import React from 'react'
import './Footer.css'
import emailjs from 'emailjs-com'


const Footor = () => {


   function onsubmitbtn(e){
    e.preventDefault();
    

    emailjs.sendForm('service_psvhjjj','template_tou6d4n',e.target,'EXTZhpP-U1OHZkaRS')
    .then(
      (result) => {
        console.log(result.text);
        console.log("message sent");
      },
      (error) => {
        console.log(error.text);
      }
    );
    let frm = document.getElementsByName('contactform')[0];
    frm.reset();
    alert('Message Sent')
   
   }


  return (
    <div id='contact' className='footer-container'>
      <h1 className='footer-heading'>Contact</h1>
      
              


    
    <div className='contact-section'>
    <form className="contact-form" name='contactform' onSubmit={onsubmitbtn}>
        <input type="text" name="user-name"  placeholder="name" required />
        <input type="text" name="user-email" placeholder="email"  required />
        <textarea name="textarea" id="msg" placeholder="message" required ></textarea>
        <button type="submit" className="form-submit-btn" value="Send">Submit</button>
    </form>

    <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.6600781289!2d77.35073506712513!3d12.954517009520098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1667489282461!5m2!1sen!2sin" title='map'></iframe>
    </div>
    </div>
    
          <div><h3 className='footer-end'>Made With<span className='heart'> &#10084; </span>

by Royston Louis</h3></div>
    </div>

    
  )
}

export default Footor

