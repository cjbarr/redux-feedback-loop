import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';


class Confirmation extends Component {

    

    buttonClick = () => {

        this.props.history.push('/')

    }



    render() {



        return (
            <div>
                <h1>Thank you!</h1>
            <h3>Your Feedback has been submitted.</h3>

                <Button size="small" variant="contained" color="primary" disableElevation onClick={this.buttonClick}>Back to Home</Button>
    

            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Confirmation);
