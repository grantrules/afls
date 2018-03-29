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

        this.state = { anonymous: true, user: false }
    }

    /**
     * Login callback with user details, called by provider
     */
    loginCallback(user, next) {
        if (user) {
            this.setState({anonymous: false, user: user})
        }
        if (next) next(user)
    }

    /**
     * Logout callback, called by provider
     */
    logoutCallback(next) {
        this.setState({anonymous: true, user: false})
        if (next) next()
    }

    componentDidMount() {
        this.props.provider.callback = this.loginCallback;
        this.props.provider.logoutCallback = this.logoutCallback
    }

    getChildContext() {
        return { 
            auth: { 
                anonymous: this.state.anonymous,
                provider: this.props.provider,
                user: this.state.user
            }
        }
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
    auth: PropTypes.shape({
        /**
         * Current state of authorization
         */
        anonymous: PropTypes.bool,

        /**
         * Logged in user information
         */
        user: PropTypes.object,

        /**
         * Login provider
         */
        provider: PropTypes.object,
    })
}

export default Auth