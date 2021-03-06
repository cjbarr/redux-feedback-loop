import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';



class Feelings extends Component {

state={
    feeling:'0'
}
//initial state prevents empty response


    handleChange = (event, typeofChange) => {
        this.setState({
            feeling: event.target.value
            },
        );
    }//handles change on selector

    buttonClick = () =>{
       if (this.state.feeling==='0'){alert('A selection must be made!');return};
        
        this.props.dispatch({
            type:'ADD_FEELING',
            payload:this.state.feeling
        })
        this.props.history.push('/understanding')

    }//saves selected input to reducer, pushes page to next input, understanding

    render() {



        return (
            <div>
                <h1>Hi friend, how are you feeling today?</h1>
                <select id="feeling" name="feeling" onChange={this.handleChange}>
                    <option value="0"></option>
                    <option value="1">1 - Pretty Low</option>
                    <option value="2">2 - Not Great</option>
                    <option value="3">3 - Fine</option>
                    <option value="4">4 - Good</option>
                    <option value="5">5 - Fantastic</option>
                </select>
                <div></div>
                <br></br>
                <Button size="medium" variant="contained" color="primary" disableElevation onClick={this.buttonClick}>Next</Button>
        
                 </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Feelings);
