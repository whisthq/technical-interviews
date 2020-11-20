import React, { Component } from 'react'
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { storeGroceryItem } from '../../actions/index.js'
import '../../static/App.css';


class PageHome extends Component {
  constructor(props) {
    super(props)
    this.state = { width: 0, height: 0, modalShow: false, showPopup: false, currentGroceryItem: ''}
  }

  componentDidMount() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false })
    if (this.state.width > 700 && this.state.modalShow) {
      modalClose()
    }
    return (
      <Container style = {{paddingTop: 50}}>
        <div style = {{textAlign: 'center', fontSize: 40, fontWeight: 'bold'}}>
          YOUR CODE HERE
        </div>
        <div style = {{marginTop: 15, textAlign: 'center'}}>
          Good luck and have fun!
        </div>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return { 
    groceryItems: state.CartReducer.groceryItems
  }
}

export default connect(mapStateToProps)(PageHome)