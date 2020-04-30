export const STORE_GROCERY_ITEM = "STORE_GROCERY_ITEM"


export function storeGroceryItem(item) {
	return {
		type: STORE_GROCERY_ITEM,
		item
	}
}
