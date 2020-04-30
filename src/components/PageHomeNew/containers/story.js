import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../static/App.css';
import Banner from './banner.js';
import SignupBox from './signupbox.js'
import Header from './header.js'
import LandingTop from '../assets/landingtop.svg'
import LandingLeft from '../assets/landingleft.svg'
import FractalOutline from '../assets/fractaloutline.svg'
import CubeRender1 from '../assets/bluecube.png'
import CubeRender2 from '../assets/cubegif.gif'
import CubeRender3 from '../assets/closeup.png'
import CubeRender4 from '../assets/pricingchart.svg'
import CubeSection from './cubesection.js'
import {FaRegEnvelope} from 'react-icons/fa'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default class Story extends Component {
  constructor(props) {
    super(props)
    this.state = { width: 0, height: 0, modalShow: false }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false })
    if (this.state.width > 700 && this.state.modalShow) {
      modalClose()
    }
    return (
      <div className = 'About'>
{/*        {
        this.state.width > 700 
        ?
        <div style = {{width: '100%', backgroundColor: 'white', textAlign: 'left', padding: '5% 10%'}}>
          <CubeSection title = 'Our Vision' subtitle = 'Our Story'
                       text = {<div style = {{color: '#333333', fontSize: 20, lineHeight: 1.8, paddingLeft: 5}}>
                                 <p>Fractal envisions a world where all your devices—your phone, your laptop, your desktop—are connected
                                 to the same private cloud. In this world, your entire desktop is accessible from any device, eliminating 
                                 the need for file transfers and OS incompatibilities. Your phone is powerful enough to run the same applications
                                 as your computer. You never worry about losing your laptop or phone, because your entire desktop lives in the
                                 cloud, and replacing the hardware costs no more than your average dinner.</p>
                                 <p>
                                 The Cube is our first step towards this goal. With the right datacenters
                                 and 4G/5G infrastructure in place, we plan to expand our product line to laptops and phones.
                                 </p>
                                </div>}
                        daymode
          />
        </div>
        :
        <div style = {{width: '100%', backgroundColor: 'white', textAlign: 'left', padding: ' 8% 10%'}}>
          <CubeSection title = 'Our Vision' subtitle = 'Our Story'
                       text = {<div style = {{color: '#333333', fontSize: 20, lineHeight: 1.8, paddingLeft: 5}}>
                                 <p style = {{fontSize: 14}}>Fractal envisions a world where all your devices—your phone, your laptop, your desktop—are connected
                                 to the same private cloud. In this world, your entire desktop is accessible from any device, eliminating 
                                 the need for file transfers and OS incompatibilities. Your phone is powerful enough to run the same applications
                                 as your computer. You never worry about losing your laptop or phone, because your entire desktop lives in the
                                 cloud, and replacing the hardware costs no more than your average dinner.</p>
                                 <p style = {{fontSize: 14}}>
                                 The Cube is our first step towards this goal. With the right datacenters
                                 and 4G/5G infrastructure in place, we plan to expand our product line to laptops and phones.
                                 </p>
                                </div>}
                        daymode
          />
        </div>
        }*/}
        {
        this.state.width > 700 
        ?
        <div style = {{width: '100%', backgroundColor: 'white', textAlign: 'left', padding: '2% 10%', marginTop: 50}}>
          <CubeSection title = 'Who We Are' subtitle = 'Our Story'
                       text = {<div style = {{color: '#333333', fontSize: 20, lineHeight: 1.8, paddingLeft: 5}}>
                                 <p>Fractal was founded in the summer of 2019 by a team of computer scientists from Harvard University, who saw a way to build a next 
                                 generation of more affordable,  more elegant computers. </p>
                                 <p>
                                 Our office is located on the East Coast (United States), and we are currently gearing up for the launch of our private beta 
                                 for our first product, the Cube.
                                 </p>
                                </div>}
                        daymode
          />
        </div>
        :
        <div style = {{width: '100%', backgroundColor: 'white', textAlign: 'left', padding: ' 2% 10%', marginTop: 40}}>
          <CubeSection title = 'Who We Are' subtitle = 'Our Story'
                       text = {<div style = {{color: '#333333', fontSize: 20, lineHeight: 1.8, paddingLeft: 5}}>
                                 <p style = {{fontSize: 14}}>Fractal was founded in the summer of 2019 by a team of computer scientists from Harvard University, who saw a way to build a next 
                                 generation of more affordable,  more elegant computers. </p>
                                 <p style = {{fontSize: 14}}>
                                 Our office is located on the East Coast (United States), and we are currently gearing up for the launch of our private beta 
                                 for our first product, the Cube.
                                 </p>
                                </div>}
                        daymode
          />
        </div>
        }
        {
        this.state.width > 700 
        ?
        <div style = {{width: '100%', backgroundColor: 'white', textAlign: 'left', padding: '2% 10%', marginBottom: 50}}>
          <CubeSection title = 'Behind the Logo'
                       text = {<div style = {{color: '#333333', fontSize: 20, lineHeight: 1.8, paddingLeft: 5}}>
                                 <p>A fractal is a mathematical object with finite area but infinite perimeter. Following this line of thought, 
                                    we have designed Fractal devices to be small in physical size but vast in computational power.</p>
                                 <p>We often get questions about our logo, which is intentionally abstract⁠—after all, abstract art can be anything
                                 you imagine. When we launched Fractal, we envisioned a world where personal computing would not be tied to a specific 
                                 device or limited by local hardware; a world where you are empowered to imagine your own computing experience. 
                                 </p>
                                 <p>In our eyes, the logo represents a spherical water droplet. Water freezes into fractal-like patterns, and possesses simplicity that
                                 we strive to recreate in our products.
                                 </p>
                                </div>}
                        daymode
          />
        </div>
        :
        <div style = {{width: '100%', backgroundColor: 'white', textAlign: 'left', padding: ' 2% 10%', marginBottom: 50}}>
          <CubeSection title = 'Behind the Logo'
                       text = {<div style = {{color: '#333333', fontSize: 20, lineHeight: 1.8, paddingLeft: 5}}>
                                 <p style = {{fontSize: 14}}>A fractal is a mathematical object with finite area but infinite perimeter. Following this line of thought, 
                                    we have designed Fractal devices to be small in physical size but vast in computational power.</p>
                                 <p style = {{fontSize: 14}}>We often get questions about our logo, which is intentionally abstract⁠—after all, abstract art can be anything
                                 you imagine. When we launched Fractal, we envisioned a world where personal computing would not be tied to a specific 
                                 device or limited by local hardware; a world where you are empowered to imagine your own computing experience. 
                                 </p>
                                 <p style = {{fontSize: 14}}>In our eyes, the logo represents a spherical water droplet. Water freezes into fractal-like patterns, and possesses simplicity that
                                 we strive to recreate in our products.
                                 </p>
                                </div>}
                        daymode
          />
        </div>
        }
      </div>
    );
  }
}
