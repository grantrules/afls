import React from 'react'

class AddDialog extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

    }

    handleSubmit(event) {
        event.preventDefault();
    }
}

export default AddDialog;