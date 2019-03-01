import React, { Component } from 'react';
import pic2 from '../pic2.png';
import pic6 from '../pic6.png';
import pic8 from '../pic8.jpg';
import pic10 from '../pic10.png';
import b from '../b.png'

import './Landing.css';
// import Nav from '../Nav'
import { Link } from 'react-router-dom';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';

class Landing extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                <span className='logo'>
                <img className='b' src= {b} alt='b'/>
                <h1>Bardia</h1>
                <h2>Photography</h2>
                </span>
                 <div className='container'>
                
                    <ul>
                <li><Link to='/' className='Link'>Home</Link></li>
                
                <li><Link to='/about' className='Link'>About Me</Link></li>

                
                <li><Link to='/portfolio' className='Link'>Portfolio</Link></li>
                
                <li><Link to='/contact' className='Link'>Contact</Link></li>
                </ul>
                
                </div>


                <div id="slider">
                    <figure>
                        <img src={pic2} alt="picture2" />
                        <img src={pic6} alt="picture6" />
                        <img src={pic8} alt="picture8" />
                        <img src={pic10} alt="picture10" />
                    </figure>
                </div>


            </div>
        )
    }
}

export default Landing;