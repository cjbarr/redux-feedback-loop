import React, { Component } from 'react';
import { connect } from 'react-redux';


class Confirmation extends Component {

    

    buttonClick = () => {

        this.props.history.push('/')

    }



    render() {



        return (
            <div>
                <h1>Thank you!</h1>
            <h3>Your Feedback has been submitted.</h3>

                <button onClick={this.buttonClick}>Back to Home</button>
    

            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Confirmation);
