export const STORE_GROCERY_ITEM = "STORE_GROCERY_ITEM"
export const DELETE_GROCERY_ITEM = "DELETE_GROCERY_ITEM"
export const ADD_PURCHASED_LABEL_TO_ITEM = "ADD_PURCHASED_LABEL_TO_ITEM"
export const ADD_NONAVAILABLE_LABEL_TO_ITEM = "ADD_NONAVAILABLE_LABEL_TO_ITEM"
export const REMOVE_LABEL_FROM_ITEM = "REMOVE_LABEL_FROM_ITEM"

export function storeGroceryItem(item) {
	return {
		type: STORE_GROCERY_ITEM,
		item
	}
}


export function deleteGroceryItem(item) {
	return {
		type: DELETE_GROCERY_ITEM,
		item
	}
}


export function addPurchasedLabelToItem(item) {
	return {
		type: ADD_PURCHASED_LABEL_TO_ITEM,
		item
	}
}

export function addNonAvailableLabelToItem(item) {
	return {
		type: ADD_NONAVAILABLE_LABEL_TO_ITEM,
		item
	}
}

export function removeLabelFromItem(item) {
	return {
		type: REMOVE_LABEL_FROM_ITEM,
		item
	}
}