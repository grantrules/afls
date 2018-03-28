import React from 'react'
import PropTypes from 'prop-types'

/**
 * Add auth details to context
 */
class Auth extends React.Component {

    getChildContext() {
        return { anonymous: true, provider: this.props.provider }
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