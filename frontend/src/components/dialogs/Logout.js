import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
class Logout extends React.Component {

    render() {
        let close = this.props.close;
        const actions = [
            <RaisedButton
                label="No"
                primary={true}
                onClick={close}
            />,
            <FlatButton
                label="Yes"
                primary={true}
                disabled={false}
                onClick={close}
            />,
        ];

        return (
            <Dialog
                title="Log Out?"
                actions={actions}
                modal={true}
                open={this.props.open}
            >
                Are you sure you want to log out?
        </Dialog>
        );
    }
}

export default Logout