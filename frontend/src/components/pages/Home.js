import React from 'react';
import { Paper, RaisedButton } from 'material-ui'

const style = {
    paper: {
        width: 800,
        padding: 20,
        margin: "0 auto"
    }
}

const Home = () => (

    <div className="App">
        <Paper style={style.paper}>
            <img src="/afls.jpg" alt="afls books" style={{ width: "50%", float: "left" }} />
            <div>
                
                <p>Hello, This is objective mastery grading software for Assessment of Functional Living Skills</p>
                <p>Do your school use these books and need a digital solution to grading?</p>
                <RaisedButton label="Contact us" href="/contact-us"/>

                
                </div>
            <br style={{clear: "both"}}/>
        </Paper>

    </div>
)

export default Home