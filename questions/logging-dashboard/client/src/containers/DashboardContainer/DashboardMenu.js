import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'

import 'static/App.css'

import Logo from 'assets/logo.svg'

withRouter((props) => <DashboardMenu {...props} />)

class DashboardMenu extends Component {
    constructor(props) {
        super(props)
        this.state = { page: 'dashboard' }
    }

    render() {
        return (
            <div
                style={{
                    backgroundColor: 'white',
                    height: '100%',
                    width: 75,
                    minHeight: '100vh',
                    paddingRight: 25,
                    paddingLeft: 0,
                    paddingTop: 50,
                }}
            >
                <div style={{ paddingLeft: 25 }}>
                    <img
                        src={Logo}
                        alt=""
                        style={{ width: 30, height: 30, marginBottom: 70 }}
                    />
                </div>
                <div style={{ marginTop: 40, fontSize: 18 }}>
                    <div style={{ marginBottom: 30, marginLeft: 5 }}>
                        <Link
                            style={{
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                borderLeft: 'solid 4px #6241e8',
                                paddingLeft: 21,
                            }}
                            to="/"
                        >
                            <FontAwesomeIcon
                                icon={faList}
                                style={{
                                    color: '#111111',
                                    fontSize: 19,
                                }}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(DashboardMenu)
