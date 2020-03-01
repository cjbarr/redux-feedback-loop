import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Understanding extends Component {

    state={
        understanding:'0'
    }


    handleChange = (event, typeofChange) => {
        this.setState({
            understanding: event.target.value
        },
        );
    }

    backClick = () => {
        this.props.history.push('/')
    }

    buttonClick = () => {
        if (this.state.understanding === '0') { alert('A selection must be made!'); return };

        this.props.dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: this.state.understanding
        })
        this.props.history.push('/support')

    }
    render() {



        return (
            <div>
                <h1>How about the material we covered?</h1>
                <select id="feeling" name="feeling" onChange={this.handleChange}>
                    <option value="0"></option>
                    <option value="1">1 - I am completely lost</option>
                    <option value="2">2 - Somewhat confused</option>
                    <option value="3">3 - I feel alright about it</option>
                    <option value="4">4 - Pretty confident</option>
                    <option value="5">5 - There is nothing more to learn</option>
                </select>
                <button onClick={this.buttonClick}>Next</button>
                <div><button onClick={this.backClick}>Back</button></div>
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(Understanding);
