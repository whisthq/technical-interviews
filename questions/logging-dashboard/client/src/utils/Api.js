export function apiPost(endpoint, body, token) {
    // var base_url = 'https://cube-vm-server.herokuapp.com/form/store'
    // var full_url = `${base_url}${endpoint}`
    return fetch(endpoint, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(body),
    }).then((response) => {
        return response.json().then((json) => ({ json, response }))
    })
}

export function apiGet(endpoint, token) {
    // var base_url = 'https://cube-vm-server.herokuapp.com/form/store'
    // var full_url = `${base_url}${endpoint}`
    return fetch(endpoint, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    }).then((response) => {
        return response.json().then((json) => ({ json, response }))
    })
}

export function format(fmt, ...args) {
    if (!fmt.match(/^(?:(?:(?:[^{}]|(?:\{\{)|(?:\}\}))+)|(?:\{[0-9]+\}))+$/)) {
        throw new Error('Invalid format string.')
    }
    return fmt.replace(
        /((?:[^{}]|(?:\{\{)|(?:\}\}))+)|(?:\{([0-9]+)\})/g,
        (m, str, index) => {
            if (str) {
                return str.replace(/(?:{{)|(?:}})/g, (m) => m[0])
            } else {
                if (index >= args.length) {
                    throw new Error('Argument index is out of range in format')
                }
                return args[index]
            }
        }
    )
}
