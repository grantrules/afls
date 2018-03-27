import React from 'react';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui-icons/Grade';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import pink from 'material-ui/colors/pink';
import common from 'material-ui/colors/common';


import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui-icons/Add';

const pinkA200 = pink.A200;
const transparent = common.transparent;

const style = {
    button: {
        position: "fixed",
        bottom: 25,
        right: 25,
    }
}

const Students = () => (
    <div className="app">
    <List>
        <ListItem
            primaryText="Chelsea Otakan"
            leftIcon={<ActionGrade color={pinkA200} />}
        />
        <ListItem
            primaryText="Eric Hoffman"
            insetChildren={true}
        />
        <ListItem
            primaryText="James Anderson"
            insetChildren={true}
        />
        <ListItem
            primaryText="Kerem Suer"
            insetChildren={true}
        />
    </List>
    <Divider inset={true} />
    <List>
        <ListItem
            primaryText="Adelle Charles"
            leftAvatar={
                <Avatar
                    color={pinkA200} backgroundColor={transparent}
                    style={{ left: 8 }}
                >
                    A
          </Avatar>
            }
        />
        <ListItem
            primaryText="Adham Dannaway"
            insetChildren={true}
        />
        <ListItem
            primaryText="Allison Grayce"
            insetChildren={true}
        />
        <ListItem
            primaryText="Angel Ceballos"
            insetChildren={true}
        />
    </List>


    <FloatingActionButton style={style.button} secondary={true}>
          <ContentAdd />
        </FloatingActionButton>

    </div>

    )

export default Students