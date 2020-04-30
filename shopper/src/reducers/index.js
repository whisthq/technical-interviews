import CartReducer from './cart_reducer'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  CartReducer: CartReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'RESET_REDUX') {
    state = undefined
  }

  return reducers(state, action)
}

export default rootReducer
