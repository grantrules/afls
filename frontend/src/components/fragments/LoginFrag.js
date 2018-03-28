import React, { Component } from 'react';
import { Button  } from 'material-ui'
import Login from '../dialogs/Login'

class LoginFrag extends Component {

    constructor(props) {
        super(props);
        this.state = { login: false };
    }

    toggle = () => this.setState({ login: !this.state.login })

    render() {
        return (
        <div>
            <Button color="inherit" onClick={this.toggle}>
                Login
            </Button>
            <Login open={this.state.login} close={this.toggle} />
        </div>
        );
    }
}
export default LoginFrag;