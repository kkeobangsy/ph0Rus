import React from 'react';
import '../App.css';
import 'reactjs-popup/dist/index.css';
import farm from '../pic/farm.jpg';
import pho from '../pic/pho1.jpg';
import sam from '../pic/sam.jpg';
import spring from '../pic/spring.jpg';




const About = () => {
    return (
            <body>
            <div className='main'>
                <div className='pic1'>
                    <img src={farm} className='img1' />
                </div>
                <div className='pic2'>
                    <img src={sam} className='img2' />
                </div>
                <div className='name'>
                    <p className='name1'>Ph0RUs</p>
                </div>
                <div className='pic3'>
                    <img src={pho} className='img3' />
                </div>
                <div className='pic4'>
                    <img src={spring} className='img4' />
                </div>

            </div>
            </body>
    )
}



export default About;