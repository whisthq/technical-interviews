import * as CartAction from '../actions/index'

const DEFAULT = {groceryItems: []}

export default function(state = DEFAULT, action) {
  switch (action.type) {
  	case CartAction.STORE_GROCERY_ITEM:
  		return {
  			...state,
  			groceryItems: state.groceryItems ? [...state.groceryItems, action.item] : []
  		}
    default:
      return state
  }
}
