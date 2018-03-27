import React, { Component } from 'react';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles'
import { colors } from 'material-ui/styles'

import { RaisedButton, AppBar, IconButton } from 'material-ui'
import Home from 'material-ui-icons/Assignment';
import NavDrawer from './fragments/NavDrawer'


class Master extends Component {

    constructor(props, context) {
        super(props, context)

        this.muiTheme = getMuiTheme({
            palette: {
                /*
                primary1Color: colors.indigo[300],
                primary2Color: colors.indigo[300],
                primary3Color: colors.grey.A600,
                accent1Color: colors.cyan.A700,
                accent2Color: colors.cyan.A200,
                accent3Color: colors.cyan.A100,
                /*
                accent1Color: colors.pinkA200,
                accent2Color: colors.pinkA400,
                accent3Color: colors.pinkA100,
                */
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

                <NavDrawer/>

                <div style={{marginLeft: 260}}>

                {this.props.children}

                </div>

            </MuiThemeProvider>
        )
    }
}

export default Master