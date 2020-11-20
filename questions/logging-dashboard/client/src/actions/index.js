export const FETCH_LOGS = 'FETCH_LOGS'
export const STORE_LOGS = 'STORE_LOGS'

export function fetchLogs() {
    return {
        type: FETCH_LOGS,
    }
}

export function storeLogs(logs) {
    return {
        type: STORE_LOGS,
        logs,
    }
}
