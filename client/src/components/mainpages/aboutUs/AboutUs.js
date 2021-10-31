import React from 'react'
import node from './icon/nodeexpress.png'
import reactlogo from './icon/logo192.png'
import mongo from './icon/mongopic.jpg'
import mui from './icon/mui.png'
import htm from './icon/html5.png'
import Zoom from 'react-reveal/Zoom'
import emailjs from './icon/emailjs.png'

function AboutUs() {
    return (
        <Zoom>
        <div >
            <br></br>
            <h1 className="history-page" style={{textAlign:'center'}}>about us</h1>
            <br></br>
            <h4 className="history-page" style={{textAlign:'center'}}>This project was built using the following technologies:</h4>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img src={node} style={{width:'16%',marginLeft:'7%'}} />
            <img src={htm} style={{width:'25%',marginLeft:'15%'}} />
            <img src={reactlogo}style={{width:'10%',marginLeft:'15%'}}/>
            <img src={mui} style={{width:'12%', marginLeft:'9%',marginTop:'5%'}} />
            <img src={emailjs} style={{width:'30%',marginLeft:'15%',marginTop:'5%'}}/>
            <img src={mongo} style={{width:'18%',marginLeft:'8%',marginTop:'5%'}}/>
            
        </div>
        </Zoom>
    )
}

export default AboutUs
