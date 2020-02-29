import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Review extends Component {



    buttonClick = () => {
        this.props.history.push('/')

    }
    render() {



        return (
            <div>
                <h1>Your Feedback for today:</h1>
                <h3>Your Current Feelings:</h3>
                <p>{this.props.reduxState.feelingReducer}</p>
                <h3>Your Current Understanding:</h3>
                <p>{this.props.reduxState.understandingReducer}</p>
                <h3>Your Current Support:</h3>
                <h3>Your Current Comments:</h3>
            
                <button onClick={this.buttonClick}>Submit Feedback</button>
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Review);
