import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import Button from '@material-ui/core/Button';

class Review extends Component {

    componentDidMount = () => {
        this.getFeedback();
    }

    state={feedbackList:[]}

    backClick = () => {
        this.props.history.push('/')
    }


    getFeedback = () => {
        Axios({
            method: 'GET',
            url: '/feedback',
        }).then((response) => {
            console.log(response);
            this.setState({
                feedbackList:response.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }

  
  

    render() {



        return (
            <div>
                <h1>Feedback from Database:</h1>
           
          <div>

                    {this.state.feedbackList.map(feedback => <ul key={feedback.id}> 
                    <li>Feedback ID: {feedback.id}</li>
                    <li>Feeling:{feedback.feeling}</li>
                    <li>Understanding:{feedback.understanding}</li>
                    <li>Support:{feedback.support}</li>
                    <li>Comments:{feedback.comments}</li>
                    </ul>)}

          </div>


           <div></div>
                <Button size="small" variant="contained" color="primary" disableElevation onClick={this.backClick}>To Home</Button>


            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Review);
