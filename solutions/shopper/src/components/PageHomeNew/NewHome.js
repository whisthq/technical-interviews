import React, { Component } from 'react'
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { storeGroceryItem, deleteGroceryItem, addPurchasedLabelToItem, addNonAvailableLabelToItem, removeLabelFromItem } from '../../actions/index.js'
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

  addItemToList = () => {
    if(!this.props.groceryItems.includes(this.state.currentGroceryItem)) {
      this.props.dispatch(storeGroceryItem(this.state.currentGroceryItem))
    }
  }

  deleteGroceryItem = (item) => {
    this.props.dispatch(deleteGroceryItem(item))
  }

  addLabel = (label, item) => {
    if(label == 'Purchased') {
      if(!this.props.purchasedItems.includes(item)) {
        this.props.dispatch(addPurchasedLabelToItem(item))
      }
    } else if(label == 'Not Available') {
      if(!this.props.nonAvailableItems.includes(item)) {
        this.props.dispatch(addNonAvailableLabelToItem(item))
      }
    } else if(label == 'Remove Label') {
      this.props.dispatch(removeLabelFromItem(item))
    }
  }

  changeCurrentGroceryItem = (evt) => {
    this.setState({currentGroceryItem: evt.target.value})
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false })
    if (this.state.width > 700 && this.state.modalShow) {
      modalClose()
    }
    return (
      <Container style = {{paddingTop: 50}}>
        <div>
          <div style = {{fontWeight: 'bold', marginBottom: 20, fontSize: 40}}> SHOPPER </div>
          <input type = "text" onChange = {this.changeCurrentGroceryItem} placeholder = "Enter a grocery item" style = {{border: 'none', borderRadius: 3, padding: '10px 5px', background: '#EFEFEF', marginBottom: 10, width: 400}}/>
          <br/>
          <Button onClick = {this.addItemToList} style = {{width: 400}}>
            Submit
          </Button>
        </div>
        <div style = {{marginTop: 30}}>
          <div style = {{fontWeight: 'bold', marginBottom: 20, fontSize: 20}}>
            Grocery List 
          </div>
          <div style = {{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', alignContent: 'flex-start'}}>
            {this.props.groceryItems.map((value, index) => {
              return(
                <div style = {{minHeight: 160, padding: 25, borderRadius: 4, background: '#EFEFEF', marginBottom: 10, marginRight: 10}}>
                  <div style = {{display: 'flex', marginBottom: 15}}>
                    <div style = {{fontWeight: 'bold'}}>
                      {value}
                    </div>
                    <button onClick = {() => this.deleteGroceryItem(value)} style = {{marginLeft: 20, color: 'red', background: 'none', border: 'none'}}>
                      Delete
                    </button>
                  </div>
                  <DropdownButton id="dropdown-basic-button" title="Add Label " style = {{width: '100%'}}>
                    <Dropdown.Item onClick = {() => this.addLabel("Purchased", value)}>Purchased</Dropdown.Item>
                    <Dropdown.Item onClick = {() => this.addLabel("Not Available", value)}>Not Found</Dropdown.Item>
                    <Dropdown.Item onClick = {() => this.addLabel("Remove Label", value)}>Remove Label</Dropdown.Item>
                  </DropdownButton>
                  {
                  this.props.purchasedItems.includes(value)
                  ?
                  <div style = {{color: 'green'}}>
                    Purchased 
                  </div>
                  :
                  (
                  this.props.nonAvailableItems.includes(value)
                  ?
                  <div style = {{color: 'purple'}}>
                    Not Available 
                  </div>
                  :
                  <div></div>
                  )
                  }
                </div>
              )
            })}
          </div>
          <div>
          </div>
        </div>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return { 
    groceryItems: state.CartReducer.groceryItems ? state.CartReducer.groceryItems : [],
    purchasedItems: state.CartReducer.purchasedItems ? state.CartReducer.purchasedItems : [],
    nonAvailableItems: state.CartReducer.nonAvailableItems ? state.CartReducer.nonAvailableItems : []
  }
}

export default connect(mapStateToProps)(PageHome)