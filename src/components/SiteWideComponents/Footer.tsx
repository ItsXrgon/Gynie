import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import './Footer.css'


function Footer() {

    const form = useRef()

    const sendEmail = (e: { preventDefault: () => void; target: { reset: () => void; }; }) => {
        e.preventDefault();
    
        /*emailjs.sendForm('service_28cha4a', 'template_1dn9gjf', form.current, 'KqG_v3BAXHA05QPNU')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()*/
      };

  return (
    <div className='footer-container'>
        <section className='footer-suggestion'>
            <p className='footer-suggestion-heading'>
                Gynie
            </p>
            <p className='footer-suggestion-text'>
                Suggest an addition or improvment
            </p>
            <div className='input-areas'>
                <form className='suggestion-form'>
                    <input type='text'
                    name='suggestion'
                    placeholder='Your Suggestion'
                    className='footer-input'
                    required/>
                    <button className='suggestion-submit' onClick={() => sendEmail}>Submit</button>
                </form>
            </div>
        </section>
        {/* <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>
                        
                    </h2>
                    <Link to='/'>

                    </Link>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default Footer