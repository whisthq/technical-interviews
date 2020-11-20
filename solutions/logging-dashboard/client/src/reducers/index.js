import MainReducer from 'reducers/main_reducer'
import { combineReducers } from 'redux'

const reducers = combineReducers({
    MainReducer: MainReducer,
})

const rootReducer = (state, action) => {
    if (action.type === 'RESET_REDUX') {
        state = undefined
    }

    return reducers(state, action)
}

export default rootReducer
