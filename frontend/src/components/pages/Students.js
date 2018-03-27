import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import ActionGrade from 'material-ui-icons/Grade';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import pink from 'material-ui/colors/pink';
import common from 'material-ui/colors/common';


import Button from 'material-ui/Button';
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
        <ListItem>
            <Avatar>
                <ActionGrade color={pinkA200}/>
            </Avatar>
            <ListItemText inset primary="Chelsea Otakan"/>
        </ListItem>
        <ListItem>
            <ListItemText inset primary="Eric Hoffman"/>
        </ListItem>
        <ListItem>
            <ListItemText inset primary="James Anderson"/>
        </ListItem>
        <ListItem>
            <ListItemText inset primary="Kerem Suer"/>
        </ListItem>
    </List>
    <Divider inset={true} />
    <List>
        <ListItem>
        <Avatar
                    color={pinkA200} backgroundColor={transparent}
                    style={{ left: 8 }}
                >
                    A
          </Avatar>
            <ListItemText inset primary="Chelsea Otakan"/>
        </ListItem>

        <ListItem>
            <ListItemText inset primary="Adam Adannaway"/>
        </ListItem>
        <ListItem>
            <ListItemText inset primary="Allie Grace"/>
        </ListItem>
        <ListItem>
            <ListItemText inset primary="Angel Cuervas"/>
        </ListItem>
    </List>


    <Button variant="fag" style={style.button} secondary={true}>
        <ContentAdd />
    </Button>


    </div>

    )

export default Students