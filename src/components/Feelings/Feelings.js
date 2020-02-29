import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Feelings extends Component {

state={
    feeling:''
}



    handleChange = (event, typeofChange) => {
        this.setState({
            feeling: event.target.value
            },
        );
    }


    buttonClick = () =>{
        console.log(this.state.feeling);
        
        this.props.dispatch({
            type:'ADD_FEELING',
            payload:this.state.feeling
        })
        this.props.history.push('/understanding')

    }
    
    render() {



        return (
            <div>
                <h1>Hi friend, how are you feeling today?</h1>
                <select id="feeling" name="feeling" onChange={this.handleChange}>
                    <option value="1">1 - Pretty Low</option>
                    <option value="2">2 - Not Great</option>
                    <option value="3">3 - Fine</option>
                    <option value="4">4 - Good</option>
                    <option value="5">5 - Fantastic</option>
                </select>
                <button onClick={this.buttonClick}>Next</button>
                 </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Feelings);
