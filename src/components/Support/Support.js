import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Support extends Component {


    buttonClick = () => {
        this.props.history.push('/comments')

    }

    render() {



        return (
            <div>
                <h1>Do you feel supported by our staff?</h1>
                <select id="feeling" name="feeling">
                    <option value="1">1 - Who?</option>
                    <option value="2">2 - They're fine I guess</option>
                    <option value="3">3 - Sure.</option>
                    <option value="4">4 - They make my day better!</option>
                    <option value="5">5 - All staff are invited to my wedding</option>
                </select>
                <button onClick={this.buttonClick}>Next</button>
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(Support);
