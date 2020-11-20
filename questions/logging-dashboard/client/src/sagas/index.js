/* eslint-disable no-unused-vars */
import { put, takeEvery, all, call, select, delay } from 'redux-saga/effects'
import * as Action from 'actions/index.js'
import { apiPost, apiGet } from 'utils/Api.js'
import { format } from 'utils/String.js'

import history from '../history'
import { config } from '../constants.js'

function* fetchLogs(action) {
    const { json } = yield call(
        apiGet,
        format(
            config.url.PRIMARY_SERVER + '/logs?start={0}&end={1}',
            '0',
            '100'
        )
    )

    if (json && json.logs) {
        yield put(Action.storeLogs(json.logs))
    }
}

export default function* rootSaga() {
    yield all([takeEvery(Action.FETCH_LOGS, fetchLogs)])
}
