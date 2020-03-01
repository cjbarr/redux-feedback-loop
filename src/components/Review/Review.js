import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Axios from 'axios';

class Review extends Component {

    backClick = () => {
        this.props.history.push('/support')
    }


    buttonClick = () => {

        // Axios({
        //     method: 'POST',
        //     url: '/api/order',
        //     data: objectToSend
        // }).then((response) => {
        //     console.log(response);
        //     alert('Your order has been submitted!');
        //    


                    this.props.dispatch({
                    type: 'NEW_FEEDBACK',
                })
                this.props.history.push('/')
        // }).catch((error) => {
        //     console.log
  
    
    // })
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
                <p>{this.props.reduxState.supportReducer}</p>
                <h3>Your Current Comments:</h3>
                <p>{this.props.reduxState.commentsReducer}</p>
            
                <button onClick={this.buttonClick}>Submit Feedback</button>
                <div><button onClick={this.backClick}>Back</button></div>
            
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Review);
