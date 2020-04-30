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
        {
        this.state.width > 700 
        ?
        <div style = {{width: '100%', backgroundColor: 'white', textAlign: 'left', padding: '4% 10%'}}>
          <CubeSection subtitle = 'How it works'
                       title = 'What is the Cube?'
                       text = {<div style = {{color: '#333333', fontSize: 20, lineHeight: 1.8, paddingLeft: 5}}>
                                 <p>The Cube is a cloud-powered desktop computer. This means that the Cube is a device that connects you seamlessly to a virtual computer, 
                                 living in one our remote datacenters. When you use the Cube, you'll notice no difference between the Cube and your old computer; under the hood, however,
                                 the Cube performs its computation in the cloud, and streams your Windows 10 desktop to whatever display you connect your Cube to.</p>
                                 <p>No data is stored on the Cube. Instead, all your data is stored in your own, protected solid state drive, located in our datacenters. 
                                 Any Cube is capable of connecting your personal virtual machine; in this way, any Cube can be your Cube.
                                 </p>
                                </div>}
                        daymode
          />
        </div>
        :
        <div style = {{width: '100%', backgroundColor: 'white', textAlign: 'left', padding: ' 8% 10%'}}>
          <CubeSection subtitle = 'How it works'
                       title = 'What is the Cube?'
                       text = {<div style = {{color: '#333333', fontSize: 20, lineHeight: 1.8, paddingLeft: 5}}>
                                 <p style = {{fontSize: 14}}>The Cube is a cloud-powered desktop computer. This means that the Cube is a device that connects you seamlessly to a virtual computer, 
                                 living in one our remote datacenters. When you use the Cube, you'll notice no difference between the Cube and your old computer; under the hood, however,
                                 the Cube performs its computation in the cloud, and streams your Windows 10 desktop to whatever display you connect your Cube to.</p>
                                 <p style = {{fontSize: 14}}>No data is stored on the Cube. Instead, all your data is stored in your own, protected solid state drive, located in our datacenters. 
                                 Any Cube is capable of connecting your personal virtual machine; in this way, any Cube can be your Cube.
                                 </p></div>}
                        daymode
          />
        </div>
        }
        {
        this.state.width > 700 
        ?
        <div style = {{width: '100%', backgroundColor: 'white', textAlign: 'left', padding: '4% 10%'}}>
          <CubeSection title = 'What makes the Cube so great?'
                       text = {<div style = {{color: '#333333', fontSize: 20, lineHeight: 1.8, paddingLeft: 5}}>
                                 <p>Because of the way that our datacenters are designed, the Cube is significantly less
                                 expensive than a traditional computer. Since the Cube's hardware lives in the cloud, you'll never 
                                 lose access to your Windows desktop, even if you are away from your computer. While your computer's 
                                 hardware wears down over time, our datacenters are constantly maintained, ensuring that you always have
                                 access to the best performance. Finally, the Cube is easily upgradeable. Whereas upgrading a normal computer
                                 requires buying new parts (or even a new computer), upgrading the Cube is as easy as clicking a button.</p>
                                </div>}
                        daymode
          />
        </div>
        :
        <div style = {{width: '100%', backgroundColor: 'white', textAlign: 'left', padding: ' 8% 10%'}}>
          <CubeSection title = 'What makes the Cube so great?'
                       text = {<div style = {{color: '#333333', fontSize: 20, lineHeight: 1.8, paddingLeft: 5}}>
                                 <p style = {{fontSize: 14}}>Because of the way that our datacenters are designed, the Cube is significantly less
                                 expensive than a traditional computer. Since the Cube's hardware lives in the cloud, you'll never 
                                 lose access to your Windows desktop, even if you are away from your computer. While your computer's 
                                 hardware wears down over time, our datacenters are constantly maintained, ensuring that you always have
                                 access to the best performance. Finally, the Cube is easily upgradeable. Whereas upgrading a normal computer
                                 requires buying new parts (or even a new computer), upgrading the Cube is as easy as clicking a button.</p>
                                </div>}
                        daymode
          />
        </div>
        }
        {
        this.state.width > 700 
        ?
        <div style = {{width: '100%', backgroundColor: 'white', textAlign: 'left', padding: '4% 10%'}}>
          <CubeSection title = 'Who is the Cube for?'
                       text = {<div style = {{color: '#333333', fontSize: 20, lineHeight: 1.8, paddingLeft: 5}}>
                                <p>
                                The Cube is designed for consumers and small businesses.
                                </p>
                                <p>
                                Every year, small businesses spend $170B purchasing and maintaining computer hardware. At the same time, 27%
                                of these businesses do not have IT support, which means that they cannot take advantage of remote access
                                software. The Cube allows small businesses to save significant amounts of money on hardware while enabling
                                remote access for their employees.
                                </p>
                                <p>
                                Similarly, consumers who buy desktops care primarily about two features: cost and performance. The Cube offers
                                to them more flexible performance at a fraction of the price.
                                </p>
                                </div>}
                        daymode
          />
        </div>
        :
        <div style = {{width: '100%', backgroundColor: 'white', textAlign: 'left', padding: '4% 10%'}}>
          <CubeSection title = 'Who is the Cube for?'
                       text = {<div style = {{color: '#333333', fontSize: 20, lineHeight: 1.8, paddingLeft: 5}}>
                                <p style = {{fontSize: 14}}>
                                The Cube is designed for consumers and small businesses.
                                </p>
                                <p style = {{fontSize: 14}}>
                                Every year, small businesses spend $170B purchasing and maintaining computer hardware. At the same time, 27%
                                of these businesses do not have IT support, which means that they cannot take advantage of remote access
                                software. The Cube allows small businesses to save significant amounts of money on hardware while enabling
                                remote access for their employees.
                                </p>
                                <p style = {{fontSize: 14}}>
                                Similarly, consumers who buy desktops care primarily about two features: cost and performance. The Cube offers
                                to them more flexible performance at a fraction of the price.
                                </p>
                                </div>}
                        daymode
          />
        </div>
        }
        {
        this.state.width > 700 
        ?
        <div style = {{width: '100%', backgroundColor: 'white', textAlign: 'left', padding: '4% 10%'}}>
          <CubeSection title = 'Is it secure?'
                       text = {<div style = {{color: '#333333', fontSize: 20, lineHeight: 1.8, paddingLeft: 5}}>
                                <p>
                                Yes, even more so than your normal computer. Since all your data lives in the cloud, you don’t have to worry about 
                                losing of breaking your Cube.
                                </p>
                                <p>
                                All communication between your Cube and the cloud is fully encrypted and all Fractal instances are 
                                isolated through a technique called virtual private cloud (VPC). In short, a VPC ensures that 
                                each Fractal instance is fully isolated, meaning no one else than you can access your 
                                instance and no other instance can communicate with your instance.
                                </p>
                                <p>
                                Although we do store your storage disks in our cloud, the VPC ensures that Fractal cannot access your data.
                                </p>
                                </div>}
                        daymode
          />
        </div>
        :
        <div style = {{width: '100%', backgroundColor: 'white', textAlign: 'left', padding: ' 8% 10%'}}>
          <CubeSection title = 'Is it secure?'
                       text = {<div style = {{color: '#333333', fontSize: 20, lineHeight: 1.8, paddingLeft: 5}}>
                                <p style = {{fontSize: 14}}>
                                Yes, even more so than your normal computer. Since all your data lives in the cloud, you don’t have to worry about 
                                losing of breaking your Cube.
                                </p>
                                <p style = {{fontSize: 14}}>
                                All communication between your Cube and the cloud is fully encrypted and all Fractal instances are 
                                isolated through a technique called virtual private cloud (VPC). In short, a VPC ensures that 
                                each Fractal instance is fully isolated, meaning no one else than you can access your 
                                instance and no other instance can communicate with your instance.
                                </p>
                                <p style = {{fontSize: 14}}>
                                Although we do store your storage disks in our cloud, the VPC ensures that Fractal cannot access your data.
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
