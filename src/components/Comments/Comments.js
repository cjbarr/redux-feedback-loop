import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

    buttonClick = () => {
        this.props.history.push('/review')

    }

    render() {



        return (
            <div>
                <h1>Is there anything you'd like to talk about?</h1>
                <textarea rows="5" cols="50" />
                <button onClick={this.buttonClick}>Next</button>
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(Comments);
