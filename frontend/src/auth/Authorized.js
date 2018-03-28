import React from 'react'
import PropTypes from 'prop-types';


/**
 * Displays content based on authorization status.
 */
class Authorized extends React.Component {


    render() {

        return (this.context.anonymous === this.props.anonymous) && this.props.children

    }

}
Authorized.contextTypes = {
    /**
     * Current state of authorization provided by Auth
     */
    anonymous: PropTypes.bool,
}

Authorized.propTypes = {
    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * If true, will display contents when user is not logged in.
     */
    anonymous: PropTypes.bool,
};

Authorized.defaultProps = {

    anonymous: false

}


export default Authorized