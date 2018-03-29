import React from 'react'
import PropTypes from 'prop-types';

const isEmptyChildren = children => React.Children.count(children) === 0;



/**
 * Displays content based on authorization status.
 */
class Authorized extends React.Component {


    render() {

        return ((this.context.auth.anonymous === this.props.anonymous) || this.props.both) && this.renderChildren(this.props.children);

    }

    renderChildren(children) {

        if (typeof children === "function") return children(this.context.auth);

        if (children && !isEmptyChildren(children))
            return React.Children.only(children);

        return null;
    }

}
Authorized.contextTypes = {
    auth: PropTypes.shape({
        /**
         * Current state of authorization provided by Auth
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

Authorized.propTypes = {

    /**
     * If true, will display contents when user is not logged in.
     */
    anonymous: PropTypes.bool,

    /**
     * If true, it will always display.
     * Primarily for injecting context with withAuth()
     */
    both: PropTypes.bool,

    /**
     * Children nodes. Primarily for injecting context with withAuth()
     */
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),

};

Authorized.defaultProps = {

    anonymous: false,
    both: false

}


export default Authorized