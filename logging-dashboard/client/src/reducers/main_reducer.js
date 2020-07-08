import * as Action from 'actions/index'

const DEFAULT = {
    logs: [],
}

export default function (state = DEFAULT, action) {
    switch (action.type) {
        case Action.STORE_LOGS:
            return {
                ...state,
                logs: action.logs,
            }
        default:
            return state
    }
}
