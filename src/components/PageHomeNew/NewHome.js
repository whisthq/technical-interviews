import React, { Component } from 'react'
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import '../../static/App.css';


class PageHome extends Component {
  constructor(props) {
    super(props)
    this.state = { width: 0, height: 0, modalShow: false, showPopup: false}
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
      <div>Shopper</div>
    )
  }
}

function mapStateToProps(state) {
  return { 
    groceryItems: state.CartReducer.groceryItems
  }
}

export default connect(mapStateToProps)(PageHome)