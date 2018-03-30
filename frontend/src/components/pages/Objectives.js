import React from 'react'
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider'
import common from 'material-ui/colors/common';
import Button from 'material-ui/Button';
import ContentAdd from 'material-ui-icons/Add';

import AddObjective from '../dialogs/AddObjective'

const darkBlack = common.darkBlack;


const style = {
    button: {
        position: "fixed",
        bottom: 25,
        right: 25,
    }
}


class Objectives extends React.Component {
    constructor(props) {
        super(props);
        this.state = { addObjective: false }
        this.toggleAddObjective = this.toggleAddObjective.bind(this);
    }

    toggleAddObjective() {
        this.setState({addObjective: !this.state.addObjective})
    }
    
    render() {
        return (
    <div className="App">
        <List>
            <ListItem>
                <ListItemText primary="Changes toilet paper when empty" secondary={<span>
                    <span style={{ color: darkBlack }}>TL 19</span> --
                        When	existing	roll	ends,	learner
                        will	initiate	and	replace	with
                        new	toilet	paper	roll	when
                        existing	roll	ends
                    </span>}/>
            </ListItem>
            <Divider inset={true} />

<ListItem>
<ListItemText primary="Changes toilet paper when empty" secondary={<span>
                    <span style={{ color: darkBlack }}>TL 19</span> --
                        When	existing	roll	ends,	learner
                        will	initiate	and	replace	with
                        new	toilet	paper	roll	when
                        existing	roll	ends</span>
                    }/>
            </ListItem>
            <Divider inset={true} />
        </List>

        <Button variant="fab" style={style.button} color="secondary" onClick={this.toggleAddObjective}>
            <ContentAdd />
        </Button>

        <AddObjective open={this.state.addObjective} close={this.toggleAddObjective}/>



    </div>

)
    }
}

export default Objectives