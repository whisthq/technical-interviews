import React, { Component } from 'react'
import { connect } from 'react-redux'

import 'static/App.css'
import { fetchLogs } from 'actions/index.js'

class Logs extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.dispatch(fetchLogs())
    }

    componentDidUpdate(prevProps) {}

    render() {
        console.log('Open up your console to see the logs!')
        console.log(this.props.logs)

        return (
            <div
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                Your code here!
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        logs: state.MainReducer.logs,
    }
}

export default connect(mapStateToProps)(Logs)
