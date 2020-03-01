import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import Button from '@material-ui/core/Button';

class Review extends Component {

    backClick = () => {
        this.props.history.push('/support')
    }


    buttonClick = () => {
        let objectToSend={feeling: this.props.reduxState.feelingReducer,
            understanding: this.props.reduxState.understandingReducer,
            support: this.props.reduxState.supportReducer,
            comments: this.props.reduxState.commentsReducer
                }

        Axios({
            method: 'POST',
            url: '/feedback',
            data: objectToSend
        }).then((response) => {
            console.log(response);
            this.props.dispatch({
                    type: 'NEW_FEEDBACK',
                    })
                this.props.history.push('/confirmation')
        }).catch((error) => {
            console.log(error)
        })
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
            
                <div></div>
                <br></br>
                <Button size="medium" variant="contained" color="primary" disableElevation onClick={this.buttonClick}>Submit Feedback</Button>
                <br></br>
                <br></br>
                <div></div>
                <Button size="small" variant="contained" color="secondary" disableElevation onClick={this.backClick}>Back</Button>

            
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Review);
