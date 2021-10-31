import { textAlign } from "@mui/system";
import emailjs from "emailjs-com";
import React from 'react';
import backround1 from './icon/backround4.jpg'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('', '', e.target, '')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        toast.success('thank you for your Comment', {
            position: toast.POSITION.BOTTOM_CENTER
          })
    }

    return(
        <div style={{ backgroundImage: `url(${backround1})` }}>
        <div style={{marginTop:'-14px'}}
>
            <div className="contact-page" style={{fontFamily:'Snell Roundhand, cursive'}}>
            <h3 style={{marginLeft:'10px'}}>contact us</h3>
            <h5><LocalPhoneOutlinedIcon style={{marginLeft:'10px'}}/> tel: 055-5555-555</h5>
            <h5> <EmailOutlinedIcon style={{marginLeft:'10px'}}/> email: cmatan10@gmail.com</h5>
            <h5><BusinessOutlinedIcon style={{marginLeft:'10px'}}/> address: harzel 20, tel-aviv</h5>
        </div>
            <div className="w3-card-4" className="text_form" >
            <form onSubmit={sendEmail}>
                 <div class="w3-container">
                <h2>send us mail</h2>
                 </div>
                    <div className="w3-container" > 
                        <div>
                            <input type="text" className="w3-input w3-border w3-white w3-transparent" placeholder="Name" name="name"/>
                        </div>
                        <div>
                            <input type="email" className="w3-input w3-border w3-white" placeholder="Email Address" name="email"/>
                        </div>
                        <div>
                            <input type="text" className="w3-input w3-border w3-white" placeholder="Subject" name="subject"/>
                        </div>
                        <div>
                            <textarea className="w3-input w3-border w3-light" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div>
                            <input type="submit" className="w3-btn w3-green" value="Send Message"></input>
                        </div>
                    </div>
                </form>
                
            </div>
        </div>
        </div>
    )
}
