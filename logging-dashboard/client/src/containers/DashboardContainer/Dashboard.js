import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import DashboardMenu from 'containers/DashboardContainer/DashboardMenu'
import Logs from 'containers/DashboardContainer/LogsPage/Logs'

import 'static/App.css'

class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    }

    componentDidMount() {
        this.updateWindowDimensions()
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight })
    }

    render() {
        return (
            <div style={{ backgroundColor: '#f3f2f5', minHeight: '100vh' }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ width: 75, margin: 0 }}>
                        <DashboardMenu />
                    </div>
                    <div
                        style={{
                            width: 'calc(100%-75px)',
                            margin: 0,
                            overflowX: 'hidden',
                        }}
                    >
                        <div className="p-5">
                            <Switch>
                                <Route path="/" component={Logs} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(Admin)
