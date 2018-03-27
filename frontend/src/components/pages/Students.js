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
            <ListItemText primary="Chelsea Otakan"/>
        </ListItem>
        <ListItem>
            <ListItemText primary="Eric Hoffman"/>
        </ListItem>
        <ListItem>
            <ListItemText primary="James Anderson"/>
        </ListItem>
        <ListItem>
            <ListItemText primary="Kerem Suer"/>
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
            <ListItemText primary="Chelsea Otakan"/>
        </ListItem>

        <ListItem>
            <ListItemText primary="Adam Adannaway"/>
        </ListItem>
        <ListItem>
            <ListItemText primary="Allie Grace"/>
        </ListItem>
        <ListItem>
            <ListItemText primary="Angel Cuervas"/>
        </ListItem>
    </List>


    <Button variant="fag" style={style.button} secondary={true}>
        <ContentAdd />
    </Button>


    </div>

    )

export default Students