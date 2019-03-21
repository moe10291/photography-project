import React, { Component } from 'react';
import pic2 from '../pic2.png';
import pic6 from '../pic6.png';
import pic8 from '../pic8.jpg';
import pic10 from '../pic10.png';
import pho8 from '../pic-8.png';
import pho6 from '../pic-6.png'
import photo from '../abc.jpg'
import b from '../b.png'
import baby from '../baby.jpg'
import bw from '../bw.jpg'
import bw2 from '../bw2.jpg'
import bw3 from '../bw3.jpg'
import small1 from '../small7.jpg'
import small2 from '../small2.jpg'
import small3 from '../small3.jpg'
import small4 from '../pic4.png';
import small5 from '../pic3.png';
import small6 from '../small6.jpg';
import small10 from '../small10.png';
import small11 from '../small11.jpg';

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
                <div className='navbar'>
                    <span className='logo'>
                        <img className='b' src={b} alt='b' />
                        <h1>ardia</h1>
                        <h1 className='second'>Photography</h1>
                    </span>
                    <div className='container'>

                        <ul className='menu'>
                            <li><Link to='/' className='Link'>Home</Link></li>

                            <li><Link to='/about' className='Link'>About Me</Link></li>


                            <li><Link to='/portfolio' className='Link'>Portfolio</Link></li>

                            <li><Link to='/contact' className='Link'>Contact</Link></li>
                        </ul>

                    </div>
                </div>


                <div id="slider">
                    <figure>
                        <img src={pic2} alt="picture2" />
                        <img src={pho6} alt="picture6" />
                        <img src={pho8} alt="picture8" />
                        <img src={pic10} alt="picture10" />
                    </figure>
                </div>

                <div className='aboutme'>
                    <img className='bardi' src={photo} alt='aboutme' />
                    <h1></h1>
                    <p className='text'>
                        <h2 className='Hello'>HELLO WORLD</h2>
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company.Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
                </p>

                </div>

                <div className='wrapper'>
                <div className="box one">
                <img className='pic1' src={bw} alt='baby'/>
                </div>
                <div className="box two">
                <img className='pic2' src={bw2} alt='baby'/>
                </div>
                
                <div className="box three">
                <img className='pic3' src={bw3} alt='baby'/>
                </div>
                <div className="box four">
                <img className='pic4' src={small1} alt='baby'/>
                </div>
                <div className="box five">
                <img className='pic5' src={small2} alt='baby'/>
                </div>
                <div className="box six">
                <img className='pic6' src={small3} alt='baby'/>
                </div>
                <div className="box seven">
                <img className='pic7' src={small4} alt='baby'/>
                </div>
                <div className="box eight">
                <img className='pic8' src={small5} alt='baby'/>
                </div>
                <div className="box nine">
                <img className='pic9' src={small6} alt='baby'/>
                </div>
                <div className="box ten">
                <img className='pic10' src={small10} alt='baby'/>
                </div>
                <div className="box eleven">
                <img className='pic11' src={small11} alt='baby'/>
                </div>
                
                {/* <div className="box six">6</div> */}
                
                </div>
                
           
            </div>
        )
    }
}

export default Landing;
