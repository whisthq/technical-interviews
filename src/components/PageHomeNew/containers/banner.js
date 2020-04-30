import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = { width: 0, height: 0 }
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
    if (this.state.width < 700) {
      return (
        <div></div>
      )
    }

    return (
      <div
        className="Rectangle"
        style={{
          display: 'flex',
          textAlign: 'left',
          width: '100%',
          margin: 'auto',
          padding: '10px 15px',
          backgroundColor: '#EFEFEF'
        }}
      >
        <div
          style={{
            width: this.props.leftPercent ? this.props.leftPercent : '60%',
            color: 'white', 
            paddingLeft: 30
            // display: "flex", flexDirection: "column", justifyContent: "center"
          }}
        >
          <div>
            {this.props.object}
          </div>
        </div>
      </div>
    )
  }
}

export default Banner
