import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class Comments extends Component {

state = {
    comment:''
}//initial to prevent null or undefined if they input nothing


    handleChange = (event, typeofChange) => {
        this.setState({
            comment: event.target.value
        },
        );
    }//saves value of text input

    backClick = () => {
        this.props.history.push('/support')
    }//pushes back to support page

    buttonClick = () => {


        this.props.dispatch({
            type: 'ADD_COMMENT',
            payload: this.state.comment
        })
        this.props.history.push('/review')

    }//captures input to reducer, takes to review page

    render() {



        return (
            <div>
                <h1>Is there anything you'd like to talk about?</h1>
                <textarea rows="5" cols="50" onChange={this.handleChange} />
                <div></div>
                <br></br>
                <Button size="medium" variant="contained" color="primary" disableElevation onClick={this.buttonClick}>Next</Button>
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
export default connect(putReduxStateOnProps)(Comments);
