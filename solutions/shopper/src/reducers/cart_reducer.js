import * as CartAction from '../actions/index'

const DEFAULT = {groceryItems: [], purchasedItems: [], nonAvailableItems: []}

export default function(state = DEFAULT, action) {
  switch (action.type) {
  	case CartAction.STORE_GROCERY_ITEM:
  		return {
  			...state,
  			groceryItems: state.groceryItems ? [...state.groceryItems, action.item] : [action.item]
  		}
  	case CartAction.DELETE_GROCERY_ITEM:
  		return {
  			...state,
  			groceryItems: state.groceryItems ? state.groceryItems.filter(item => item !== action.item) : []
  		}
  	case CartAction.ADD_PURCHASED_LABEL_TO_ITEM:
  		return {
  			...state,
  			purchasedItems: state.purchasedItems ? [...state.purchasedItems, action.item] : [action.item],
  			nonAvailableItems: state.nonAvailableItems ? state.nonAvailableItems.filter(item => item !== action.item) : []
  		}
  	case CartAction.ADD_NONAVAILABLE_LABEL_TO_ITEM:
  		return {
  			...state,
  			nonAvailableItems: state.nonAvailableItems ? [...state.nonAvailableItems, action.item] : [action.item],
  			purchasedItems: state.purchasedItems ? state.purchasedItems.filter(item => item !== action.item) : []
  		}
  	case CartAction.REMOVE_LABEL_FROM_ITEM:
  		return {
  			...state,
  			purchasedItems: state.purchasedItems.filter(item => item !== action.item),
  			nonAvailableItems: state.nonAvailableItems.filter(item => item !== action.item)
  		}
    default:
      return state
  }
}
