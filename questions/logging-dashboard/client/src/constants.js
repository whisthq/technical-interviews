/* eslint-disable no-unused-vars */
const staging = {
    url: {
        PRIMARY_SERVER: 'http://127.0.0.1:5000',
        // Replace this endpoint with your localhost URL and port
    },
}

export const config = process.env.NODE_ENV === 'development' ? staging : staging
