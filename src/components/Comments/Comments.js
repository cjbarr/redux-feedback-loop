import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {



    state = {
        comment: ''
    }



    handleChange = (event, typeofChange) => {
        this.setState({
            comment: event.target.value
        },
        );
    }


    buttonClick = () => {


        this.props.dispatch({
            type: 'ADD_COMMENT',
            payload: this.state.comment
        })
        this.props.history.push('/review')

    }

    render() {



        return (
            <div>
                <h1>Is there anything you'd like to talk about?</h1>
                <textarea rows="5" cols="50" onChange={this.handleChange} />
                <button onClick={this.buttonClick}>Next</button>
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(Comments);
