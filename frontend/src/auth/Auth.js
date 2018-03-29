import React from 'react'
import PropTypes from 'prop-types'

/**
 * Add auth details to context
 */
class Auth extends React.Component {

    constructor(props) {
        super(props)

        this.loginCallback = this.loginCallback.bind(this)
        this.logoutCallback = this.logoutCallback.bind(this)

        this.state = { anonymous: true }
    }

    loginCallback(user, cb) {
        if (user) {
            this.setState({anonymous: false})
        }
        if (cb) cb(user)
    }

    logoutCallback(cb) {
        this.setState({anonymous: true})
        if (cb) cb()
    }

    componentDidMount() {
        this.props.provider.callback = this.loginCallback;
        this.props.provider.logoutCallback = this.logoutCallback
    }

    getChildContext() {
        return { anonymous: this.state.anonymous, provider: this.props.provider }
    }

    render() {
        return this.props.children
    }

}

Auth.propTypes = {
    /**
     * Login provider
     */
    provider: PropTypes.object,
}

Auth.childContextTypes = {
    /**
     * Current state of authorization
     */
    anonymous: PropTypes.bool,

    /**
     * Login provider
     */
    provider: PropTypes.object,
}

export default Auth