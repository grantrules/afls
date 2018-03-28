import React from 'react'
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider'
import common from 'material-ui/colors/common';
import Button from 'material-ui/Button';
import ContentAdd from 'material-ui-icons/Add';

const darkBlack = common.darkBlack;


const style = {
    button: {
        position: "fixed",
        bottom: 25,
        right: 25,
    }
}


const Objectives = () => (
    <div className="App">
        <List>
            <ListItem>
                <ListItemText primary="Changes toilet paper when empty" secondary={
                    <p>
                    <span style={{ color: darkBlack }}>TL 19</span> --
                        When	existing	roll	ends,	learner
                        will	initiate	and	replace	with
                        new	toilet	paper	roll	when
                        existing	roll	ends
                    </p>
                    }/>
            </ListItem>
            <Divider inset={true} />

<ListItem>
                <ListItemText primary="Changes toilet paper when empty" secondary={
                    <p>
                    <span style={{ color: darkBlack }}>TL 19</span> --
                        When	existing	roll	ends,	learner
                        will	initiate	and	replace	with
                        new	toilet	paper	roll	when
                        existing	roll	ends
                    </p>
                    }/>
            </ListItem>
            <Divider inset={true} />
        </List>

        <Button variant="fab" style={style.button} color="secondary">
            <ContentAdd />
        </Button>



    </div>

)

export default Objectives