import React, { Component } from 'react';
import { Button  } from 'material-ui'
import Login from '../dialogs/Login'
import Authorized from '../../auth/Authorized'


/**
 * LoginFrag contains login button & dialog
 */
class LoginFrag extends Component {

    constructor(props) {
        super(props);
        this.state = { login: false };
    }

    toggle = () => this.setState({ login: !this.state.login })

    render() {
        return (
            <div>
                <Authorized anonymous>
                    <Button color="inherit" onClick={this.toggle}>
                        Login
                    </Button>
                </Authorized>

                <Login open={this.state.login} close={this.toggle} />
            </div>
        );
    }
}
export default LoginFrag;