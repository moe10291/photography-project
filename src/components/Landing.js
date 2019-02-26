import React, { Component } from 'react';
import pic2 from '../pic2.png';
import pic6 from '../pic6.png';
import pic8 from '../pic8.jpg';
import pic10 from '../pic10.png';
import './Landing.css';
// import Nav from '../Nav'
import {Link} from 'react-router-dom';

class Landing extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
<h1>Hello World</h1>
<Link to='/'>Home</Link>
<br></br>
<Link to='/about'>About Me</Link>

<br></br>
<Link to='/portfolio'>Portfolio</Link>
<br></br>
<Link to='/contact'>Contact</Link>


<div id="slider">
<figure>
    <img src={pic2} alt="picture2"/>
    <img src={pic6} alt="picture6"/>
    <img src={pic8} alt="picture8"/>
    <img src={pic10} alt="picture10"/>
</figure>
</div>

            </div>
        )
    }
}

export default Landing;