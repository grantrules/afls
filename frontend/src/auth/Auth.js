import React from 'react'
import PropTypes from 'prop-types'

/**
 * Add auth details to context
 */
class Auth extends React.Component {

    getChildContext() {
        return { anonymous: true }
    }

    render() {
        return this.props.children
    }

}

Auth.childContextTypes = {
    /**
     * Current state of authorization
     */
    anonymous: PropTypes.bool,
}

export default Auth