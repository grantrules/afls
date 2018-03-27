import React from 'react'
import { List, ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import common from 'material-ui/colors/common';
import FloatingActionButton from 'material-ui/FloatingActionButton';
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
            <Subheader>Objectives</Subheader>
            <ListItem
                primaryText="Changes toilet paper roll when empty"
                secondaryText={
                    <p>
                        <span style={{ color: darkBlack }}>TL 19</span> --
                        When	existing	roll	ends,	learner
                        will	initiate	and	replace	with
                        new	toilet	paper	roll	when
                        existing	roll	ends
            </p>
                }
                secondaryTextLines={1}
            />
            <Divider inset={true} />



            <ListItem
                primaryText="Changes toilet paper roll when empty"
                secondaryText={
                    <p>
                        <span style={{ color: darkBlack }}>TL 19</span> --
                        When	existing	roll	ends,	learner
                        will	initiate	and	replace	with
                        new	toilet	paper	roll	when
                        existing	roll	ends
            </p>
                }
                secondaryTextLines={1}
            />
            <Divider inset={true} />


            <ListItem
                primaryText="Changes toilet paper roll when empty"
                secondaryText={
                    <p>
                        <span style={{ color: darkBlack }}>TL 19</span> --
                        When	existing	roll	ends,	learner
                        will	initiate	and	replace	with
                        new	toilet	paper	roll	when
                        existing	roll	ends
            </p>
                }
                secondaryTextLines={1}
            />
            <Divider inset={true} />

        </List>

        <FloatingActionButton style={style.button} secondary={true}>
          <ContentAdd />
        </FloatingActionButton>

        

    </div>
)

export default Objectives