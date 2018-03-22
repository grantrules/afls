import React, { Component } from 'react';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles'
import { colors } from 'material-ui/styles'
import { RaisedButton, FlatButton, AppBar, IconButton } from 'material-ui'
import Home from 'material-ui/svg-icons/action/assignment';


class Master extends Component {

    constructor(props, context) {
        super(props, context)

        this.muiTheme = getMuiTheme({
            palette: {
                primary1Color: colors.indigo300,
                primary2Color: colors.indigo300,
                primary3Color: colors.grey600,
                accent1Color: colors.pinkA200,
                accent2Color: colors.pinkA400,
                accent3Color: colors.pinkA100,
                userAgent: props.userAgent
            }
        })

    }

    render() {
        return (

            <MuiThemeProvider muiTheme={this.muiTheme}>
                <AppBar title="OMG"
                    iconElementRight={<RaisedButton label="Login" href="/login" backgroundColor={colors.indigo600} labelColor={colors.fullWhite} />}
                    iconElementLeft={<IconButton href="/"><Home /></IconButton>}
                />

                {this.props.children}

            </MuiThemeProvider>
        )
    }
}

export default Master