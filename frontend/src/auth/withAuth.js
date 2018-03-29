import React from "react";
import PropTypes from "prop-types";
import hoistStatics from "hoist-non-react-statics";
import Authorized from "./Authorized";

/**
 * https://github.com/ReactTraining/react-router/blob/master/packages/react-router/modules/withRouter.js
 *
 * A public higher-order component to access the imperative API
 */
const withAuth = Component => {
    const C = props => {
        const {
            wrappedComponentRef,
            ...remainingProps
        } = props;
        return (
            <Authorized both
                children={authComponentProps => (
                <Component
                    {...remainingProps}
                    {...authComponentProps}
                    ref={wrappedComponentRef}/>)}
                />
        );
    };

    C.displayName = `withAuth(${Component.displayName || Component.name})`;
    C.WrappedComponent = Component;
    C.propTypes = {
        wrappedComponentRef: PropTypes.func
    };

    return hoistStatics(C, Component);
};

export default withAuth;